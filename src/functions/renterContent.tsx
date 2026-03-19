import TextBlock from "../components/TextBlock/TextBlock";
import type { contentPiece } from "../types/ContentBlockTypes";
import '../components/ContentBlock/ContentBlock.css'

export const renderContent = (content: contentPiece) => {
  switch (content.type) {
    case "text":
      return (
        <TextBlock
          {...content.source}
          centerHeader={content.centerHeader}
        />
      );

    case "img":
      return <img className="content-block-section-img" src={content.source} />;

    default:
      return null;
  }
};