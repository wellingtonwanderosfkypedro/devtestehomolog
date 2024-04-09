const Flag = ({ flag }: { flag?: string }) => {
  if (!flag) {
    return null;
  }

  return (
    <span className="py-1 px-6 w-fit rounded-full text-white font-rajdhani bg-orange-600/20 border border-solid border-orange-600 text-2xl">
      {flag}
    </span>
  );
};

export default Flag;
