const NavigationButton = ({ name }: { name: string }) => {
  return (
    <div className="flex items-center justify-center pt-[20px] gap-[20px] max">
      <div
        className={`swiper-button-prev-custom-${name} cursor-pointer p-[16px] border border-solid border-theme-secondary-300 w-[50px] h-[50px] flex items-center justify-center transition-all duration-500 hover:bg-theme-secondary-300`}
      >
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={`swiper-button-prev-custom-${name}`}
            d="M5 9L1 5L5 1"
            stroke="#F0680A"
            strokeOpacity="0.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div
        className={`swiper-button-next-custom-${name} cursor-pointer p-[16px] border border-solid border-theme-secondary-300 w-[50px] h-[50px] flex items-center justify-center transition-all duration-500 hover:bg-theme-secondary-300`}
      >
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={`swiper-button-next-custom-${name}`}
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
