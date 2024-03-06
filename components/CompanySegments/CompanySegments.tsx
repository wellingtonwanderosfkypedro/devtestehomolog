import { CompanyAction } from "./CompanyAction";
import { CompanyGrid } from "./CompanyGrid";

import { CompanySegmentsData } from "./types/companySegments";

interface CompanySegmentsProps {
  data?: CompanySegmentsData;
}

const CompanySegments = ({ data }: CompanySegmentsProps) => {
  //  const { title, description, items } = data;

  return (
    <div className="w-full bg-gray-100 lg:py-20 py-10">
      <div className="maxDesktop:max-w-[1440px] px-6 mx-auto py-8 lg:px-24">
        <h3 className="lg:text-3xl text-2xl font-bold font-rajdhani">
          {data?.title}
        </h3>
        <p className="lg:text-lg text-[13px] font-roboto pb-10 text-gray-200 font-medium pt-2">
          {data?.description}
        </p>
        <div className="flex gap-6 flex-col lg:flex-row">
          {data?.items && (
            <>
              <CompanyAction action={data.items[0]} />
              <CompanyGrid items={data.items} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanySegments;
