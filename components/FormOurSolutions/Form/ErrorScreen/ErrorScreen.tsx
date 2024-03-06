import Image from 'next/image';
import Link from 'next/link';

import FormFooter from "../FormFooter/FormFooter";

import Error from "@/assets/images/home/form/error.svg";

import { Information, Security } from '../../types/formOurSolutionsTypes';

interface ErrorScreenProps {
    information: Information;
    security: Security;
}

const ErrorScreen = ({information, security}: ErrorScreenProps) => {
    return(
        <div className='bg-white px-[30px] py-[20px] rounded-[4.24px] tablet:rounded-md tablet:px-[35px] laptop:max-w-[488px]'>
            <div className='flex flex-col items-center my-[70px]'>
                <Image
                    src={Error}
                    width={70}
                    height={70}
                    alt="Error"
                />
                <h3 className='text-[16px] leading-[20px] text-red-400 pt-[20px] pb-[15px] tablet:pt-[25px] tablet:pb-[25px] font-roboto font-bold tablet:text-[24px] tablet:leading-[18px]'>
                    Falha ao Dados enviar dados!
                </h3>
                <p className='max-w-[343px] text-center text-gray-200 font-roboto font-light text-[14px] leading-[24px] tablet:text-[18px]'>
                    Tente enviar novamente os dados, <Link className='underline hover:text-red-400' href='/'>clique aqui.</Link> 
                </p>
            </div>
            <FormFooter 
                information={information} 
                security={security}
            />
        </div>
    )
} 

export default ErrorScreen