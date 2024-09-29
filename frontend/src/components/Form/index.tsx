import { useNavigate } from "react-router-dom";
import styles from "./form.module.css";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [contactDetail, setContactDetail] = useState("");
  const [isAgree, setIsAgree] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const navigate = useNavigate();
  const handleNameChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setName(() => {
      handleBtnActivate(newValue, contactDetail, isComplete);
      return newValue;
    });
  }, [contactDetail, isComplete]);
  const handleContactDetailChange = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setContactDetail(() => {
      handleBtnActivate(name, newValue, isComplete);
      return newValue;
    });
  }, [name, isComplete]);
  const handleAgreeChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.checked;
    setIsAgree(() => {
      handleBtnActivate(name, contactDetail, newValue);
      return newValue;
    });
  }, [name, contactDetail]);
  const handleBtnActivate = (name: string, contactDetail: string, isAgree: boolean) => {
    if (name !== "" && contactDetail !== "" && isAgree) {
      setIsComplete(true);
    } else {
      setIsComplete(false);
    }
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const sendObj = {name, contactDetail}
    navigate("/contact/confirm/", {state: sendObj });
  }

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
              value={name}
              onChange={handleNameChange}
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
              value={contactDetail}
              onChange={handleContactDetailChange}
            />
          </label>
        </div>
        <div className={styles.item}>
          <label className={styles.checkboxWrapper}>
            <input type="checkbox" className={styles.checkbox} checked={isAgree} onChange={handleAgreeChange} />
            規約に同意します。
          </label>
        </div>
        <div className={styles.btnWrapper}>
          <button type="submit" className={styles.btn} disabled={!isComplete}>確認画面へ</button>
        </div>
      </div>
    </form>
  );
}

export default Form;