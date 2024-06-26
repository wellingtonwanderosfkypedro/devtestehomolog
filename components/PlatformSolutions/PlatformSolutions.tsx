import Device from "@/assets/images/home/Device.png";
import Image from "next/image";
import Link from "next/link";
import { SolutiionsPage, solutiionsPageItems } from "./mockData";

interface PageProps {
  idPage?: string;
}

export const PlatformSolutions = ({ idPage }: PageProps) => {
  let contentComponent: SolutiionsPage = {
    idPage: "default",
    title: " Soluções em plataforma ou API com dashboards customizados",
    subTitle:
      " Oferecemos flexibilidade na entrega das soluções, com possibilidade de integração por meio de API ou acesso via plataforma. Além disso, disponibilizamos análises personalizadas em dashboards customizados de acordo com as necessidades dos nossos clientes.",
    secondSubTitle:
      "Simplifique a sua operação com o apoio de inteligência analítica e dados escaláveis que atendem aos seus objetivos de negócio.",
  };

  if (idPage) {
    contentComponent = solutiionsPageItems.items
      .filter((item) => {
        if (item.idPage === idPage) return item;
      })
      .reduce((obj, item) => {
        obj = item;
        return obj;
      });
  }

  const renderItems = () => {
    return (
      <ul className="font-roboto text-skin-base-medium text-xl list-disc pl-8 font-semibold max-tablet:text-base max-tablet:pl-4">
        {contentComponent.arrayItems?.map((item, key) => {
          return <li key={key}>{item}</li>;
        })}
      </ul>
    );
  };

  return (
    <div className="maxDesktop:max-w-[1440px] mx-auto py-8 lg:px-24">
      <div className="bg-skin-default flex flex-col mx-6 tablet:flex-row tablet:max-w-[95%] tablet:mx-auto laptop:max-w-[100%] maxDesktop:justify-between justify-center">
        <div className="flex flex-col tablet:justify-center tablet:max-w-[45%] maxDesktop:max-w-[40%]">
          <h2 className="text-[25.92px] leading-[32.4px] text-skin-base font-rajdhani font-bold tablet:leading-[50px] tablet:text-10">
            {contentComponent.title}
          </h2>
          <span className="text-4 leading-[22.5px] tablet:text-5 tablet:leading-[30px] pt-5 pb-5 text-skin-base-accent font-roboto font-normal">
            {contentComponent.subTitle}
            <br /> <br />
            <span
              className={` ${
                contentComponent.idPage === "prevencao-perdas"
                  ? "font-medium text-skin-base-medium"
                  : ""
              }`}
            >
              {idPage === "mercados-capitais"
                ? renderItems()
                : contentComponent.secondSubTitle}
            </span>
          </span>
          <Link
            className="bg-skin-default flex justify-center font-rajdhani text-4 font-semibold  text-theme-primary-500 hover:bg-theme-primary-500 hover:transition-all hover:text-skin-primary w-[76%] pt-4 pb-4 mt-4 border border-solid border-theme-primary-500"
            href={"#"}
          >
            Fale com um especialista
          </Link>
        </div>
        <div className="mt-9 tablet:mt-0 tablet:max-w-[45%] maxDesktop:max-w-[60%]">
          <Image src={Device} width={725} height={598} alt="Device" />
        </div>
      </div>
    </div>
  );
};
