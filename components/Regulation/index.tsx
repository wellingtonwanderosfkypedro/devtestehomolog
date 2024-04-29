import Image from "next/image";
import { IRegulation } from "./types/IRegulation";
import RegulationCards from "./RegulationCards";

const Regulation = ({
  title,
  text,
  selosCertificacoes,
  certifications,
  slidesView,
}: IRegulation) => {
  return (
    <section className="bg-gray-100 mt-20">
      <div className="flex mini:flex-col laptop:flex-row max-w-screen-xl justify-between mx-auto mini:pt-12 laptop:pt-12 mini:pb-12 laptop:pb-16">
        <div className="mini:max-w-[90%] laptop:max-w-[696px] mini:mx-0 notebook:mx-auto">
          <h3 className="text-gray-500 font-bold leading-tight font-rajdhani mini:text-xl laptop:text-3xl">
            {title}
          </h3>
          <p className="text-gray-200 font-medium leading-relaxed font-roboto mini:text-sm laptop:text-base mt-5">
            {text}
          </p>
        </div>
        <div className="mini:max-w-[90%] laptop:max-w-full mx-auto flex items-center gap-5 laptop:min-w-[416px] mini:mt-12 laptop:mt-0">
          {selosCertificacoes.map((selo) => (
            <div key={selo.alt} className="h-[88px]">
              <Image src={selo.url} alt={"selo.alt"} width={88} height={88} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex max-w-screen-xl mx-auto mini:ml-4 laptop:ml-auto">
        <RegulationCards icons={certifications} slidesView={slidesView} />
      </div>
    </section>
  );
};

export default Regulation;
