import classes from "./NavItem.module.css";

const NacItem = ({ children, url, active }) => {
    return ( 
        <li className={classes.NacItem}>
            <a href={url} className={active ? classes.active : null}>
                {children}
            </a>
        </li>
     );
}
 
export default NacItem;