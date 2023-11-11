import "./styles.scss"
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import toast from "react-hot-toast";

export function Login() {
  const { register, handleSubmit, formState } = useForm({
    shouldUseNativeValidation: true,
  });

  return (
    <div className="loginContent">
      <div className="loginForm"
        onSubmit={handleSubmit(async (d) => {
          console.log(d)
          const resposta = await fetch('http://localhost:3001/login', {method:'POST',headers: {
            'Content-Type': 'application/json',
          }, body:JSON.stringify(d)})
          
          const data = await resposta.json()
          const token = data.token

          localStorage.setItem('token', token)

          toast.success("O seu login foi salvo com sucesso!");
        })}
      >
        <Input
          {...register("usuario", {
            required: "O usuario é obrigatório.",
          })}
          label="Usuario"
        />

        <Input
          type="password"
          label="Senha"
          {...register("senha", {
            required: "A senha é obrigatória.",
          })}
        />

        <Button
          type="submit"
          disabled={
            formState.isLoading || (!formState.isValid && formState.isDirty)
          }
        >
          {formState.isLoading ? "Enviando..." : "Enviar"}
        </Button>
      </div>
    </div>
  );
}
