import useDarkMode from 'use-dark-mode'
import Toggle from './toggle'

export default function ToggleDarkMode() {
  const darkMode = useDarkMode(false)

  return (
    <>
      {/*<button type='button' onClick={darkMode.disable}>
        ☀
      </button>*/}

      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />

      {/*<button type='button' onClick={darkMode.enable}>
        ☾
      </button>

      <span className={darkMode.value} onClick={darkMode.toggle}>
        ☀ / ☾
      </span>*/}
    </>
  )
}
