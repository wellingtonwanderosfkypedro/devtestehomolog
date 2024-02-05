import Image from "next/image";

interface CompanyIconProps {
  text: string;
  image: string;
}

export const CompanyIcon = ({ text, image }: CompanyIconProps) => {
  return (
    <div className="bg-white flex flex-col lg:gap-7 gap-4 max-w-[232px] px-6 py-8 lg:p-10 max-h-[147px] lg:h-[209px] lg:max-h-[209px]">
      <Image className="w-[38px] lg:w-[60px]" src={image} alt={text}></Image>
      <p className="font-semibold lg:text-2xl text-lg font-archivo text-gray-500 leading-5">{text}</p>
    </div>
  );
};
