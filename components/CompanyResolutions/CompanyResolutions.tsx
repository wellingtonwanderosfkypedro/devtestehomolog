"use client";
import { ActionResolution } from "./ActionResolution";
import { CompanyResolution } from "./types/companyResolutionsTypes";
import { useLangContext } from "@/helpers/providers/langCtx";

interface CompanyResolutionsProps {
  data: CompanyResolution;
}

export const CompanyResolutions = ({ data }: CompanyResolutionsProps) => {
  const { isEnglish } = useLangContext();
  if (!data) {
    return <></>;
  }

  data.items = Object.values(data.items).map((item) => ({
    ...item,
    sub_items: Object.values(item.sub_items),
  }));

  return (
    <div className="maxDesktop:max-w-[1440px] px-6 mx-auto py-8 lg:px-24">
      <div className="max-w-[1128px] pb-8">
        <h3 className="text-theme-primary-800 font-roboto text-xs font-semibold uppercase pb-4">
          {isEnglish ? data.englishTitle : data?.title}
        </h3>
        <p className="font-rajdhani text-skin-base font-bold text-lg lg:text-4xl leading-5 lg:leading-10">
          {isEnglish ? data.englishSubTitle : data?.sub_title}
        </p>
      </div>
      <ActionResolution resolutions={data?.items} />
    </div>
  );
};
