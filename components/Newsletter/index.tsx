"use client";
import { useMedia } from "react-use";

interface NewsletterProps {
  title: string;
  text: string;
  input: {
    placeholder: string;
    textButton: string;
  };
  backgroundAcceptImage: boolean;
  textColor?: string;
  textColorAccessibility?: string;
  imageUrlDesktop?: string;
  imageUrlMobile?: string;
  backgroundColor?: string;
  backgroundColorAccessibility?: string;
}

export default function Newsletter({
  title,
  text,
  input,
  backgroundAcceptImage = true,
  textColor = "#ffffff",
  imageUrlDesktop = "/mocks/fsi/FourC/FourCBannerBottom.png",
  imageUrlMobile = "/mocks/fsi/FourC/FourCBannerBottom-mobile.png",
  backgroundColor = "#e7e7f4",
}: NewsletterProps) {
  const isMob = useMedia("(max-width: 500px)", false);

  const backgroundDesktop = {
    backgroundImage: `url(${imageUrlDesktop})`,
    color: textColor,
  };

  const backgroundMobile = {
    backgroundImage: `url(${imageUrlMobile})`,
    color: textColor,
  };

  const backgroundColorActive = {
    backgroundColor: backgroundColor,
    color: textColor,
  };

  return (
    <div
      style={
        !backgroundAcceptImage
          ? backgroundColorActive
          : isMob ? backgroundMobile : backgroundDesktop
      }
      className="flex flex-col items-center py-16"
    >
      <div className="max-w-[41.25rem] text-center">
        <p className="text-theme-secondary-300 font-rajdhani font-semibold text-base">
          Newsletter
        </p>
        <h3 className="tablet:pt-6 tablet:pb-4 mini:pt-9 mini:pb-4 font-radjani max-w-xl text-center text-[2rem] lg:m-auto m-5 tablet:leading-normal mini:leading-relaxed font-bold">
          {title}
        </h3>
        <p className="pb-12 font-roboto text-base leading-8 text-center tablet:max-w-full mini:max-w-[275px] m-auto">
          {text}
        </p>
        <label
          htmlFor="email-newsletter"
          className="bg-white max-h-[72px] h-[72px] flex p-3 rounded-lg items-center mx-5 lg:max-w-[488px] lg:m-auto"
        >
          <svg
            className="mr-3 w-full h-full lg:max-w-6 max-w-4"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.4213 12.7615L19.9145 9.71518C20.6135 9.24253 21.0313 8.45378 21.0313 7.61018V7.61018C21.0313 6.20419 19.8926 5.06543 18.4876 5.06543H5.64116C4.23617 5.06543 3.09741 6.20419 3.09741 7.60918V7.60918C3.09741 8.45278 3.51522 9.24153 4.21423 9.71518L8.70743 12.7615C10.7347 14.1356 13.3941 14.1356 15.4213 12.7615V12.7615Z"
              stroke="#2A2739"
              strokeWidth="1.49574"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.0824 7.60913V17.0313C3.0824 18.6836 4.42158 20.0228 6.07387 20.0228H18.0398C19.6921 20.0228 21.0313 18.6836 21.0313 17.0313V7.61013"
              stroke="#2A2739"
              strokeWidth="1.49574"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <input
            name="email-newsletter"
            placeholder={input?.placeholder}
            type="text"
            className="flex outline-none border-none w-full text-gray-500 placeholder-current font-rajdhani text-xs h-full"
          />

          <button className="rounded-lg max-w-28 bg-theme-secondary-300 flex w-full justify-center items-center h-full lg:text-base text-xs text-white">
            {input?.textButton}
          </button>
        </label>
      </div>
    </div>
  );
}
