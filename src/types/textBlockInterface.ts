export type contentPieceProps = {
  left: contentPiece;
  right: contentPiece;
  useCard?: boolean;
  topAlign?: boolean;
};

export type contentPiece =
  { type: "text"; source: textBlock; centerBlock?: boolean} |
  { type: "img"; source: string };

export type textBlock = {
  title: string;
  subtitle: string;
  text: string;
}

export type textBlockProps = textBlock & { centerHeader?: boolean; };

