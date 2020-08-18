import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#fff',
            sidebar: '#47418e',
            content: '#f2f2f2'
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            light: '#0066ff',
            main: '#0044ff',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#ffcc00',
            active: '#6b6bbb',
        },
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        tonalOffset: 0.2,
    },
    overrides: {
        MuiBottomNavigationAction: {
            root: {
                '&$selected': {
                    backgroundColor: '#6b6bbb',
                    paddingTop: '15px'
                }
            }
        }
    },
    props: {
        // Название компоненты
        MuiButtonBase: {
            // Пример одного из стандартных свойств props
            disableRipple: true, // Скажи НЕТ эффекту расходящихся волн 💣!
        },
    },
});

export default theme;