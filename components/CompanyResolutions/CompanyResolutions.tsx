import { ActionResolution } from "./ActionResolution";
import { CompanyResolution } from "./types/companyResolutionsTypes";

interface CompanyResolutionsProps{
  data: CompanyResolution;
}

export const CompanyResolutions = ({ data }: CompanyResolutionsProps) => {
  return (
    <div className="maxDesktop:max-w-[1440px] px-6 mx-auto py-8 lg:px-24">
      <div className="max-w-[1128px] pb-8">
        <h3 className="text-blue-800 font-roboto text-xs font-semibold uppercase pb-4">
          {data?.title}
        </h3>
        <p className="font-rajdhani text-gray-500 font-bold text-lg lg:text-4xl leading-5 lg:leading-10">
          {data?.sub_title}
        </p>
      </div>
      <ActionResolution resolutions={data?.items} />
    </div>
  );
};
