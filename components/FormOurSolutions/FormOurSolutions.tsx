import Image from "next/image";
import { useMedia } from "react-use";
import Form from "./Form/Form";
import TextArea from "./TextArea/TextArea";

import ArrowDown from "@/public/arrow-down.svg";
import { TitleBanner } from "./TitleBanner";

export interface SolucionsProps {
  idPage?: string;
}

const FormOurSolutions = ({ idPage }: SolucionsProps) => {
  const isMob = useMedia("(max-width: 500px)", false);

  const bgDesk = idPage ? "bg-banner-product" : "bg-banner-form";
  const bgMob = idPage ? "bg-banner-product-mob" : "bg-banner-form-mob";

  return (
    <div
      className={`${
        isMob ? bgMob : bgDesk
      }  relative bg-no-repeat w-[100%] bg-cover desktop:h-[760px] bg-center`}
    >
      <div className="z-20 relative top-0 left-0  flex flex-wrap justify-center items-center pt-[120px]  mx-6 py-8  tablet:max-w-[95%] tablet:mx-auto laptop:max-w-[100%] lg:px-24 laptop:pt-[160px] laptop:flex-nowrap desktop:justify-between laptop:gap-6 maxDesktop:max-w-[1440px]">
        {!idPage ? (
          <>
            <TextArea
              message1={
                <>
                  Somos o maior hub de{" "}
                  <strong className="text-orange-300 laptop:flex laptop:w-[500px]">
                    inteligência analítica
                  </strong>{" "}
                  do Brasil.
                </>
              }
              message2={
                <span className="text-white text-[12px] font-roboto font-normal leading-[18px] tablet:text-[18px] tablet:leading-[27px] laptop:flex laptop:w-[574px]">
                  Tenha acesso a soluções analíticas de Prevenção de Perdas,
                  Mercado de Capitais e Marketing e Vendas disponíveis em
                  plataformas e APIs.
                </span>
              }
            />
            <Form />
            <div className="absolute left-[45%] laptop:bottom-[16px] brightness-75 bottom-0">
              <Image src={ArrowDown} alt="icon scroll page" />
            </div>
          </>
        ) : (
          <TitleBanner idPage={idPage} />
        )}
      </div>
    </div>
  );
};

export default FormOurSolutions;
