export type textBlock = {
  title: string;
  subtitle: string;
  text: string;
};

export type textBlockProps = textBlock & {
  centerHeader?: boolean;
  decapitalizeHeader?: boolean;
};
