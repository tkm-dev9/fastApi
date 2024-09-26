import styles from "./form.module.css";
import { FormEvent } from "react";

const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
}

function Form() {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inner}>
        <div className={styles.item}>
          <label className={styles.label}>
            <p className={styles.labelTxt}>名前</p>
            <input
              type="text"
              name="contactName"
              maxLength={20}
              placeholder="名前を入力してください"
              className={styles.input}
            />
          </label>
        </div>
        <div className={styles.item}>
          <label className={styles.label}>
            <p className={styles.labelTxt}>お問い合わせ内容</p>
            <textarea
              name="contactDetail"
              rows={5}
              cols={80}
              placeholder="お問い合わせ内容を入力してください"
              className={styles.textarea}
            />
          </label>
        </div>
        <div className={styles.btnWrapper}>
          <button type="submit" className={styles.btn}>確認画面へ</button>
        </div>
      </div>
    </form>
  );
}

export default Form;