import { langStore } from "@/helpers/providers/getLang";
import CustomerCarousel from "./CustomerCarousel";
import { ClienteExperience } from "./types/CustomerExperienceTypes";

interface CustomerExperienceProps {
  data?: ClienteExperience;
  slidesView?: number;
}

const CustomerExperience = ({
  data,
  slidesView = 3,
}: CustomerExperienceProps) => {
  const isEnglish = langStore.getLang();
  if (data?.items) {
    data.items = Object.values(data.items);
  }

  return (
    <div className="w-full bg-skin-default lg:py-20 py-10">
      <div className="maxDesktop:max-w-[1440px] px-6 mx-auto py-8 lg:px-24">
        <h3 className="text-[25.92px] leading-[32.4px] text-skin-base font-bold font-rajdhani tablet:text-10 tablet:leading-[50px]">
          {isEnglish ? data?.englishTitle : data?.title}
        </h3>
        <p className="text-[13px] font-roboto pb-10 text-skin-variation-light font-medium pt-2 tablet:text-4.5 laptop:w-[850px]">
          {isEnglish ? data?.englishDescription : data?.description}
        </p>
        <div className="relative">
          {data?.items && (
            <CustomerCarousel items={data?.items} slidesView={slidesView} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerExperience;
