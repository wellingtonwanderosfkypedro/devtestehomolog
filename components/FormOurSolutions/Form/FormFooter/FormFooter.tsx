import Link from "next/link";
import Image from "next/image";

import { Information, Security } from "../../types/formOurSolutionsTypes";
import { langStore } from "@/helpers/providers/getLang";

interface FormFooterProps {
  information: Information;
  security: Security;
}

const FormFooter = ({ information, security }: FormFooterProps) => {
  const isEnglish = langStore.getLang();

  return (
    <div className="laptop:mb-[10px]">
      <div className="mt-[10px] mb-[10px] tablet:mt-[25px] tablet:mb-[20px]">
        <p className="text-skin-variation-light font-roboto font-normal text-2.5 leading-[18px] tablet:text-3.5">
          {isEnglish ? information.englishText : information?.text}
          <Link
            className="underline ml-1"
            href={information?.link_1?.url ? information?.link_1?.url : "#"}
            target={information?.link_1?.target}
          >
            {isEnglish
              ? information.englishLink_1.title
              : information?.link_1?.title}
          </Link>
          {information?.link_2?.url && information?.link_2.title && (
            <>
              {""} e {""}
              <Link
                className="underline"
                href={information?.link_2?.url ? information?.link_2?.url : "#"}
                target={information?.link_2?.target}
              >
                {isEnglish
                  ? information.englishLink_2.title
                  : information?.link_2.title}
              </Link>
            </>
          )}
        </p>
      </div>

      <div className="border border-solid border-gray-600 mb-[20px]" />

      <div className="flex items-center gap-2 tablet:gap-3">
        <Image src={security?.icon} width={21.6} height={24} alt="Security" />
        <span className="text-skin-variation-light font-roboto font-normal text-2.5 leading-[18px] tablet:text-3.5">
          {security?.text}
        </span>
      </div>
    </div>
  );
};

export default FormFooter;
