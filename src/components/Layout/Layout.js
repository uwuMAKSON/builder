import classes from "./Layout.module.css";
import Drawer from "../Drawer/Drawer";
import Toolbar from "../Toolbar/Toolbar";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";

const Layout = ( {children}) => {
    return ( 
        <div className={classes.Layout}>
        <Toolbar/>
        <Drawer/>
        <Logo/>
        <Nav/>
        {children}
        </div>
     );
}
 
export default Layout;