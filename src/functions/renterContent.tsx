// Import componnents, types and styling
import TextBlock from "../components/TextBlock/TextBlock";
import InfoCard from "../components/InfoCard/InfoCard";
import ImageCarousel from "../components/ImageCarousel/ImageCarousel";
import type { contentPiece } from "../types/ContentBlockTypes";
import '../components/ContentBlock/ContentBlock.css'

// This function takes in a content piece and renders the appropriate component based on the type given
// Special rule of info cards is that mutiple get rendered together in a grid
export const renderContent = (content: contentPiece) => {
  switch (content.type) {
    case "text":
      return (
        <TextBlock
          title={content.source.title}
          subtitle={content.source.subtitle}
          text={content.source.text}
          centerHeader={content.centerHeader}
          decapitalizeHeader={content.decapitalizeHeader}
        />
      );

    case "img":
      return <img className="content-block-section-img" src={content.source}/>;

    case "infoCards":
      return (
        <div className="content-block-info-card-grid" style={{ gap: content.cardGap }}>
          {content.source.map((card, index) => (
            <InfoCard
              key={index}
              icon={card.icon}
              topBorderColor={card.topBorderColor}
              content={card.content}
              readMoreLink={card.readMoreLink}
              cardWidth={content.cardWidth}
              cardPaddingTop={content.cardPaddingTop}
            />
          ))}
        </div>
      );

    case "carousel":
      return (
        <ImageCarousel
          images={content.source}
          theme={content.styling?.theme}
          height={content.styling?.height}
          topBorderColor={content.styling?.topBorderColor}
          numVisible={content.behavior?.numVisible}
          numScroll={content.behavior?.numScroll}
          circular={content.behavior?.circular}
          autoplayInterval={content.behavior?.autoplayInterval}
        />
      );

    default:
      return null;
  }
};