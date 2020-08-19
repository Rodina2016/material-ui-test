import React from 'react';
import Grid from "@material-ui/core/Grid";
import theme from "./MuiTheme";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Menu from "./components/Menu";
import Logo from "./components/Logo";
import Content from "./components/Content";


const color = theme.palette;

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    layout: {
        minHeight: '100vh',
        backgroundColor: color.primary.sidebar
    },
    sidebar: {
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        width: '160px',
        left: '0',
        height: '100vh',
        zIndex: '1',

        '&::before': {
            position: 'absolute',
            top: '0',
            left: '0',
            display: 'block',
            content: "' '",
            width: '120%',
            height: '50px',
            backgroundColor: color.primary.sidebar,
            zIndex: '-1',
        }
    },
})

function App() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container={true} className={classes.layout}>
                <Grid className={classes.sidebar}>
                    <Logo/>
                    <Menu/>
                </Grid>
               <Content/>
            </Grid>
        </div>

    );
}

export default App;
