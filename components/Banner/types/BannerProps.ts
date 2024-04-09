export interface BannerProps {
  title: string;
  description: string;
  flag?: string;
  buttons?: BannerButton[];
  image_desktop: BannerImage;
  image_mobile: BannerImage;
  onlyMobileButton?: boolean
}

export interface BannerButton {
  text: string;
  url?: string;
  transparent?: boolean;
}

export interface BannerImage {
  url: string;
  height: string;
}
