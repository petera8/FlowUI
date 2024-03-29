import { theme as chakraTheme } from '@chakra-ui/theme';
import { extendTheme } from '@chakra-ui/react';

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

// 3. extend the theme

// theme.styles.global["*, *::before, &::after"];

const activeLabelStyles = {
  transform: 'scale(0.85) translateY(-17px)',
};

const theme = extendTheme({
  ...chakraTheme,
  styles: {
    global: {
      body: {
        bg: 'rgba(30,30,30)',
      },
      'input:focus': {
        borderColor: 'orange !important',
        boxShadow: '0 0 3.5px orange !important',
      },
    },
  },
  components: {
    Card: {
      baseStyle: {
        container: {
          backgroundColor: 'whiteAlpha.50',
        },
      },
    },
    Button: {
      baseStyle: {
        _hover: {
          _disabled: {
            bg: 'red',
          },
        },
      },
      variants: {
        brand: {
          bg: 'orange.600',
          color: 'white',
          _hover: {
            bg: 'blue.600',
          },
        },
        secondary: {
          bg: 'gray.500',
          color: 'white',
          _hover: {
            bg: 'gray.600',
          },
        },
      },
    },
    Input: {
      baseStyle: {
        borderRadius: '8px',
        _focus: {
          borderColor: 'orange !important',
        },
      },
    },
    Modal: {
      baseStyle: {
        backgroundColor: 'rgb(35,35,35)',
        dialog: {
          bg: 'rgb(30,30,30)',
          color: 'white',
        },
        header: {
          fontSize: 'sm',
          fontWeight: 'bold',
        },
        body: {
          padding: '1rem',
        },
        footer: {
          padding: '1rem',
        },
      },
    },
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper:has(> select[data-value='false']) + label, textarea:not(:placeholder-shown) ~ label":
              {
                ...activeLabelStyles,
              },
            select: {
              fontSize: '0.65rem',
            },
            '.chakra-form-control': {
              border: 'none !important',
            },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              color: 'rgb(179, 131, 94)',
              position: 'absolute',
              backgroundColor: 'rgb(25,25,25)',
              pointerEvents: 'none',
              mx: 2,
              mt: 2,
              px: 1,
              py: 0,
              transformOrigin: 'left top',
            },
          },
        },
      },
    },
  },
  zIndices: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 999,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
  config,
});

export default theme;
