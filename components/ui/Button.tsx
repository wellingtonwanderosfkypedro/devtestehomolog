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
      "text-theme-primary-300 border border-theme-primary-300 hover:bg-theme-primary-300 hover:text-skin-primary transition-all",
  },
  blue: {
    class:
      "text-theme-primary-800 border  border-theme-primary-800 hover:bg-theme-primary-800 hover:text-skin-primary transition-all",
  },
  orange: {
    class:
      "text-theme-secondary-300 border border-theme-secondary-300 hover:border-none hover:bg-theme-secondary-300 hover:text-skin-primary transition-all",
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
