const Toggle = ({ checked, onChange }) => (
  <span className='toggle-control'>
    <input
      id='toggle'
      type='checkbox'
      role='switch'
      checked={checked}
      onChange={onChange}
    />
    <label for='toggle' />
  </span>
)

export default Toggle
