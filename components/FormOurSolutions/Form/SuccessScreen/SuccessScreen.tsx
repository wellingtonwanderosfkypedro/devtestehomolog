import Image from 'next/image'

import FormFooter from "../FormFooter/FormFooter"

import SuccessScreenIcon from "@/assets/images/home/form/success-screen.svg";

import { Information, Security } from '../../types/formOurSolutionsTypes';

interface ErrorScreenProps {
    information: Information;
    security: Security;
}

const SuccessScreen = ({ information, security }: ErrorScreenProps) => {
    return(
        <div className='bg-skin-default px-[30px] py-[20px] rounded-[4.24px] tablet:rounded-md tablet:px-[35px] laptop:max-w-[488px]'>
            <div className='flex flex-col items-center my-[70px]'>
                <Image
                    src={SuccessScreenIcon}
                    width={70}
                    height={70}
                    alt="SuccessScreenIcon"
                />
                <h3 className='text-4 leading-[20px] text-theme-primary-400 pt-[20px] pb-[15px] tablet:pt-[25px] tablet:pb-[25px] font-roboto font-bold tablet:text-[24px] tablet:leading-[18px]'>
                    Dados Enviados com Sucesso!
                </h3>
                <p className='max-w-[343px] text-center text-skin-base-accent font-roboto font-light text-3.5 leading-[24px] tablet:text-4.5'>
                    Aguarde que em breve um de nossos consultores entrará em contato com você para dar prosseguimento
                </p>
            </div>
            <FormFooter 
                information={information} 
                security={security}
            />
        </div>
    )
} 

export default SuccessScreen