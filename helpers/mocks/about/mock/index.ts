import { BannerProps } from "@/components/Banner/types/BannerProps";
import { SliderImagesNeowwayTypes } from "@/components/BigImages/types/sliderImagesNeoway";
import { MoveUsTypes } from "@/components/MovesUs/types/moveUsTypes";
import { TrustedNeowayTypes } from "@/components/MultipleSolutions/types/ISolutions";
import { NewsLetterTypes } from "@/components/Newsletter/types/newsletterTypes";
import { OurValuesType } from "@/components/OurValues/types/CustomerExperienceTypes";
import { RecognitionTypes } from "@/components/Recognition/types/recognitionTypes";
import { TeamCarrouselType } from "@/components/TeamCarrousel/types/teamCarrouselTypes";
import { url } from "inspector";

export const banner: BannerProps = {
  title:
    "## Usamos <span class='text-theme-secondary-300'>Data Analytics e Inteligência Artificial</span> para resolver problemas reais",
  description:
    "Utilizando tecnologias avançadas como Data Analytics e Inteligência Artificial, nossa abordagem inovadora busca solucionar desafios do mundo real.",
  image_desktop: {
    height: 760,
    url: "/32b19fc2bff2810ec374b21bf056cfd1.png",
  },
  image_mobile: {
    height: 420,
    url: "https://blog.neoway.com.br/wp-content/uploads/2024/02/banner-principal-form-mobile.png",
  },
  tag: "Conheça a Neoway",
  englishTag: "",
  englishTitle: "",
  englishDescription: "",
  onlyMobileButton: true,
  buttonFaleConosco: {
    title: "Fale conosco",
    url: "#",
  },
  englishButtonFaleConosco: {
    title: "Fale conosco",
    url: "#",
  },

  buttonSonhecaSolucoes: {
    title: "Conheça nossas soluções",
    url: "#",
  },
  englishButtonSonhecaSolucoes: {
    title: "Conheça nossas soluções",
    url: "#",
  },
};

export const moveUsMock: MoveUsTypes = {
  tag: "O QUE NOS MOVE",
  englishTag: "",
  title:
    "O nosso propósito é usar a inovação que levamos para cerca de 20 setores de negócios para impactar no desenvolvimento do país",
  englishTitle: "",
  ourHistoryTitle: "Nossa história",
  ourHistoryTitleEnglish: "",
  ourHistoryText:
    "A Neoway é a maior empresa da América Latina de Data Analytics e Inteligência Artificial para negócios. Fundada em 2002 em Florianópolis, lançou a sua plataforma SaaS em 2012, e, hoje, está presente em todo o Brasil. A Plataforma Neoway oferece soluções inteligentes que transformam informação em conhecimento e geram produtividade e precisão para as estratégias de marketing, compliance, prevenção contra perdas, entre outros. <br><br> As tecnologias da empresa atendem mais de 20 setores de negócios como financeiro, automotivo, bens de consumo, cobrança e recuperação, saúde, óleo e gás, entre outros.<br><br> Com cerca de 500 colaboradores, a Neoway tem como compromisso oferecer um ambiente psicologicamente seguro para todo o time, tendo sido reconhecida nacionalmente pela qualidade das suas relações pela pesquisa “Humanizadas” e certificada por cinco anos consecutivos como um bom lugar para se trabalhar pelo Great Place To Work (GPTW).<br><br> Ao longo da sua história, a empresa recebeu investimentos de alguns dos principais fundos do mundo, como Accel Partners, Monashees, Temasek, PointBreak, Pollux, e Endeavor Catalyst. E,em 2021, a Neoway passou a ser uma empresa B3, após ser adquirida pela bolsa do Brasil.",
  ourHistoryTextEnglish: "",
  image: {
    url: "/bf30207d77c1c196d5b5c3370876267c.png",
    alt: "Pessoas em uma sala laranja comentando sobre codigo",
  },
};

export const recognitionMocks: RecognitionTypes = {
  title: "Reconhecimento",
  englishTitle: "",
  //alt: "sala escura de tarde",

  text: "Desenvolvemos projetos em conformidade comum conjunto de regras legais, para garantirsegurança ao seu negócio. A Neoway é certificadapelo ISO 37001 (Sistema de Gestão Antissuborno),ISO 27001 (Segurança da Informação), ISO 27017e 27018 (Segurança para Serviços em Nuvem).<br><br>Desenvolvemos projetos em conformidade comum conjunto de regras legais, para garantirsegurança ao seu negócio. A Neoway é certificadapelo ISO 37001 (Sistema de Gestão Antissuborno),ISO 27001 (Segurança da Informação), ISO 27017e 27018 (Segurança para Serviços em Nuvem).",
  englishText: "",
  button: {
    title: "",
    url: "",
  },
  englishButton: {
    title: "",
    url: "",
  },
  image: {
    url: "/bussines.png",
  },
  certifications: [
    {
      text: "Extensão da ISO 27001, a certificação ISO 27701 é um padrão internacional, que visa atender regulações como LGPD e GDPR, e dá maior ênfase na proteção de dados do sistema de gestão de segurança da informação",
      englishText: "",

      icon: {
        url: "/ISO.png",
        width: 80,
        height: 110,
      },
    },
    {
      text: "Extensão da ISO 27001, a certificação ISO 27701 é um padrão internacional, que visa atender regulações como LGPD e GDPR, e dá maior ênfase na proteção de dados do sistema de gestão de segurança da informação",
      englishText: "",

      icon: {
        url: "/ISO.png",
        width: 80,
        height: 110,
      },
    },
    {
      text: "Extensão da ISO 27001, a certificação ISO 27701 é um padrão internacional, que visa atender regulações como LGPD e GDPR, e dá maior ênfase na proteção de dados do sistema de gestão de segurança da informação",
      englishText: "",

      icon: {
        url: "/ISO.png",
        width: 80,
        height: 110,
      },
    },
    {
      text: "Extensão da ISO 27001, a certificação ISO 27701 é um padrão internacional, que visa atender regulações como LGPD e GDPR, e dá maior ênfase na proteção de dados do sistema de gestão de segurança da informação",
      englishText: "",
      icon: {
        url: "/ISO.png",
        width: 80,
        height: 110,
      },
    },
  ],
};

