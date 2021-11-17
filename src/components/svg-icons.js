const getViewBox = (name) => {
  switch (name) {
    default:
      return '0 0 24 24'
  }
}

const getPath = (name, props) => {
  switch (name) {
    case 'corner-right-down':
      return (
        <path
          {...props}
          d='M13.3987 6.84996C13.3977 5.74539 12.5014 4.85079 11.3969 4.85181L3.39687 4.8592L3.39502 2.8592L11.395 2.85181C13.6042 2.84977 15.3967 4.63897 15.3987 6.84811L15.4082 17.1538L19.1895 13.3656L20.605 14.7785L14.2469 21.1483L7.87709 14.7902L9.28999 13.3747L13.4085 17.4856L13.3987 6.84996Z'
        />
      )
    case 'lightbulb':
      return (
        <path
          {...props}
          d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
        />
      )
    case 'menu':
      return <path {...props} d='M4 6h16M4 12h16M4 18h16' />
    case 'code':
      return <path {...props} d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' />
    case 'photograph':
      return (
        <path
          {...props}
          d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
        />
      )
    case 'clipboard-check':
      return (
        <path
          {...props}
          d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
        />
      )
    case 'scale':
      return (
        <path
          {...props}
          d='M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3'
        />
      )
    case 'globe':
      return (
        <path
          {...props}
          d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
        />
      )
    case 'briefcase':
      return (
        <path
          {...props}
          d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
        />
      )
    case 'volume-up':
      return (
        <path
          {...props}
          d='M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z'
        />
      )
    case 'emoji-happy':
      return (
        <path
          {...props}
          d='M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      )
    case 'chart-pie':
      return (
        <>
          <path {...props} d='M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z' />
          <path {...props} d='M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z' />
        </>
      )
    case 'chip':
      return (
        <path
          {...props}
          d='M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
        />
      )
    case 'external-link':
      return (
        <path
          {...props}
          d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
        />
      )
    case 'paper-clip':
      return (
        <path
          {...props}
          d='M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13'
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
