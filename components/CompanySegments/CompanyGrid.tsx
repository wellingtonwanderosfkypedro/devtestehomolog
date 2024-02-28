import SecureIcon from "@/assets/images/home/segments/seguros.svg";
import AutomotivoIcon from "@/assets/images/home/segments/automotivos.svg";
import ConsumoIcon from "@/assets/images/home/segments/consumo.svg";
import TelecomIcon from "@/assets/images/home/segments/telecom.svg";
import VarejoIcon from "@/assets/images/home/segments/automotivos.svg";
import TecnologiaIcon from "@/assets/images/home/segments/tecnologia.svg";
import { CompanyIcon } from "./CompanyIcon";

const options = [
  {
    text: "Seguros",
    image: SecureIcon,
  },
  {
    text: "Automotivo",
    image: AutomotivoIcon,
  },
  {
    text: "Bens de Consumo",
    image: ConsumoIcon,
  },
  {
    text: "Telecom",
    image: TelecomIcon,
  },
  {
    text: "Varejo",
    image: VarejoIcon,
  },
  {
    text: "Tecnologia",
    image: TecnologiaIcon,
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
