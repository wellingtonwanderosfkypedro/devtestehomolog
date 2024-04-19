import Image from "next/image";
import Link from "next/link";

import FormFooter from "../FormFooter/FormFooter";

import Error from "@/assets/images/home/form/error.svg";

import { Information, Security } from "../../types/formOurSolutionsTypes";
import { langStore } from "@/helpers/providers/getLang";

interface ErrorScreenProps {
  information: Information;
  security: Security;
}

const ErrorScreen = ({ information, security }: ErrorScreenProps) => {
  const isEnglish = langStore.getLang();

  return (
    <div className="bg-skin-default px-[30px] py-[20px] rounded-[4.24px] tablet:rounded-md tablet:px-[35px] laptop:max-w-[488px]">
      <div className="flex flex-col items-center my-[70px]">
        <Image src={Error} width={70} height={70} alt="Error" />
        <h3 className="text-4 leading-[20px] text-skin-error pt-[20px] pb-[15px] tablet:pt-[25px] tablet:pb-[25px] font-roboto font-bold tablet:text-[24px] tablet:leading-[18px]">
          Falha ao Dados enviar dados!
        </h3>
        <p className="max-w-[343px] text-center text-skin-base-accent font-roboto font-light text-3.5 leading-[24px] tablet:text-4.5">
          Tente enviar novamente os dados,{" "}
          <Link className="underline hover:text-skin-error" href="/">
            {isEnglish ? "click here." : "clique aqui."}
          </Link>
        </p>
      </div>
      <FormFooter information={information} security={security} />
    </div>
  );
};

export default ErrorScreen;
