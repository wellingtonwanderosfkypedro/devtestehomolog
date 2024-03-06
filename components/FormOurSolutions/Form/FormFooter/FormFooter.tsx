import Link from "next/link"
import Image from 'next/image';

import { Information, Security } from "../../types/formOurSolutionsTypes";

interface FormFooterProps {
    information: Information;
    security: Security;
}


const FormFooter = ({ information, security }: FormFooterProps) => {

    return (
        <div className="laptop:mb-[10px]">
            <div className='mt-[10px] mb-[10px] tablet:mt-[25px] tablet:mb-[20px]'>
                <p className='text-neutral-300 font-roboto font-normal text-[10px] leading-[18px] tablet:text-[14px]'>
                    {information?.text}
                    <Link
                        className='underline ml-1'
                        href={information?.link_1?.url ? information?.link_1?.url : '#'}
                        target={information?.link_1?.target}
                    >
                        {information?.link_1?.title}
                    </Link>
                    {information?.link_2?.url && information?.link_2.title && (
                        <>
                            {''} e {''}
                            <Link
                                className='underline'
                                href={information?.link_2?.url ? information?.link_2?.url : '#'}
                                target={information?.link_2?.target}
                            >
                                {information?.link_2.title}
                            </Link>
                        </>
                    )}
                </p>
            </div>

            <div className="border border-solid border-gray-600 mb-[20px]" />

            <div className='flex items-center gap-2 tablet:gap-3'>
                <Image
                    src={security?.icon}
                    width={21.6}
                    height={24}
                    alt="Security"
                />
                <span className='text-neutral-300 font-roboto font-normal text-[10px] leading-[18px] tablet:text-[14px]'>
                    {security?.text}
                </span>
            </div>
        </div>
    )
}

export default FormFooter