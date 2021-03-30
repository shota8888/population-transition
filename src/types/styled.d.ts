import { styledTheme } from '../styles/theme'

type Theme = typeof styledTheme

declare module 'styled-components' {
  export type DefaultTheme = Theme
}
