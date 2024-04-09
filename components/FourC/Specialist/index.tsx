import { useMedia } from "react-use";
import { ISpecialist } from "../types/IFourC";
import Image from "next/image";
import Link from "next/link";

const Specialist = ({ specialist }: { specialist: ISpecialist }) => {
    
    const isMob = useMedia("(max-width: 500px)", false)

    const backgroundDesktop = {
      backgroundImage: `url(/mocks/fsi/FourC/FourCBannerBottom.png)`,
    };
    const backgroundMobile = {
      backgroundImage: `url(/mocks/fsi/FourC/FourCBannerBottom-mobile.png)`,
    };

  return (
    <div style={isMob ? backgroundMobile : backgroundDesktop} className="text-white flex flex-col items-center py-16">
      <Image src={specialist.src} alt={specialist.title} width={154} height={73} />
      <h3 className="pt-6 pb-4 font-radjani text-5xl max-w-[868px] text-center leading-normal font-semibold">{specialist.title}</h3>
      <p className="pb-12 font-roboto text-xl leading-8">{specialist.text}</p>
      <Link className="text-blue-500 bg-white py-4 px-12 font-rajdani leading-6 rounded-md font-semibold hover:bg-gray-100" href={specialist.button.link}>{specialist.button.text}</Link>
    </div>
  );
};

export default Specialist;
