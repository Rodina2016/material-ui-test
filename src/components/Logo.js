import Grid from "@material-ui/core/Grid";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import logo from "../images/logo.png";

const useStyles = makeStyles({
    logo: {
        padding: '40px 0',
        textAlign: 'center',
        width: '100%'
    },
})

const Logo = () => {
    const classes = useStyles();

    return (
        <Grid className={classes.logo} item>
            <img src={logo} alt=""/>
        </Grid>
    )
}
export default  Logo;