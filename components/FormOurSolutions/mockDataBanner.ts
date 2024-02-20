export interface Banners {
  banners: BannerData[];
}

export interface BannerData {
  idPage: string;
  tag: string;
  firstNorlmalText: string;
  firstHighlightedText: string;
  secondNorlmalText: string;
  secondHighlightedText: string;
  thirdNorlmalText: string;
  bottomText: string;
}

export const bannerDatas: Banners = {
  banners: [
    {
      idPage: "prevencao-perdas",
      tag: "Prevenção de Perdas",
      firstNorlmalText: "Conte com o maior hub de",
      firstHighlightedText: "inteligência analítica",
      secondNorlmalText: "do Brasil para mitigar riscos e",
      secondHighlightedText: "prevenir perdas",
      thirdNorlmalText: "do seu negócio.",
      bottomText:
        "Reduza custos operacionais e conquiste maior previsibilidade de receita. Potencialize seus resultados com tecnologias e dados que garantem mais eficiência e melhores resultados. ",
    },
    {
      idPage: "sales-marketing",
      tag: "Marketing e Vendas",
      firstNorlmalText: "Conte com o maior hub de",
      firstHighlightedText: "inteligência analítica",
      secondNorlmalText: "do Brasil para mitigar riscos e",
      secondHighlightedText: "prevenir perdas",
      thirdNorlmalText: "do seu negócio.",
      bottomText:
        "Reduza custos operacionais e conquiste maior previsibilidade de receita. Potencialize seus resultados com tecnologias e dados que garantem mais eficiência e melhores resultados. ",
    },
    {
      idPage: "mercados-capitais",
      tag: "Mercado de Capitais",
      firstNorlmalText: "Conte com o maior hub de",
      firstHighlightedText: "inteligência analítica",
      secondNorlmalText: "do Brasil para mitigar riscos e",
      secondHighlightedText: "prevenir perdas",
      thirdNorlmalText: "do seu negócio.",
      bottomText:
        "Reduza custos operacionais e conquiste maior previsibilidade de receita. Potencialize seus resultados com tecnologias e dados que garantem mais eficiência e melhores resultados. ",
    },
  ],
};
