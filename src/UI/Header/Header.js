import styles from "./Header.module.css";
import Navbar from "./Navbar/Navbar";
import Container from "../Container/Container";

export default function Header() {
  return (
    <Container>
    <div className={styles.Header}>
        <Navbar />
    </div>
    </Container>
  );
}
