import { css, CSSObject, SimpleInterpolation } from 'styled-components'

const sizes = {
  desktop: 1024,
  tablet: 768,
  phone: 560,
}

const media = (Object.keys(sizes) as Array<keyof typeof sizes>).reduce(
  (acc, key) => {
    acc[key] = (
      first: TemplateStringsArray | CSSObject,
      ...interpolations: SimpleInterpolation[]
    ) => css`
      @media (max-width: ${sizes[key]}px) {
        ${css(first, ...interpolations)}
      }
    `

    return acc
  },
  // eslint-disable-next-line @typescript-eslint/ban-types
  {} as { [index: string]: Function }
)

export default media
