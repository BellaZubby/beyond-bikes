export interface TrendType {
    bgImg: string;
    title: string;
  }

export interface BicycleType {
  image: string;
  name: string;
  price: number;
}

export interface onClickType {
  onClick?():(event: React.MouseEvent<HTMLButtonElement>) => void;
}