import React, { useState } from "react";

import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import FormFooter from "./FormFooter/FormFooter";
import SuccessScreen from "./SuccessScreen/SuccessScreen";
import FormHeader from "./FormHeader/FormHeader";
import Button from "./Button";
import ErrorScreen from "./ErrorScreen/ErrorScreen";

interface FormValues {
  company: string;
  area: string;
  // office: string;
  corporateEmail: string;
  demand: string;
  helpAreas: string;
}

const schema = yup.object().shape({
  company: yup
    .string()
    .min(3, "Mínimo de 3 caracteres")
    .required("Campo obrigatório*"),
  area: yup.string().required("Campo obrigatório*"),
  // office: yup.string().required('Campo obrigatório*'),
  corporateEmail: yup
    .string()
    .email("E-mail inválido")
    .required("Campo obrigatório*"),
  demand: yup
    .string()
    .min(10, "Mínimo de 10 caracteres")
    .required("Campo obrigatório*"),
  helpAreas: yup.string().required("Campo obrigatório*"),
});

const schemaStep1 = yup.object().shape({
  company: yup
    .string()
    .min(3, "Mínimo de 3 caracteres")
    .required("Campo obrigatório*"),
  area: yup.string().required("Campo obrigatório*"),
  // office: yup.string().required("Campo obrigatório*"),
});

const Form: React.FC = () => {
  const methods = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      company: "",
      area: "",
      // office: "",
      corporateEmail: "",
      demand: "",
      helpAreas: "",
    },
  });

  const { control, handleSubmit, formState, getValues, setError } = methods;
  const { errors } = formState;

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [requestStatus, setRequestStatus] = useState<
    "success" | "error" | null
  >(null);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    //enviar dados
    const endpointURL =
      "https://cloud.conteudo.neoway.com.br/handler-contato-comercial";
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(endpointURL, requestOptions);

      const responseData = await response.json();

      if (response.ok && responseData) {
        setRequestStatus("success");
      } else {
        setRequestStatus("error");
      }
    } catch (error) {
      console.error("Erro durante a requisição:", error);
      setRequestStatus("error");
    }
  };

  const onNextStep = async (value: number) => {
    const values = getValues();
    const {
      company,
      area,
      // office
    } = values;
    try {
      await schemaStep1.validate(
        {
          company,
          area,
          // office
        },
        { abortEarly: false }
      );

      setError("corporateEmail", { type: "manual", message: "" });
      setError("demand", { type: "manual", message: "" });
      setError("helpAreas", { type: "manual", message: "" });

      setCurrentStep(value);
    } catch (validationErrors) {
      console.error(validationErrors);
    }
  };

  if (requestStatus === "success") {
    return <SuccessScreen />;
  } else if (requestStatus === "error") {
    return <ErrorScreen />;
  }

  return (
    <FormProvider {...methods}>
      <div className="bg-white px-[30px] py-[20px] rounded-[4.24px] tablet:rounded-md tablet:px-[35px] laptop:max-w-[488px] z-10">
        <FormHeader currentStep={currentStep} onNextStep={onNextStep} />
        <form onSubmit={handleSubmit(onSubmit)}>
          {currentStep === 1 && (
            <Step1 control={control} onNextStep={onNextStep} errors={errors} />
          )}
          {currentStep === 2 && (
            <>
              <Step2 control={control} errors={errors} />
              <Button message="Enviar ao time comercial" type="submit" />
            </>
          )}
        </form>
        <FormFooter />
      </div>
    </FormProvider>
  );
};

export default Form;
