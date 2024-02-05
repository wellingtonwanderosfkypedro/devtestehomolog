import Link from "next/link"
import Image from 'next/image';

import Security from "@/assets/images/home/form/security.svg";

const FormFooter = () => {
    return (
        <div className="laptop:mb-[10px]">
            <div className='mt-[10px] mb-[10px] tablet:mt-[25px] tablet:mb-[20px]'>
                <p className='text-neutral-300 font-roboto font-normal text-[10px] leading-[18px] tablet:text-[14px]'>
                    Para obter mais informações sobre como tratamos os seus dados pessoais,
                    consulte a nossa
                    <Link
                        className='underline ml-1'
                        href={'https://f.hubspotusercontent10.net/hubfs/7323764/POL%C3%8DTICA%20DE%20TRATAMENTO%20DE%20DADOS.docx.pdf'}
                        target='_blank'
                    >
                        Política de Tratamento de Dados
                    </Link>
                    {''} e {''}
                    <Link
                        className='underline'
                        href={'https://blog.neoway.com.br/politica-de-privacidade/?_ga=2.88649627.1889950759.1615312694-120152612.1606833620'}
                        target='_blank'
                    >
                        Aviso de Privacidade do Site Neoway
                    </Link>
                </p>
            </div>

            <div className="border border-solid border-gray-600 mb-[20px]"/>

            <div className='flex items-center gap-2 tablet:gap-3'>
                <Image
                    src={Security}
                    width={21.6}
                    height={24}
                    alt="Security"
                />
                <span className='text-neutral-300 font-roboto font-normal text-[10px] leading-[18px] tablet:text-[14px]'>
                    Seus dados estão seguros
                </span>
            </div>
        </div>
    )
}

export default FormFooter