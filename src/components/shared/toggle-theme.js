import useDarkMode from 'use-dark-mode'

export default function ToggleTheme() {
  const theme = useDarkMode(false)

  return (
    <span className='toggle-control'>
      <input
        id='toggle'
        type='checkbox'
        role='switch'
        checked={theme.value}
        onChange={theme.toggle}
      />
      <label htmlFor='toggle' />
    </span>
  )
}
