const getViewBox = (name) => {
  switch (name) {
    default:
      return '0 0 24 24'
  }
}

const getPath = (name, props) => {
  switch (name) {
    case 'lightbulb':
      return (
        <path
          {...props}
          d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
        />
      )
    case 'menu':
      return <path {...props} d='M4 6h16M4 12h16M4 18h16' />
    case 'dev':
      return <path {...props} d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' />
    case 'design':
      return (
        <path
          {...props}
          d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
        />
      )
    case 'services':
      return (
        <path
          {...props}
          d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
        />
      )
    case 'principles':
      return (
        <path
          {...props}
          d='M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3'
        />
      )
    default:
      return <path />
  }
}

const SVGIcon = ({
  name = '',
  style = {},
  height = '100%',
  width = '100%',
  fill = 'none',
  viewBox = '',
  stroke = 'currentColor',
  className = '',
  strokeLinecap = 'round',
  strokeLinejoin = 'round',
  strokeWidth = '2',
}) => (
  <svg
    height={height}
    width={width}
    style={style}
    className={className}
    fill={fill}
    stroke={stroke}
    viewBox={viewBox || getViewBox(name)}
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
  >
    {getPath(name, { strokeLinecap, strokeLinejoin, strokeWidth })}
  </svg>
)

export default SVGIcon
