import styles from "../styles/Home.module.css";
const ListItem = props => {
  return (
    <div className={styles.listItem}>
      <div>
        <img className={styles.emoji} src={props.emojiname} />
      </div>
      <div className={styles.textbox}>
        <div className={styles.maintext}>{props.maintext}</div>
        <div className={styles.subtext}>{props.subtext}</div>
      </div>
    </div>
  );
};

export default ListItem;
