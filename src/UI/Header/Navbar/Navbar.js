import styles from "./Navbar.module.css";
import logo from "../../../assets/logo.svg";
// import NavbarItems from './NavbarItems';

export default function Navbar() {
  return (
    <div className={styles.Navbar}>
      <img src={logo} alt="logo"/>
      <h1>RugbyFeed</h1>
      {/* <NavbarItems/> For now, just the title will suffice*/}
    </div>
  );
}
