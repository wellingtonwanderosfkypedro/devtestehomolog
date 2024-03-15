const NavigationButton = () => {
  return (
    <div className="flex items-center justify-center pt-[20px] gap-[20px] tablet:pt-[30px]">
      <div className="swiper-button-prev-custom cursor-pointer p-[16px] border border-solid border-orange-100 w-[50px] h-[50px] flex items-center justify-center transition-all duration-500 hover:bg-orange-300 hover:stroke-white">
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="swiper-button-prev-custom"
            d="M5 9L1 5L5 1"
            stroke="#F0680A"
            strokeOpacity="0.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="swiper-button-next-custom cursor-pointer p-[16px] border border-solid border-orange-100 w-[50px] h-[50px] flex items-center justify-center transition-all duration-500 hover:bg-orange-300 hover:stroke-white">
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="swiper-button-next-custom"
            d="M1 9L5 5L1 1"
            stroke="#F0680A"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default NavigationButton;
