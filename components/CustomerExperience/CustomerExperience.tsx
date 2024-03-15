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
  if (data?.items) {
    data.items = Object.values(data.items);
  }

  return (
    <div className="w-full bg-white lg:py-20 py-10">
      <div className="maxDesktop:max-w-[1440px] px-6 mx-auto py-8 lg:px-24">
        <h3 className="text-[25.92px] leading-[32.4px] text-gray-500 font-bold font-rajdhani tablet:text-[40px] tablet:leading-[50px]">
          {data?.title}
        </h3>
        <p className="text-[13px] font-roboto pb-10 text-neutral-300 font-medium pt-2 tablet:text-[18px] laptop:w-[850px]">
          {data?.description}
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
