import Image from "next/image"
import Richtext from "../RichText/RichText"
import Link from "next/link"

export const TextWithSideImage = ({ title, description, src, alt, linkButton }: { title: string, description: string, src: string, alt: string, linkButton?: string }) => {
  return (
    <div className="max-w-screen-xl pb-8 mx-12 ml-12 lg:mt-24 lg:m-auto mt-9 flex flex-col-reverse lg:flex-row">
      <div className="mr-8">
        <p className="font-rajdhani text-4xl text-black-300 font-bold hidden lg:flex mb-4">{title}</p>
        <Richtext colorText="#7C7C7C" text={description} />
        {linkButton && <Link href={linkButton} className="bg-theme-secondary-300 h-14 hidden lg:flex items-center justify-center text-white font-rajdhani laptop:w-[60%] text-base font-semibold w-full max-w-96 rounded-md mt-8">Fale com um especialista</Link>}
      </div>
      <Image width={592} height={790} alt={alt} src={src} />
    </div>
  )
}