export const ourValues: OurValuesType = {
  title: "Valores",
  englishTitle: "",

  items: [
    {
      title: "Jeito de empreendedor",
      englishTitle: "",
      text: "O jeito de empreendedor envolve resiliência, criatividade e a busca constante por oportunidades inovadoras.",
      englishText: "",
      icon: {
        url: "/bag.svg",
        width: 40,
        height: 40,
      },
    },
    {
      title: "Determinação e paixão",
      englishTitle: "",

      text: "Com determinação e paixão, superamos obstáculos e transformamos desafios em oportunidades de crescimento e sucesso.",
      englishText: "",

      icon: {
        url: "/target.svg",
        width: 40,
        height: 40,
      },
    },
    {
      title: "Criação do futuro",
      englishTitle: "",

      text: "A criação do futuro está nas mãos da inovação, da visão audaciosa e da perseverança em moldar um amanhã inspirador.",
      englishText: "",

      icon: {
        url: "/mind.svg",
        width: 40,
        height: 40,
      },
    },
    {
      title: "Respeitopelas pessoas",
      englishTitle: "",

      text: "O respeito pelas pessoas é a base de relações saudáveis, promovendo um ambiente de colaboração e crescimento mútuo.",
      englishText: "",

      icon: {
        url: "/connect.svg",
        width: 40,
        height: 40,
      },
    },
  ],
  // slidesView: 3.3,
};

export const teamCarrousel: TeamCarrouselType = {
  tag: "O TIME",
  englishTag: "",
  title: "Nosso time de gestão",
  englishTitle: "",
  subtitle:
    "Nosso time de gestão é guiado pela liderança estratégica, comprometimento e expertise, impulsionando o sucesso coletivo da organização.",
  englishSubtitle: "",
  time: [
    {
      image: {
        url: "/person1.png",
        alt: "person1",
        width: 384,
        height: 386,
      },
      name: "Fernanda Baggio",
      position: "CMO",
    },
    {
      image: {
        url: "/person1.png",
        alt: "person1",
        width: 384,
        height: 386,
      },
      name: "Fernanda Baggio",
      position: "CMO",
    },
    {
      image: {
        url: "/person1.png",
        alt: "person1",
        width: 384,
        height: 386,
      },
      name: "Fernanda Baggio",
      position: "CMO",
    },
    {
      image: {
        url: "/person1.png",
        alt: "person1",
        width: 384,
        height: 386,
      },
      name: "Fernanda Baggio",
      position: "CMO",
    },
  ],
};

export const bigImages: SliderImagesNeowwayTypes = {
  images: [
    {
      url: "/big-image-1.png",
      alt: "big-image1",
      width: 600,
      height: 410,
    },
    {
      url: "/big-image-2.png",
      alt: "big-image2",
      width: 600,
      height: 410,
    },
    {
      url: "/big-image-3.png",
      alt: "big-image3",
      width: 600,
      height: 410,
    },
  ],
};

export const multipleSolutions: TrustedNeowayTypes = {
  title: "Instituições que confiam na Neoway",
  englishTitle: "",
  button: { title: "Fale com um especialista", url: "/" },
  englishButton: {
    title: "",
    url: "",
  },
  sliderEmpresas: [
    {
      url: "/5e1b61c32869ab0871345da360b9e43f.png",
      height: 54,
      width: 120,
    },
    {
      url: "/d3581d0c66d430ea30b23c80a7e17e3d.png",
      height: 48,
      width: 133,
    },

    { url: "/a35fe21bc14770237459232b8f0bed10.png", height: 51, width: 176 },

    {
      url: "/771da52d9fe2e7b7f9ee3a7154f11cfb.png",
      height: 38,
      width: 141,
    },

    {
      url: "/6c0c7c2be3a99573270624d3a46f9fa4.png",
      height: 50,
      width: 175,
    },

    {
      url: "/3ca66b4a0e2cad1d87979cf06fb7382c.png",
      height: 51,
      width: 169,
    },

    {
      url: "/5e1b61c32869ab0871345da360b9e43f.png",
      height: 54,
      width: 120,
    },

    {
      url: "/d3581d0c66d430ea30b23c80a7e17e3d.png",
      height: 48,
      width: 133,
    },

    {
      url: "/a35fe21bc14770237459232b8f0bed10.png",
      height: 51,
      width: 176,
    },
    {
      url: "/771da52d9fe2e7b7f9ee3a7154f11cfb.png",
      height: 38,
      width: 141,
    },

    {
      url: "/6c0c7c2be3a99573270624d3a46f9fa4.png",
      height: 50,
      width: 175,
    },

    {
      url: "/3ca66b4a0e2cad1d87979cf06fb7382c.png",
      height: 51,
      width: 169,
    },
  ],
};

export const newsletter: NewsLetterTypes = {
  tag: "Newsletter",
  title: "Atualize seus conhecimentos, otimize suas decisões",
  englishTitle: "",
  subtitle:
    "Receba conteúdos exclusivos da Neoway sobre inovação, tecnologia e negócios. Fique por dentro dos principais eventos e oportunidades de networking.",
  englishSubtitle: "",
  placeholderInput: "Insira seu e-mail",
  englishPlaceholderInput: "",
  textButton: "Cadastrar",
  englishTextButton: "",
};
