import { useEffect, useMemo, useRef, useState } from 'preact/hooks';
import { UNLOCK_EVENT, UNLOCK_KEY } from '~/content/top8';
import './CommandMenu.css';

export interface Command {
  id: string;
  group: 'go' | 'work' | 'posts' | 'do' | 'hidden' | 'top8';
  label: string;
  hint?: string;
  href?: string;
  action?: 'copy-email' | 'request-resume' | 'toggle-motion';
  keywords?: string;
}

interface Props {
  commands: Command[];
  email: string;
}

const GROUPS: Record<Command['group'], string> = {
  go: 'go to',
  work: 'work',
  posts: 'posts',
  do: 'do',
  top8: 'top 8',
  hidden: 'hidden talents',
};

const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

export default function CommandMenu({ commands, email }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const [unlocked, setUnlocked] = useState(false);
  const [toast, setToast] = useState('');
  const [toastOut, setToastOut] = useState(false);
  const toastTimer = useRef<number>();
  const toastExit = useRef<number>();

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

  useEffect(() => {
    try {
      if (sessionStorage.getItem(UNLOCK_KEY) === '1') setUnlocked(true);
    } catch {}
  }, []);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    const top8 = q === 'myspace' || q === 'top 8' || q === 'top8' || unlocked;
    return commands.filter((c) => {
      if (c.group === 'hidden' && !unlocked) return false;
      if (c.group === 'top8') return top8;
      if (!q) return true;
      return `${c.label} ${c.hint ?? ''} ${c.keywords ?? ''}`.toLowerCase().includes(q);
    });
  }, [commands, query, unlocked]);

  function show() {
    setQuery('');
    setActive(0);
    setOpen(true);
    dialog.current?.showModal();
    requestAnimationFrame(() => input.current?.focus());
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
          setUnlocked(true);
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
    const onNope = () => {
      flash(matchMedia('(pointer: coarse)').matches ? 'nope. needs a keyboard.' : 'nope. not that easy.', 2400);
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
    if (cmd.action === 'copy-email') {
      try {
        await navigator.clipboard.writeText(email);
        flash('copied', 1800);
      } catch {
        flash(email, 1800);
      }
      hide();
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
      hide();
      flash(`motion ${next}`);
      return;
    }
    if (cmd.href) {
      if (/^https?:/.test(cmd.href)) window.open(cmd.href, '_blank', 'noopener');
      else location.href = cmd.href;
      hide();
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
      <button type="button" class="cmd-trigger" onClick={show} aria-haspopup="dialog" aria-expanded={open} aria-label="Open menu">
        <span class="cmd-trigger__word">menu</span>
        <span class="cmd-trigger__keys" aria-hidden="true">
          <kbd>⌘</kbd>
          <kbd>K</kbd>
        </span>
      </button>

      <dialog ref={dialog} class="cmd" onClose={() => setOpen(false)} onClick={(e) => e.target === dialog.current && hide()}>
        <div class="cmd__panel" role="document">
          <input
            ref={input}
            class="cmd__input"
            type="text"
            placeholder="Type a command or search"
            aria-label="Command"
            value={query}
            onInput={(e) => setQuery((e.target as HTMLInputElement).value)}
            onKeyDown={onInputKey}
            autocomplete="off"
            spellcheck={false}
          />
          <ul class="cmd__list" role="listbox" aria-label="Commands">
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
                    role="option"
                    aria-selected={i === active}
                    class={`cmd__item ${i === active ? 'is-active' : ''}`}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => run(c)}
                  >
                    <span>
                      {c.label}
                      {c.href && /^https?:/.test(c.href) && <span class="cmd__ext" aria-hidden="true"> ↗</span>}
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

      {toast && (
        <div class={`cmd-toast small${toastOut ? ' is-out' : ''}`} role="status">
          {toast}
        </div>
      )}
    </>
  );
}
