interface SolutionsCard {
  title: string;
  description: string;
  link: string;
  linkHref: string;
}

export function SolutionsCard({
  title,
  description,
  link,
  linkHref,
}: SolutionsCard) {
  return (
    <div className="max-w-[306px] h-[359px] flex flex-col justify-between bg-solutions-card pt-[50px] p-6 ">
      <>
        <h3 className="font-rajdhani font-bold text-xl text-white pb-4">
          {title}
        </h3>

        <span className="font-roboto text-white text-xs leading-[17.64px]">
          {description}
        </span>
      </>

      <a
        className="font-roboto text-white text-xs leading-[17.64px] underline"
        href={linkHref}
      >
        {link}
      </a>
    </div>
  );
}
