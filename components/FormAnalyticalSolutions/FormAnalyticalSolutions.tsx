import { langStore } from "@/helpers/providers/getLang";
import Form from "../FormOurSolutions/Form/Form";
import TextArea from "../FormOurSolutions/TextArea/TextArea";

import { FormAnalyticalSolution } from "./types/formAnalyticalSolutionsTypes";

interface FormAnalyticalSolutionsProps {
  data: FormAnalyticalSolution;
}

const FormAnalyticalSolutions = ({ data }: FormAnalyticalSolutionsProps) => {
  const isEnglish = langStore.getLang();
  const backgroundStyle = {
    backgroundImage: `url(${data?.image_desktop?.url})`,
  };

  return (
    <div
      style={backgroundStyle}
      className={`bg-no-repeat w-[100%] bg-[length:100%_100%] desktop:h-[${data?.image_desktop?.height}px]`}
    >
      <div className="flex flex-wrap justify-center gap-[30px] items-center mx-6 py-8 tablet:max-w-[95%] tablet:mx-auto laptop:max-w-[100%] lg:px-24 laptop:flex-nowrap desktop:justify-between laptop:gap-6 laptop:pt-[60px] maxDesktop:max-w-[1440px]">
        <TextArea
          message3={
            <span className="text-white text-[22px] font-rajdhani font-semibold leading-[27.1px] tablet:text-[48px] tablet:leading-[60px]">
              {isEnglish ? data.englishTitle : data?.title}{" "}
              <strong className="font-bold">
                {isEnglish
                  ? data.englishTitleComplement_1
                  : data?.title_complement_1}
              </strong>
            </span>
          }
        />
        <Form form={data?.form} />
      </div>
    </div>
  );
};

export default FormAnalyticalSolutions;
