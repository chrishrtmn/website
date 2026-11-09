import { useEffect, useState } from 'preact/hooks';
import './MotionToggle.css';

const KEY = 'motion';

export default function MotionToggle() {
  const [on, setOn] = useState(true);

  useEffect(() => {
    setOn(document.documentElement.dataset.motion !== 'off');
  }, []);

  function toggle() {
    const next = !on;
    setOn(next);
    document.documentElement.dataset.motion = next ? 'on' : 'off';
    localStorage.setItem(KEY, next ? 'on' : 'off');
    document.dispatchEvent(new CustomEvent('toast', { detail: next ? 'motion on' : 'motion off' }));
  }

  return (
    <button
      type="button"
      className="motion-toggle"
      role="switch"
      aria-checked={on}
      aria-label="Motion"
      onClick={toggle}
    >
      <span className="motion-toggle__word" aria-hidden="true">motion</span>
      <span className="motion-toggle__track" aria-hidden="true">
        <span className="motion-toggle__knob" />
      </span>
      <svg className="motion-toggle__icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" aria-hidden="true">
        {on ? (
          <path d="M2 10h2l2-6 3 12 3-9 2 3h4" />
        ) : (
          <path d="M2 10h16" />
        )}
      </svg>
    </button>
  );
}
