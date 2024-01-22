export interface shoesSliceProps {
  id: number;
  logo?: string;
  title: string;
  subTitle: string;
  price: number[];
  description: string;
  category?: number;
  count: number;
}

export type initialStateProps = {
  item: shoesSliceProps[];
  totalPrice: number;
  cout: number;
  setHidden: boolean;
};
