import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ContactConfirm() {
  const navigate = useNavigate();
  const location = useLocation();
  const name = location.state?.name;
  const contactDetail = location.state?.contactDetail;

  useEffect(() => {
    if (!name || !contactDetail) {
      navigate('/', { replace: true });
    }
  }, [name, contactDetail, navigate]);

  if (!name || !contactDetail) {
    return;
  }

  return (
    <>
      <h1>お問い合わせ内容確認</h1>

      <div>
        <p>名前</p>
        <p>{name}</p>
      </div>
      <div>
        <p>お問い合わせ内容</p>
        <p>{contactDetail}</p>
      </div>
    </>
  );
}

export default ContactConfirm;