import IconSegment from "@/assets/images/home/segments/SegmentIcon.svg";
import Image from "next/image";
import Link from "next/link";

export const CompanyAction = () => {
  return (
    <div className="bg-blue-500 lg:px-9 px-8 py-7 lg:py-10 lg:max-w-[519px]">
      <div className="flex gap-4">
        <h3 className="font-archivo  items-center lg:text-[28px] text-lg text-white pb-4  flex gap-4 lg:leading-8 leading-4">
          <Image
            src={IconSegment}
            className="lg:w-[60px] w-[38px] "
            alt="segment action"
          ></Image>
          Serviços Financeiros (FSI)
        </h3>
      </div>
      <p className="text-white lg:text-lg text-sm font-roboto pb-6">
        Levamos o poder para decisão dos nossos clientes do mercado financeiro
        por meio de inteligência analítica e qualidade de dados. Ajudamos a sua
        empresa - seja ela corretora, banco, fintech, entre outras - a alcançar
        resultados consistentes em todas as etapas da jornada do cliente,
        gerando ganhos significativos para o seu negócio.
      </p>
      <Link
        className="bg-orange-300 h-14 flex text-xs items-center justify-center text-white transition hover:bg-orange-700 "
        href={"/"}
      >
        Conheça nossas soluções para FSI 
      </Link>
    </div>
  );
};
