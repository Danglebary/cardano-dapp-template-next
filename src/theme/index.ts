import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { createBreakpoints, mode } from '@chakra-ui/theme-tools'
import Button from './buttonVariants'

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: true
}

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
    sm: '40em',
    md: '52em',
    lg: '64em',
    xl: '80em'
})

const colors = {
    theme: {
        bg: 'hsl(240, 14%, 7%)',
        primary: 'hsl(333, 93%, 56%)',
        secondary: 'hsl(207, 56%, 69%)'
    }
}

const styles = {
    global: (props: any) => ({
        body: {
            bg: mode('gray.100', 'theme.bg')(props)
        }
    })
}

const shadows = {
    tabShadowLight: '0 0 1px 1px hsl(240, 14%, 7%)',
    tabShadowDark: '0 0 1px 1px hsl(207, 56%, 69%)',
    shadowMainLight: '0 0 2px 1px hsl(240, 14%, 7%)',
    shadowMainDark: '0 0 2px 1px hsl(333, 93%, 56%)'
}

const components = {
    Button
}

const theme = extendTheme({
    config,
    fonts,
    colors,
    breakpoints,
    shadows,
    components,
    styles
})

export default theme
