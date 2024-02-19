export interface TrendType {
  bgImg: string;
  title: string;
}

export interface BicycleType {
  image: string;
  name: string;
  price: number;
  carousel?: JSX.Element;
  tag?: JSX.Element;
  saleTag?: JSX.Element
}

export interface onClickType {
  onClick?(): (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface heroslideType {
  bgImg: string;
}
export interface productCarouselType {
  bgColor: string;
}
export interface sponsorLogoType {
  logo: string;
}
export interface deliveryType {
  icon: string;
  title: string;
  subtitle: string
}