import SecureIcon from "@/assets/images/home/segments/seguros.svg";
import { CompanyIcon } from "./CompanyIcon";

const options = [
  {
    text: "Seguros",
    image: SecureIcon,
  },
  {
    text: "Automotivo",
    image: SecureIcon,
  },
  {
    text: "Bens de Consumo",
    image: SecureIcon,
  },
  {
    text: "Telecom",
    image: SecureIcon,
  },
  {
    text: "Varejo",
    image: SecureIcon,
  },
  {
    text: "Tecnologia",
    image: SecureIcon,
  },
];

export const CompanyGrid = () => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-2 gap-5">
      {options.map((option) => {
        return (
          <div key={option.text}>
            <CompanyIcon image={option.image} text={option.text} />
          </div>
        );
      })}
    </div>
  );
};
