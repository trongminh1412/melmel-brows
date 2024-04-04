export type IconModel = {
  color?: string; // hex, english, rgb
  size?: number[]; // mang kich thuoc x,y (width, height)
  viewBox?: number[]; // mang kich thuoc x,y (width, height)
  className?: string;
  textColor?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  options?: {
    color: string;
    backgroundColor: string;
  };
  strokeWidth?: number;
  onClick?: () => void;
};
