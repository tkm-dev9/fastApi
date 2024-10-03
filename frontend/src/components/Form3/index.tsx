import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Form3() {
  const schema = yup.object({
    inputBox: yup.string(),
    inputRequired: yup.string().required("必須項目です"),
    kanaRequired: yup
      .string()
      .max(10, "10文字以内で入力してください")
      .test("katakana", "カタカナで入力してください", function (value: any) {
        return !!value.match(/^[ァ-ヶー]*$/);
      })
      .required("必須項目です")
  });

  type FormValues = yup.InferType<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema)});

  const onSubmit = (data: FormValues) => {
    alert("送信しました");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input placeholder="任意項目" {...register("inputBox")}  />
      </div>
      <div>
        <input placeholder="必須項目" {...register("inputRequired")} />
        <p>{errors.inputRequired && errors.inputRequired.message}</p>
      </div>
      <div>
        <input placeholder="カタカナ必須項目" {...register("kanaRequired")} />
        <p>{errors.kanaRequired && errors.kanaRequired.message}</p>
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
}

export default Form3;