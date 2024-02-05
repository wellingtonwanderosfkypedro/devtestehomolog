import Device from "@/assets/images/home/Device.png";
import Image from 'next/image'
import Link from "next/link";

const PlatformSolutions: React.FC = () => {
    return (
        <div className="maxDesktop:max-w-[1440px] mx-auto py-8 lg:px-24">
            <div className="bg-white flex flex-col mx-6 tablet:flex-row tablet:max-w-[95%] tablet:mx-auto laptop:max-w-[100%] maxDesktop:justify-between">
                <div className="flex flex-col tablet:justify-center tablet:max-w-[40%] maxDesktop:max-w-[40%]">
                    <h2 className="text-[25.92px] leading-[32.4px] text-gray-500 font-rajdhani font-bold tablet:leading-[50px] tablet:text-[40px]">
                        Soluções em plataforma ou API com dashboards customizados
                    </h2>
                    <span className="text-[15px] leading-[22.5px] tablet:text-[20px] tablet:leading-[30px] pt-5 pb-5 text-gray-200 font-roboto font-normal">
                        Oferecemos flexibilidade na entrega das soluções, com possibilidade de integração por meio de API ou acesso via plataforma. Além disso,
                        disponibilizamos análises personalizadas em dashboards customizados de acordo com as necessidades dos nossos clientes.
                        <br /> <br />
                        Simplifique a sua operação com o apoio de inteligência analítica e dados escaláveis que atendem aos seus objetivos de negócio.
                    </span>
                    <Link className='bg-white flex justify-center font-rajdhani text-[16px] font-semibold  text-blue-500 hover:bg-blue-500 hover:transition-all hover:text-white w-[76%] pt-4 pb-4 mt-4 border border-solid border-blue-500'
                        href={'#'}
                    >
                        Fale com um especialista
                    </Link>
                </div>
                <div className="mt-9 tablet:mt-0 tablet:max-w-[60%] maxDesktop:max-w-[60%]">
                    <Image
                        src={Device}
                        width={725}
                        height={598}
                        alt="Device"
                    />
                </div>
            </div>
        </div>
    )
}

export default PlatformSolutions