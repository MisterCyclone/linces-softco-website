export type contentPieceProps = {
  left: contentPiece;
  right?: contentPiece;
  useCard?: boolean;
  topAlign?: boolean;
  noTopMargin?: boolean;
};

export type contentButton = {
  label: string;
  href: string;
};

type baseContentPiece = {
  paddingLeft?: number | string;
  paddingRight?: number | string;
  width?: number | string;
  buttons?: contentButton[];
};

export type contentPiece =
  ({ type: "text"; source: textBlock; centerHeader?: boolean } & baseContentPiece) |
  ({ type: "img"; source: string; } & baseContentPiece);

type textBlock = {
  title: string;
  subtitle: string;
  text: string;
}

export type textBlockProps = textBlock & { centerHeader?: boolean; };

