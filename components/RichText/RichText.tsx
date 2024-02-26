import { marked } from "marked";

type RichtextProps = {
  text: string;
  colorText?: string;
};

const Richtext = ({ text, colorText, ...props }: RichtextProps) => {
  return (
    <div
      className="richText"
      {...props}
      style={{ color: colorText ?? "#000" }}
      dangerouslySetInnerHTML={{ __html: marked.parse(text) }}
    />
  );
};

export default Richtext;
