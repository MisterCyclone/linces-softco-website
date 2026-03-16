import TextBlock from "../components/TextBlock/TextBlock";
import type { contentPiece } from "../types/textBlockInterface";

export const renderContent = (content: contentPiece) => {
  switch (content.type) {
    case "text":
      return (
        <TextBlock
          {...content.source}
          centerHeader={content.centerBlock}
        />
      );

    case "img":
      return <img className="block" src={content.source} />;

    default:
      return null;
  }
};