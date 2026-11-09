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
      <span aria-hidden="true">motion</span>
      <span className="motion-toggle__track" aria-hidden="true">
        <span className="motion-toggle__knob" />
      </span>
    </button>
  );
}
