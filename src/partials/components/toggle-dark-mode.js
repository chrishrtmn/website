import useDarkMode from 'use-dark-mode'
import Toggle from './toggle'

export default function ToggleDarkMode() {
  const darkMode = useDarkMode(false)

  return (
    <div>
      <button type='button' onClick={darkMode.disable}>
        ☀
      </button>

      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
      
      <button type='button' onClick={darkMode.enable}>
        ☾
      </button>
    </div>
  )
}
