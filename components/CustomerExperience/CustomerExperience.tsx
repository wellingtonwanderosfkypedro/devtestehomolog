import CustomerCarousel from "./CustomerCarousel"
import { Customers } from "./Customers"

const CustomerExperience = () => {
    return (
        <div className="w-full bg-white lg:py-20 py-10">
            <div className="maxDesktop:max-w-[1440px] px-6 mx-auto py-8 lg:px-24">
                <h3 className="text-[25.92px] leading-[32.4px] text-gray-500 font-bold font-rajdhani tablet:text-[40px] tablet:leading-[50px]">
                    Como é a experiência dos nossos clientes?
                </h3>
                <p className="text-[13px] font-roboto pb-10 text-neutral-300 font-medium pt-2 tablet:text-[18px] laptop:w-[850px]">
                    Com nossas soluções e dados disponíveis em plataformas e APIs, ajudamos empresas de mais
                    de 20 setores que precisam ganhar mais e/ou perder menos.
                </p>
                <div className="relative">
                    <CustomerCarousel 
                        customers={Customers}
                    />
                </div>
            </div>
        </div>
    )
}

export default CustomerExperience