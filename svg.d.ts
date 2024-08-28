declare module '*.svg' {
  import * as React from 'react'

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {title?: string; fill?: string}
  >
  const src: string
  export default src
}

// declare module '*.svg' {
//   import * as React from 'react'
//   const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
//   export default ReactComponent
// }
