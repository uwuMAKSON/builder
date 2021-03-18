import Logo from "../../Logo/Logo";
import Nav from "../../Nav/Nav";
import classes from "./Drawer.module.css";

const Drawer = ({ open, closeDrawer }) => {
  const drawerClasses = [
    classes.content,
    open ? classes.open : classes.closed
  ];

  return (
    <div className={classes.Drawer}>
      <div className={drawerClasses.join(" ")}>
        <Logo />
        <Nav />
      </div>
    </div>
  );
}
 
export default Drawer;
