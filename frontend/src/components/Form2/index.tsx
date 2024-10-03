import { SubmitHandler, useForm } from "react-hook-form";

type Forms = {
  inputBox: string;
  inputBoxRequired: string;
  kanaRequired: string;
}

function Form2() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Forms>();

  const onSubmit: SubmitHandler<Forms> = () => {
    alert("送信しました");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input placeholder="任意項目" {...register("inputBox")} />
      </div>
      <div>
        <input placeholder="必須項目" {...register("inputBoxRequired", { required: true })} />
        <p>{errors.inputBoxRequired && "必須項目です"}</p>
      </div>
      <div>
        <input
          placeholder="カタカナ必須項目"
          {...register("kanaRequired",
            {
              required: {
                value: true,
                message: "必須項目です"
              },
              maxLength: {
                value: 10,
                message: "10文字以内にしてください"
              },
              pattern: {
                value: /^[ァ-ヶー]*$/,
                message: "カタカナで入力してください"
              }
            }
          )}
        />
        <p>{errors.kanaRequired && errors.kanaRequired.message}</p>
      </div>

      <div>
        <input type="submit" />
      </div>
    </form>
  );
}

export default Form2;