import { mode } from '@chakra-ui/theme-tools'

const Button = {
    variants: {
        navButton: (props: any) => ({
            width: { base: 12, md: 32 },
            role: 'group',
            borderRadius: 'xl',
            fontSize: 'xl',
            variant: 'ghost',
            display: 'flex',
            flexDir: 'row',
            alignItems: 'center',
            justifyContent: { base: 'center', md: 'flex-start' },
            gap: 3,
            transition: 'box-shadow 225ms ease-in-out',
            _focus: {
                outline: 'none',
                boxShadow: mode('tabShadowLight', 'tabShadowDark')(props)
            },
            _hover: {
                bg: 'transparent',
                boxShadow: mode('tabShadowLight', 'tabShadowDark')(props)
            },
            _active: {
                bg: 'transparent',
                boxShadow: mode('tabShadowLight', 'tabShadowDark')(props)
            }
        }),
        navLink: (props: any) => ({
            color: mode('theme.bg', 'grey.100')(props),
            fontSize: 'md',
            variant: 'link',
            padding: 2,
            borderRadius: 'lg',
            _hover: {
                bg: 'transparent',
                boxShadow: mode('tabShadowLight', 'tabShadowDark')(props)
            },
            _active: {
                bg: 'transparent',
                boxShadow: mode('tabShadowLight', 'tabShadowDark')(props)
            }
        }),
        themeToggle: (props: any) => ({
            fontSize: '2xl',
            variant: 'ghost',
            borderRadius: 'xl',
            _focus: {
                outline: 'none',
                color: mode('theme.bg', 'theme.secondary')(props),
                boxShadow: mode('tabShadowLight', 'tabShadowDark')(props)
            },
            _hover: {
                bg: 'transparent',
                color: mode('theme.bg', 'theme.secondary')(props),
                boxShadow: mode('tabShadowLight', 'tabShadowDark')(props)
            },
            _active: {
                bg: 'transparent',
                color: mode('theme.bg', 'theme.secondary')(props),
                boxShadow: mode('tabShadowLight', 'tabShadowDark')(props)
            }
        })
    }
}

export default Button
