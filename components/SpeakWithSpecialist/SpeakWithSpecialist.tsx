import Image from "next/image";
import AnaliseCadastralIcon from "@/assets/images/pages/analise-cadastral.svg";
import IdentificaRelacionamentoslIcon from "@/assets/images/pages/identifica-conflito.svg";
import AnaliseMidiasIcon from "@/assets/images/pages/analise-midias.svg";
import MonitorRiscoIcon from "@/assets/images/pages/monitor-risco.svg";
import GestaoRelatoriosIcon from "@/assets/images/pages/gestao-relatorios.svg";
import Link from "next/link";

const SpeakWithSpecialist: React.FC = () => {
  return (
    <div className="bg-[#f4f4fa]">
      <div className="maxDesktop:max-w-[1440px] mx-auto laptop:py-8 pt-12 pb-[34px] laptop:px-0 px-5 lg:px-24 flex laptop:flex-row flex-col justify-between self-start ">
        <div className="laptop:w-5/12 laptop:block hidden">
          <img
            src="/banner-inteligencia-analistiva-prevencao-riscos.png"
            alt="banner-inteligencia-analistiva-prevencao-riscos"
          />
          <button className="w-10/12 bg-[#1B1B96] hover:bg-[#14147b] text-white	py-4 w-4/5 flex justify-center mx-auto mt-1.5 rounded-md text-base font-semibold">
            Fale com um especialista
          </button>
        </div>

        <div className="laptop:w-5/12 font-archivo">
          <h2 className="font-rajdhani laptop:text-5xl text-2xl laptop:leading-[58px] font-medium text-[#28283F]">
            <span className="font-bold text-[#1B1B96] ">
              Inteligência analítica
            </span>{" "}
            da Neoway para{" "}
            <span className="font-bold text-[#1B1B96] ">
              Prevenção de Perdas
            </span>{" "}
            em todas as etapas do seu negócio.
          </h2>
          <p className="text-lg text-gray-200 font-normal mt-6 max-tablet:text-base">
            A Neoway utiliza algoritmos avançados para extrair insights valiosos
            de grandes conjuntos de dados, proporcionando uma compreensão
            profunda do setor. Colaboramos na identificação de padrões, criando
            estratégias inovadoras para simplificar a complexidade dos dados e
            impulsionar a excelência operacional.
          </p>

          {/* Container of cards with scroll */}
          <div className="laptop:max-h-[220px] laptop:overflow-y-auto mt-[26px] pr-2 scrollbar-webkit">
            <div className="flex flex-row items-start bg-white rounded-lg py-4 px-6 mb-8 gap-6 max-tablet:px-4 max-tablet:gap-4">
              <Image src={AnaliseCadastralIcon} alt="" />

              <div className="flex flex-col grow justify-start ">
                <h3 className="font-semibold max-tablet:text-base">
                  Análise cadastral
                </h3>
                <p className="text-lg text-gray-200 font-normal max-tablet:text-sm">
                  Utilize inteligência de dados para realizar background check
                  de pessoas físicas e jurídicas. Conte com a tecnologia
                  antifraude para detectar e prevenir contas laranjas e furto de
                  identidade, utilizando as soluções Neoway: Compliance,
                  Lawsuits, Check e Seeker
                </p>
                <Link
                  href={""}
                  className="hidden max-[1024px]:block font-roboto text-blue-400 underline text-sm font-normal mt-1"
                >
                  Ler Mais
                </Link>
              </div>
            </div>
            <div className="flex flex-row items-start bg-white rounded-lg py-4 px-6 mb-8 gap-6 max-tablet:px-4 max-tablet:gap-4">
              <Image src={IdentificaRelacionamentoslIcon} alt="" />

              <div className="flex flex-col grow justify-start ">
                <h3 className="font-semibold text-xl max-tablet:text-base">
                  Identificação de relacionamentos e conflito de interesses
                </h3>
                <p className="text-lg text-gray-200 font-normal max-tablet:text-sm">
                  Descubra conexões entre pessoas físicas e jurídicas,
                  identifique...
                </p>
                <Link
                  href={""}
                  className="hidden max-[1024px]:block font-roboto text-blue-400 underline text-sm font-normal mt-1"
                >
                  Ler Mais
                </Link>
              </div>
            </div>
            <div className="flex flex-row items-start bg-white rounded-lg py-4 px-6 mb-8 gap-6 max-tablet:px-4 max-tablet:gap-4">
              <Image src={AnaliseMidiasIcon} alt="" />

              <div className="flex flex-col grow justify-start ">
                <h3 className="font-semibold text-xl max-tablet:text-base">
                  Análise de mídias negativas
                </h3>
                <p className="text-lg text-gray-200 font-normal max-tablet:text-sm">
                  Identifique na web notícias e registros com menções
                  negativas...
                </p>
                <Link
                  href={""}
                  className="hidden max-[1024px]:block font-roboto text-blue-400 underline text-sm font-normal mt-1"
                >
                  Ler Mais
                </Link>
              </div>
            </div>
            <div className="flex flex-row items-start bg-white rounded-lg py-4 px-6 mb-8 gap-6 max-tablet:px-4 max-tablet:gap-4">
              <Image src={MonitorRiscoIcon} alt="" />

              <div className="flex flex-col grow justify-start ">
                <h3 className="font-semibold text-xl max-tablet:text-base">
                  Monitoramento de riscos contínuo
                </h3>
                <p className="text-lg text-gray-200 font-normal max-tablet:text-sm">
                  Monitore informações sobre empresas e sócios e receba
                  alertas...
                </p>
                <Link
                  href={""}
                  className="hidden max-[1024px]:block font-roboto text-blue-400 underline text-sm font-normal mt-1"
                >
                  Ler Mais
                </Link>
              </div>
            </div>
            <div className="flex flex-row items-start bg-white rounded-lg py-4 px-6 mb-8 gap-6 max-tablet:px-4 max-tablet:gap-4">
              <Image src={GestaoRelatoriosIcon} alt="" />

              <div className="flex flex-col grow justify-start ">
                <h3 className="font-semibold text-xl max-tablet:text-base">
                  Gestão de relatórios
                </h3>
                <p className="text-lg text-gray-200 font-normal max-tablet:text-sm">
                  Armazene evidências por até cinco anos e obtenha acesso aos...{" "}
                </p>
                <Link
                  href={""}
                  className="hidden max-[1024px]:block font-roboto text-blue-400 underline text-sm font-normal mt-1"
                >
                  Ler Mais
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakWithSpecialist;
