import Link from 'next/link'

const CopyWritting: React.FC  = () => {
    return (
        <div className='bg-theme-primary-800'>
            <div className='flex flex-col mx-6 pt-5 pb-6 gap-y-6 tablet:flex-row tablet:justify-between tablet:gap-4 tablet:max-w-[95%] tablet:mx-auto laptop:max-w-[100%] lg:px-24 laptop:gap-y-0 desktop:h-16 maxDesktop:max-w-[1440px] '>
                <div className='flex flex-wrap gap-y-4 justify-between tablet:gap-5'>
                    <Link className='text-skin-primary text-[14px] font-normal font-archivo w-[154px] tablet:min-w-[auto] tablet:w-[auto]' 
                        href={'#'}
                    >
                        Política de segurança
                    </Link>
                    <Link className='text-skin-primary text-[14px] font-normal font-archivo w-[154px] tablet:min-w-[auto] tablet:w-[auto]' 
                        href={'#'}
                    >
                        Aviso de privacidade site
                    </Link>
                    <Link className='text-skin-primary text-[14px] font-normal font-archivo w-[154px] tablet:min-w-[auto] tablet:w-[auto]' 
                        href={'#'}
                    >
                        Política de dados
                    </Link>
                    <Link className='text-skin-primary text-[14px] font-normal font-archivo w-[154px] tablet:min-w-[auto] tablet:w-[auto]' 
                        href={'#'}
                    >
                        Exercite seus direitos
                    </Link>
                </div>

                <span className='text-skin-primary text-[12px] text-start font-normal font-archivo tablet:text-[14px]'>
                    Copyright © 2019 Todos os direitos reservados para Neoway
                </span>
            </div>
        </div>
    )
}

export default CopyWritting