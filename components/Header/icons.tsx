export const ChooseThemeIcon = ({ color }: any) => {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <mask
        id="mask0_1089_5125"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="35"
        height="35"
      >
        <rect width="35" height="35" fill="url(#pattern0)" />
      </mask>
      <g mask="url(#mask0_1089_5125)">
        <rect width="36.4" height="37.1" fill={`${color}`} />
      </g>
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_1089_5125" transform="scale(0.00666667)" />
        </pattern>
        <image
          id="image0_1089_5125"
          width="150"
          height="150"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export const AlterFontsSizes = () => {
  return (
    <svg
      width="16"
      height="26"
      viewBox="0 0 16 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.392 11H0.592C0.453333 11 0.405333 10.9253 0.448 10.776L3.44 0.936C3.48267 0.786667 3.584 0.712 3.744 0.712H4.896C5.056 0.712 5.15733 0.786667 5.2 0.936L8.192 10.776C8.23467 10.9253 8.18667 11 8.048 11H7.232C7.11467 11 7.04 10.9253 7.008 10.776L6.256 8.44H2.384L1.632 10.776C1.58933 10.9253 1.50933 11 1.392 11ZM4.288 1.912L2.64 7.448H6L4.352 1.912H4.288ZM12.7846 11H11.9526C11.2166 11 10.6353 10.792 10.2086 10.376C9.79263 9.96 9.58463 9.37867 9.58463 8.632V5.208C9.58463 4.46133 9.79263 3.88 10.2086 3.464C10.6353 3.048 11.2166 2.84 11.9526 2.84H15.4246C15.574 2.84 15.6486 2.91467 15.6486 3.064V10.776C15.6486 10.9253 15.574 11 15.4246 11H14.7046C14.5553 11 14.4806 10.9253 14.4806 10.776V10.152H14.4166C14.15 10.7173 13.606 11 12.7846 11ZM14.4806 8.504V4.008C14.4806 3.912 14.4273 3.864 14.3206 3.864H12.0806C11.1953 3.864 10.7526 4.328 10.7526 5.256V8.584C10.7526 9.512 11.1953 9.976 12.0806 9.976H12.9926C13.4726 9.976 13.8406 9.848 14.0966 9.592C14.3526 9.336 14.4806 8.97333 14.4806 8.504Z"
        fill="white"
      />
    </svg>
  );
};

export const LoginIcon = ({ color }: any) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.7501 21.0038C17.7227 21.0038 21.7538 16.9727 21.7538 12.0001C21.7538 7.02745 17.7227 2.99634 12.7501 2.99634C7.77745 2.99634 3.74634 7.02745 3.74634 12.0001C3.74634 16.9727 7.77745 21.0038 12.7501 21.0038Z"
        stroke={`${color}`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.7519 16.0018C16.6355 15.7091 16.455 15.4462 16.2236 15.2324V15.2324C15.8338 14.8701 15.3213 14.6685 14.7891 14.6682H10.7124C10.1798 14.6686 9.66703 14.8701 9.27676 15.2324V15.2324C9.0459 15.4466 8.86549 15.7094 8.74854 16.0018"
        stroke={`${color}`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.7502 12.5004C13.9934 12.5004 15.0011 11.4926 15.0011 10.2495C15.0011 9.00631 13.9934 7.99854 12.7502 7.99854C11.507 7.99854 10.4993 9.00631 10.4993 10.2495C10.4993 11.4926 11.507 12.5004 12.7502 12.5004Z"
        stroke={`${color}`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ChevronMenu = ({ color }: any) => {
  return (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L5 5L9 1"
        stroke={`${color}`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconMenuMobile = () => {
  return (
    <svg
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="18" height="2" rx="1" fill="white" />
      <rect y="5" width="18" height="2" rx="1" fill="white" />
      <rect y="10" width="18" height="2" rx="1" fill="white" />
    </svg>
  );
};

export const ChevronSeeMore = () => {
  return (
    <svg
      width="6"
      height="10"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 9L5 5L1 1"
        stroke="#FF5C00"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
