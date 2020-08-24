import useDarkMode from 'use-dark-mode'

export default function ToggleDarkMode() {
  const darkMode = useDarkMode(false)

  return (
    <>
      {/*<button type='button' onClick={darkMode.disable}>
        ☀
      </button>*/}

      {/*<Toggle checked={darkMode.value} onChange={darkMode.toggle} />*/}

      {/*<button type='button' onClick={darkMode.enable}>
        ☾
      </button>*/}

      <button type='button' onClick={darkMode.toggle}>
        Toggle
      </button>
    </>
  )
}
