"use client";
import { useLangContext } from "@/helpers/providers/langCtx";
import { CompanyAction } from "./CompanyAction";
import { CompanyGrid } from "./CompanyGrid";
import { CompanySegmentsData } from "./types/companySegments";
import useComponentAnimation from "@/hooks/useComponentAnimation";

const CompanySegments = ({ data }: { data: CompanySegmentsData }) => {
  const { isEnglish } = useLangContext();
  const { isVisible, refElement } = useComponentAnimation();

  if (data?.items) {
    data.items = Object.values(data?.items);
  }

  return (
    <div className="w-full bg-gray-100 lg:py-20 py-10">
      <div className="maxDesktop:max-w-[1440px] px-6 mx-auto py-8 lg:px-24">
        <div
          className={`${
            isVisible ? "animate-fade-components visible" : "invisible"
          }`}
          ref={refElement}
        >
          <h3 className="lg:text-3xl text-2xl font-bold font-rajdhani">
            {isEnglish ? data?.englishTitle : data?.title}
          </h3>
          <p className="lg:text-lg text-[13px] font-roboto pb-10 text-gray-200 font-medium pt-2">
            {isEnglish ? data?.englishDescription : data?.description}
          </p>
        </div>
        <div className="flex gap-6 flex-col lg:flex-row">
          {data?.items && (
            <>
              <CompanyAction action={data.items[0]} isEnglish={isEnglish} />
              <CompanyGrid items={data.items} isEnglish={isEnglish} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanySegments;
