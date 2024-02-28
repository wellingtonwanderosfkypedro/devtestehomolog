import Link from "next/link";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ComponentProps<typeof Link> {
  text: string;
  children?: React.ReactNode;
  variant: "purple" | "blue" | "orange";
}

const options = {
  purple: {
    class:
      "text-blue-300 border border-blue-300 hover:bg-blue-300 hover:text-white transition-all",
  },
  blue: {
    class:
      "text-blue-800 border  border-blue-800 hover:bg-blue-800 hover:text-white transition-all",
  },
  orange: {
    class:
      "text-orange-300 border border-orange-300 hover:border-none hover:bg-orange-300 hover:text-white transition-all",
  },
};

export const Button = ({
  children,
  text,
  variant,
  className,
  ...props
}: ButtonProps) => {
  return (
    <Link
      {...props}
      className={twMerge(
        `lg:h-14 h-10 lg:text-base text-xs font-semibold font-rajdhani flex items-center justify-center ${options[variant].class}  leading-6 w-full`,
        className
      )}
    >
      {text}
      {children}
    </Link>
  );
};
