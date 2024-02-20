import Image from "next/image";
import { faqDatas } from "./mockDataFaq";
import ContactIcon from "@/assets/images/pages/icon-contact.svg";
import Link from "next/link";
import { useState } from "react";

interface pageProps {
  idPage: string;
}

export const Faq = ({ idPage }: pageProps) => {
  const [activeOption, setActiveOption] = useState(null);

  const dataAtualPage = faqDatas.pageDataFaq
    .filter((pageData) => {
      if (pageData.idPage === idPage) return pageData;
    })
    .reduce((dataAtual, pageData) => {
      return (dataAtual = pageData);
    });

  const toggleOption = (optionID: any) => {
    setActiveOption(activeOption === optionID ? null : optionID);
  };

  return (
    <div className="flex maxDesktop:max-w-[1440px] px-6 mx-auto py-8 lg:px-24">
      <div className="flex gap-[70px] max-laptop:flex-col">
        <div className="flex flex-col gap-2 w-[50%] max-laptop:w-full">
          <h4 className="font-roboto text-blue-400 font-bold text-base uppercase mb-4">
            Perguntas frequentes sobre as soluções para {dataAtualPage.page}
          </h4>
          <p className="font-rajdhani font-bold text-3xl text-blue-700 max-laptop:text-2xl">
            Ficou com alguma dúvida?
          </p>
          <span className="font-roboto font-medium text-base text-gray-700 mb-2 max-w-[490px]">
            Ficou com alguma dúvida? Separamos as principais perguntas e
            respostas sobre {dataAtualPage.page}. Caso queira saber sobre outros
            assuntos não mencionados por aqui, entre em contato pelos nossos
            canais de atendimento.
          </span>

          <Link href={""} className="flex gap-2">
            <Image alt="" src={ContactIcon} />
            <span className="font-archivo font-bold text-base">
              Ainda com dúvidas? Fale conosco!
            </span>
          </Link>
        </div>
        <div className="w-[50%] max-laptop:w-full">
          {dataAtualPage.qas.map((qa, key) => {
            const isOptionActive = activeOption === key;

            return (
              <div
                key={key}
                className={`relative flex flex-col pb-7   ${
                  key !== dataAtualPage.qas.length - 1
                    ? "border-b border-gray-400 mb-7"
                    : ""
                }`}
              >
                <div className="flex">
                  <p className="font-archivo font-bold text-lg text-blue-700 w-[90%] max-laptop:text-base">
                    {qa.question}
                  </p>
                  <button
                    className="absolute w-11 h-11 p-3 border border-gray-400 rounded-full top-0 right-0 max-tablet:w-8 max-tablet:h-8 max-tablet:p-2"
                    onClick={() => {
                      toggleOption(key);
                    }}
                  >
                    <span
                      className={`block relative transition duration-300 ease-in-out h-[2px] rounded-full bg-orange-200`}
                    >
                      <span
                        className={` block w-full h-full absolute transition duration-500 ease-in-out rounded-full bg-orange-200 ${
                          isOptionActive
                            ? "top-0"
                            : "transform rotate-[90deg]  h-[1px]"
                        } `}
                      ></span>
                    </span>
                  </button>
                </div>
                {isOptionActive && (
                  <span className="font-roboto font-medium text-base text-gray-700 pt-7">
                    {qa.answer}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
