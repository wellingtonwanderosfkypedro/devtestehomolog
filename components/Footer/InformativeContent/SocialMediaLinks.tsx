import Image from "next/image";
import Link from "next/link";

import facebook from "@/assets/images/footer/facebook.png";
import instagram from "@/assets/images/footer/instagram.png";
import linkedin from "@/assets/images/footer/linkedin.png";
import youtube from "@/assets/images/footer/youtube.png";
import x from "../../../assets/images/footer/x.svg";

const SocialMediaLinks: React.FC = () => {
  return (
    <div className="flex items-center gap-5">
      <Link
        href="https://www.instagram.com/neowaybrasil"
        target="_blank"
        title="Instagram"
      >
        <Image src={facebook} width={24} height={24} alt="Instagram" />
      </Link>

      <Link
        href="https://www.facebook.com/neoway.nw/"
        target="_blank"
        title="Facebook"
      >
        <Image src={instagram} width={24} height={24} alt="Facebook" />
      </Link>

      <Link
        href="https://www.linkedin.com/company/neoway/"
        target="_blank"
        title="Linkedin"
      >
        <Image src={linkedin} width={24} height={24} alt="Linkedin" />
      </Link>

      <Link
        href="https://www.youtube.com/@neowayoficial"
        target="_blank"
        title="Youtube"
      >
        <Image src={youtube} width={24} height={24} alt="Youtube" />
      </Link>

      <Link
        href="https://twitter.com/neoway_oficial"
        target="_blank"
        title="Twitter"
      >
        <Image src={x} width={24} height={24} alt="Twitter" />
      </Link>
    </div>
  );
};

export default SocialMediaLinks;
