import Image from 'next/image';
import SocialMediaLinks from "./SocialMediaLinks";

import LogoNeoway from "@/assets/images/footer/LogoNeoway.png";

const InformativeContent: React.FC = () => {
    return (
        <div className="max-w-[200px]">
            <Image
                src={LogoNeoway}
                width={154}
                height={73}
                alt="Logo Neoway"
            />
            <span className='flex text-blue-500 font-rajdhani font-bold text-xl mt-11 mb-3 desktop:whitespace-nowrap'>
                Siga nossas redes
            </span>
            <SocialMediaLinks />
        </div>
    );
}

export default InformativeContent;
