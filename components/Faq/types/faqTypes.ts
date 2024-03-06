export interface FAQInterface {
  title: string;
  subTitle: string;
  description: string;
  button: Button;
  image_data: string;
  items: ItemsFAQ[];
}

type Button = {
  title: string;
  url: string;
  target: string;
};

type ItemsFAQ = {
  title: string;
  description: string;
};
