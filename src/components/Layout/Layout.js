import classes from "./Layout/Layout";
import classes from "../Drawer/Drawer";
import classes from "../Toolbar/Toolbar";


const Layout = () => {
    return ( 
        <div className={classes.Layout}>
        <Toolbar/>
        <Drawer/>
        {children}
        </div>
     );
}
 
export default Layout;