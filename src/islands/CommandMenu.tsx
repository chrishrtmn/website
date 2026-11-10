import { useEffect, useMemo, useRef, useState } from 'preact/hooks';
import { UNLOCK_EVENT, UNLOCK_KEY } from '~/content/top8';
import './CommandMenu.css';

export interface Command {
  id: string;
  group: 'go' | 'projects' | 'posts' | 'do' | 'find' | 'hidden';
  label: string;
  hint?: string;
  href?: string;
  action?: 'copy-email' | 'request-resume' | 'toggle-motion';
  keywords?: string;
  toast?: string;
}

interface Props {
  commands: Command[];
  email: string;
}

const GROUPS: Record<Command['group'], string> = {
  go: 'go to',
  projects: 'projects',
  posts: 'posts',
  do: 'do',
  find: 'find me',
  hidden: 'hidden talents',
};

const track = (event: string) => (window as { umami?: { track: (e: string) => void } }).umami?.track(event);

const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

export default function CommandMenu({ commands, email }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const [toast, setToast] = useState('');
  const [toastOut, setToastOut] = useState(false);
  const toastTimer = useRef<number>();
  const toastExit = useRef<number>();
  const toastEl = useRef<HTMLDivElement>(null);

  // the toast lives in the top layer so it stacks above open dialogs and sheets
  useEffect(() => {
    const el = toastEl.current;
    if (!el || typeof el.showPopover !== 'function') return;
    try {
      if (toast && !el.matches(':popover-open')) el.showPopover();
      else if (!toast && el.matches(':popover-open')) el.hidePopover();
    } catch {}
  }, [toast]);

  function flash(text: string, ms = 2000) {
    window.clearTimeout(toastTimer.current);
    window.clearTimeout(toastExit.current);
    setToastOut(false);
    setToast(text);
    toastTimer.current = window.setTimeout(() => {
      const motion = document.documentElement.dataset.motion !== 'off';
      if (!motion) return setToast('');
      setToastOut(true);
      toastExit.current = window.setTimeout(() => {
        setToast('');
        setToastOut(false);
      }, 250);
    }, ms);
  }

  useEffect(() => {
    const onToast = (e: Event) => flash(String((e as CustomEvent).detail ?? ''));
    document.addEventListener('toast', onToast);
    return () => document.removeEventListener('toast', onToast);
  }, []);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return commands.filter((c) => {
      if (!q) return true;
      return `${c.label} ${c.hint ?? ''} ${c.keywords ?? ''}`.toLowerCase().includes(q);
    });
  }, [commands, query]);

  function show() {
    setQuery('');
    setActive(0);
    setOpen(true);
    dialog.current?.showModal();
    // on touch devices the keyboard would cover the list; focus the panel instead
    const coarse = matchMedia('(pointer: coarse)').matches;
    requestAnimationFrame(() => (coarse ? panel.current : input.current)?.focus());
  }

  function hide() {
    setOpen(false);
    dialog.current?.close();
  }

  useEffect(() => {
    let progress = 0;
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        open ? hide() : show();
        return;
      }
      const expected = KONAMI[progress];
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (key === expected) {
        progress += 1;
        if (progress === KONAMI.length) {
          progress = 0;
          e.preventDefault();
          try {
            sessionStorage.setItem(UNLOCK_KEY, '1');
          } catch {}
          document.dispatchEvent(new CustomEvent(UNLOCK_EVENT));
          if (open) hide();
          flash('top 8 unlocked', 2000);
        }
      } else {
        progress = key === KONAMI[0] ? 1 : 0;
      }
    };
    document.addEventListener('keydown', onKey);
    const onOpen = () => show();
    const nopes = ['nope. not that easy.', "it's not a button. it's a code.", 'up up down down left right left right b a. on your keyboard.'];
    let nope = 0;
    const onNope = () => {
      const i = Math.min(nope, nopes.length - 1);
      flash(nopes[i], i === nopes.length - 1 ? 4000 : 2800);
      nope++;
    };
    document.addEventListener('command-menu:open', onOpen);
    document.addEventListener('command-menu:nope', onNope);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('command-menu:open', onOpen);
      document.removeEventListener('command-menu:nope', onNope);
    };
  }, [open]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  async function run(cmd: Command) {
    if (cmd.action === 'copy-email' || cmd.action === 'request-resume') track(cmd.action === 'copy-email' ? 'email-copy' : 'resume-request');
    if (cmd.action === 'copy-email') {
      try {
        await navigator.clipboard.writeText(email);
        flash('copied', 1800);
      } catch {
        flash(email, 1800);
      }
      return;
    }
    if (cmd.action === 'request-resume') {
      location.href = `mailto:${email}?subject=${encodeURIComponent('Résumé request')}`;
      hide();
      return;
    }
    if (cmd.action === 'toggle-motion') {
      const root = document.documentElement;
      const next = root.dataset.motion === 'off' ? 'on' : 'off';
      root.dataset.motion = next;
      localStorage.setItem('motion', next);
      flash(`motion ${next}`);
      return;
    }
    if (cmd.href) {
      if (/^https?:/.test(cmd.href)) window.open(cmd.href, '_blank', 'noopener');
      else location.href = cmd.href;
      hide();
      return;
    }
    if (cmd.group === 'hidden') {
      flash(cmd.toast ?? 'true story.', cmd.toast ? 2400 : 1800);
    }
  }

  function onInputKey(e: KeyboardEvent) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, visible.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === 'Enter' && visible[active]) {
      e.preventDefault();
      run(visible[active]);
    }
  }

  let lastGroup: Command['group'] | null = null;

  return (
    <>
      <button type="button" class="cmd-trigger" onClick={show} aria-haspopup="dialog" aria-expanded={open}>
        <span class="cmd-trigger__word">menu</span>
        <span class="visually-hidden">, command K</span>
        <span class="cmd-trigger__keys" aria-hidden="true">
          <kbd>⌘</kbd>
          <kbd>K</kbd>
        </span>
      </button>

      <dialog ref={dialog} class="cmd" onClose={() => setOpen(false)} onClick={(e) => e.target === dialog.current && hide()}>
        <div ref={panel} class="cmd__panel" role="document" tabIndex={-1}>
          <input
            ref={input}
            class="cmd__input"
            type="text"
            placeholder="Type a command or search"
            aria-label="Command"
            role="combobox"
            aria-expanded="true"
            aria-controls="cmd-list"
            aria-autocomplete="list"
            aria-activedescendant={visible[active] ? `cmd-${visible[active].id}` : undefined}
            value={query}
            onInput={(e) => setQuery((e.target as HTMLInputElement).value)}
            onKeyDown={onInputKey}
            autocomplete="off"
            spellcheck={false}
          />
          <ul id="cmd-list" class="cmd__list" role="listbox" aria-label="Commands" tabIndex={-1} onKeyDown={onInputKey}>
            {visible.length === 0 && <li class="cmd__empty">ope. nothing here.</li>}
            {visible.map((c, i) => {
              const header = c.group !== lastGroup;
              lastGroup = c.group;
              return (
                <>
                  {header && (
                    <li class="cmd__group" aria-hidden="true">
                      {GROUPS[c.group]}
                    </li>
                  )}
                  <li
                    id={`cmd-${c.id}`}
                    role="option"
                    aria-selected={i === active}
                    class={`cmd__item ${i === active ? 'is-active' : ''}`}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => run(c)}
                  >
                    <span>
                      {c.label}
                      {c.href && /^https?:/.test(c.href) && <span class="cmd__ext" aria-hidden="true"> ↗</span>}
                      {c.href && /^https?:/.test(c.href) && <span class="visually-hidden">, opens in a new tab</span>}
                    </span>
                    {c.hint && <span class="cmd__hint">{c.hint}</span>}
                  </li>
                </>
              );
            })}
          </ul>
          <p class="cmd__foot mono">↑↓ move · ↵ select · esc close</p>
        </div>
      </dialog>

      <div ref={toastEl} class={`cmd-toast small${toastOut ? ' is-out' : ''}`} role="status" popover="manual">
        {toast}
      </div>
    </>
  );
}
