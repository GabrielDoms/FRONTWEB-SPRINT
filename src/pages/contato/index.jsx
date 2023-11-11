import { useForm } from "react-hook-form";
import "./styles.scss"
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { useEffect } from "react";
import toast from "react-hot-toast";

export function Contact() {
  const { register, handleSubmit, formState } = useForm({
    shouldUseNativeValidation: true,
  });

  useEffect(() => {
    if (!formState.isSubmitting) return;

    toast.success("O seu contato foi registrado no nosso sistema!");
  }, [formState.isSubmitting]);

  return (
    <div className="ContactContent">
      <div className="ContactForm"
        onSubmit={handleSubmit((d) => {
          console.log(d);
        })}
      >
        <Input
          {...register("fullName", {
            required: "O nome completo é obrigatório.",
          })}
          label="Nome completo"
        />

        <Input
          type="email"
          label="E-mail"
          {...register("email", {
            required: "O e-mail é obrigatório.",
          })}
        />

        <Input
          label="Telefone"
          {...register("phone", {
            required: "O telefone é obrigatório.",
          })}
        />

        <Textarea label="Observações" {...register("observation")} />

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
