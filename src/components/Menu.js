import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Grid from "@material-ui/core/Grid";
import React from "react";
import { Person, ExitToApp, HelpOutline, PeopleAlt, ShoppingCart, Work, } from "@material-ui/icons";
import theme from "../MuiTheme";
import makeStyles from "@material-ui/core/styles/makeStyles";

const color = theme.palette;

const useStyles = makeStyles({
    navBlock: {
        height: '100%',
        flexDirection: 'column',
        backgroundColor: 'transparent',
    },
    navBlockItem: {
        width: '100px',
        height: '100px',
        maxHeight: '100px',
        margin: '0px auto',
        borderRadius: '10px',
        padding: '15px',
        color: color.primary.main
    },
    menu: {
        flexGrow: 1
    },
    navBlockItemActive: {
        backgroundColor: color.secondary.active,
    },
    navBlockItemIcon: {
        fill: color.primary.main
    },
    marginBottom: {
        marginBottom: '100%'
    },
})

const Menu = () => {
    const [activeItem, setItem] = React.useState(0);
    const classes = useStyles();

    return (
        <Grid item className={classes.menu}>
            <BottomNavigation className={classes.navBlock} value={activeItem} onChange={(event, newValue) => {
                setItem(newValue);
            }} showLabels>
                <BottomNavigationAction label="Профиль" showLabel={false} icon={<Person className={classes.navBlockItemIcon}/>} className={classes.navBlockItem}/>
                <BottomNavigationAction label="Друзья" showLabel={false} icon={<PeopleAlt className={classes.navBlockItemIcon}/>} className={classes.navBlockItem}/>
                <BottomNavigationAction label="Корзина" showLabel={false} icon={<ShoppingCart className={classes.navBlockItemIcon}/>} className={classes.navBlockItem}/>
                <BottomNavigationAction label="Работа" showLabel={false} icon={<Work className={classes.navBlockItemIcon}/>} className={classes.navBlockItem + ' ' + classes.marginBottom}/>
                <BottomNavigationAction label="FAQ" showLabel={false} icon={<HelpOutline className={classes.navBlockItemIcon}/>} className={classes.navBlockItem}/>
                <BottomNavigationAction label="Выход" showLabel={false} icon={<ExitToApp className={classes.navBlockItemIcon}/>} className={classes.navBlockItem}/>
            </BottomNavigation>
        </Grid>
    )
}
export default  Menu;