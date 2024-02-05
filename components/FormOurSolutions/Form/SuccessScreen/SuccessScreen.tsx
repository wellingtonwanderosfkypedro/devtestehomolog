import Image from 'next/image'

import FormFooter from "../FormFooter/FormFooter"

import SuccessScreenIcon from "@/assets/images/home/form/success-screen.svg";

const SuccessScreen = () => {
    return(
        <div className='bg-white px-[30px] py-[20px] rounded-[4.24px] tablet:rounded-md tablet:px-[35px] laptop:max-w-[488px]'>
            <div className='flex flex-col items-center my-[70px]'>
                <Image
                    src={SuccessScreenIcon}
                    width={70}
                    height={70}
                    alt="SuccessScreenIcon"
                />
                <h3 className='text-[16px] leading-[20px] text-blue-400 pt-[20px] pb-[15px] tablet:pt-[25px] tablet:pb-[25px] font-roboto font-bold tablet:text-[24px] tablet:leading-[18px]'>
                    Dados Enviados com Sucesso!
                </h3>
                <p className='max-w-[343px] text-center text-gray-200 font-roboto font-light text-[14px] leading-[24px] tablet:text-[18px]'>
                    Aguarde que em breve um de nossos consultores entrará em contato com você para dar prosseguimento
                </p>
            </div>
            <FormFooter />
        </div>
    )
} 

export default SuccessScreen