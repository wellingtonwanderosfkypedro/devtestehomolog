import { BannerProps } from "@/components/Banner/types/BannerProps";

export const fsiMockBanner: BannerProps = {
  title: "## Como <span class='text-orange-300'>solucionamos</span> o desafio das instituições financeiras",
  flag: "FSI",
  buttons: [
    {
      text: "Fale conosco",
      url: "/"
    },
    {
      text: "Conheça nossas soluções",
      transparent: true,
      url: "/"
    }
  ],
  description:
    "Com **inteligência de dados** e **Data Analytics**, levamos o poder para tomadas de decisão ao mercado financeiro. Ajudamos sua empresa a alcançar resultados consistentes em todas as etapas da jornada do cliente, gerando ganhos significativos para o seu negócio.",
  image_desktop: {
    height: "700",
    url: "/mocks/fsi/banner/mock-fsi-desktop.jpg",
  },
  image_mobile: {
    height: "563",
    url: "/mocks/fsi/banner/mock-fsi-desktop.jpg",
  },
};
