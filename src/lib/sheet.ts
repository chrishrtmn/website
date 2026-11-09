// Bottom-sheet behaviour shared by the paparazzi and Top 8 trays.
// Position is driven by --y (px from rest); CSS maps it to translateY.
// Open eases in, close eases out, the grab handle drags 1:1 downward,
// rubber-bands upward, and dismisses on distance or fling.

const EASE_DRAWER = 'cubic-bezier(0.32, 0.72, 0, 1)';
const EASE_OUT_FAST = 'cubic-bezier(0.4, 0, 1, 1)';
const EASE_SETTLE = 'cubic-bezier(0.34, 1.3, 0.64, 1)';

export interface Sheet {
  open(): void;
  close(ms?: number): Promise<void>;
  readonly el: HTMLDialogElement;
}

export interface SheetOptions {
  onOpen?(el: HTMLDialogElement): void;
  onClose?(el: HTMLDialogElement): void;
  focus?: string;
}

const motionOn = () => document.documentElement.dataset.motion !== 'off';

export function sheet(el: HTMLDialogElement, opts: SheetOptions = {}): Sheet {
  const grab = el.querySelector<HTMLElement>('[data-sheet-grab]');
  const surfaces = [grab, ...el.querySelectorAll<HTMLElement>('[data-sheet-drag]')].filter(Boolean) as HTMLElement[];
  let lastFocus: HTMLElement | null = null;
  let closing = false;

  const height = () => el.getBoundingClientRect().height || innerHeight;
  const setY = (px: number) => el.style.setProperty('--y', `${px}px`);
  const getY = () => parseFloat(el.style.getPropertyValue('--y')) || 0;

  function animateTo(px: number, ms: number, easing = EASE_DRAWER): Promise<void> {
    el.getAnimations().forEach((a) => a.cancel());
    if (!motionOn() || ms === 0) {
      setY(px);
      return Promise.resolve();
    }
    const anim = el.animate([{ '--y': `${getY()}px` } as Keyframe, { '--y': `${px}px` } as Keyframe], {
      duration: ms,
      easing,
      fill: 'forwards',
    });
    return anim.finished
      .then(() => {
        anim.cancel();
        setY(px);
      })
      .catch(() => {});
  }

  function open() {
    if (el.open) return;
    lastFocus = document.activeElement as HTMLElement;
    closing = false;
    el.showModal();
    document.body.style.overflow = 'hidden';
    setY(height());
    el.classList.remove('is-in', 'is-closing');
    void el.offsetWidth;
    el.classList.add('is-in');
    animateTo(0, 480);
    opts.onOpen?.(el);
    el.querySelector<HTMLElement>(opts.focus ?? '[data-sheet-close]')?.focus();
  }

  async function close(ms = 320) {
    if (!el.open || closing) return;
    closing = true;
    el.classList.add('is-closing');
    await animateTo(height(), ms, EASE_OUT_FAST);
    el.close();
  }

  el.addEventListener('cancel', (e) => {
    e.preventDefault();
    close();
  });
  el.addEventListener('close', () => {
    document.body.style.overflow = '';
    el.classList.remove('is-in', 'is-closing', 'is-dragging');
    closing = false;
    opts.onClose?.(el);
    lastFocus?.focus();
  });
  el.addEventListener('click', (e) => {
    if (e.target === el) close();
  });
  el.querySelectorAll<HTMLElement>('[data-sheet-close]').forEach((b) => b.addEventListener('click', () => close()));

  if (surfaces.length) {
    let startY = 0;
    let lastY = 0;
    let lastT = 0;
    let vel = 0;
    let dragging = false;
    let active: HTMLElement | null = null;
    const rubber = (d: number) => d / (1 + Math.abs(d) / 80);

    const down = (surface: HTMLElement) => (e: PointerEvent) => {
      if (closing) return;
      if ((e.target as HTMLElement).closest('a, button, input, textarea, select, label')) return;
      active = surface;
      dragging = true;
      startY = lastY = e.clientY;
      lastT = e.timeStamp;
      vel = 0;
      el.getAnimations().forEach((a) => a.cancel());
      el.classList.add('is-dragging');
      surface.setPointerCapture(e.pointerId);
    };

    const move = (e: PointerEvent) => {
      if (!dragging) return;
      const d = e.clientY - startY;
      const dt = e.timeStamp - lastT || 16;
      vel = (e.clientY - lastY) / dt;
      lastY = e.clientY;
      lastT = e.timeStamp;
      setY(d >= 0 ? d : rubber(d));
    };

    const release = (e: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      el.classList.remove('is-dragging');
      try {
        active?.releasePointerCapture(e.pointerId);
      } catch {}
      active = null;
      const d = e.clientY - startY;
      const h = height();
      const flung = vel > 0.5;
      if (d > h * 0.25 || (flung && d > 24)) {
        const remaining = Math.max(0, h - d);
        close(Math.min(320, Math.max(140, remaining / Math.max(vel, 1.2))));
      } else {
        animateTo(0, 420, EASE_SETTLE);
      }
    };
    for (const surface of surfaces) {
      surface.addEventListener('pointerdown', down(surface));
      surface.addEventListener('pointermove', move);
      surface.addEventListener('pointerup', release);
      surface.addEventListener('pointercancel', release);
    }
  }

  return { open, close, el };
}
