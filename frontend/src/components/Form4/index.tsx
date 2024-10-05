import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";


const schema = z.object({
  inputBox: z.string().optional(),
  inputRequired: z.string().min(1, "必須項目です"),
  kanaRequired: z
    .string()
    .max(10, "10文字以内で入力してください")
    .regex(/^[ァ-ヶー]*$/, "カタカナで入力してください")
    .min(1, "必須項目です")
});

type Schema = z.infer<typeof schema>;

function Form4() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Schema>({ resolver: zodResolver(schema)});
  const onSubmit = () => {
    alert("送信しました");
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input placeholder="任意項目" {...register("inputBox")} />
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

export default Form4;