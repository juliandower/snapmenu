import styles from "../styles/Home.module.css";
import ListItem from "../components/ListItem";
import Router from "next/router";

export default function Home() {
  function visitCount() {
    if (typeof window !== "undefined") {
      let visits = Number(localStorage.getItem("visitCount"));
      let current = Boolean(sessionStorage.getItem("session"));

      if (!current) {
        visits++;
      }

      localStorage.setItem("visitCount", visits);
      sessionStorage.setItem("session", true);

      return visits;
    }
  }

  if (visitCount() > 3) {
  }

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.header}>
          <img className={styles.logo} src="../bootleggers-logo.jpg" />
        </div>
        <div className={styles.titlebar}>
          <div className={styles.title}>
            Welcome to Our <br /> Digital Menu
          </div>
        </div>
        <div className={styles.list}>
          <ListItem
            maintext="Add to cart"
            subtext="Choose sides, add extras and view your order summary"
            emojiname="../emoji/cart.png"
          />

          <ListItem
            maintext="Place Order"
            subtext="Your order is automatically sent to your waiter"
            emojiname="../emoji/mailbox.png"
          />

          <ListItem
            maintext="Tip & Pay"
            subtext="Your waiter is notified and will bring the bill your way"
            emojiname="../emoji/money.png"
          />

          <button className={styles.browse}>Browse Menu</button>
        </div>
      </div>
      <div className={styles.splashwide}>
        <img
          src="../Bootlegger-BootBurger.jpg"
          className={styles.splashwideimg}
        />
      </div>
    </div>
  );
}
