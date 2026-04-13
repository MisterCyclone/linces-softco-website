# Linces Softco Limited - Website Documentation

## Created by Alfie Skinner (MisterCyclone)
- Contact Email: alfieskinner@mistercyclone.co.uk
- GitHub: https://github.com/MisterCyclone

## Overview

This repository is the codebase for the offical Linces Softce Limited website.
- It is built on a system of reusable components.
- Text content is sourced from JSON files by page in the `siteContent` folder
- Image content in the `assets` folder. 

This allows for a plug and play style for creating or editing pages and content.


## Tools & Utility Documentation
- [Node.js](https://nodejs.org/en) - Cross-platform Javascript runtime environment. 
- [Vite](https://vite.dev/) - Node.js build tool and bundler.
- [React](https://react.dev/) - Frontend/Client website & app framework
- [PrimeReact](https://primereact.org/) - GUI, UI and UI Builder. (Structure)
- [TypeScript](https://www.typescriptlang.org/) - Programming Language (Functionality)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Stylesheet language. (Visuals)

## Project Structure

```text
linces-softco-website/
|-- src/
|   |-- assets/
|   |   |-- global/
|   |   `-- pages/
|   |       |-- aboutus_page/
|   |       |-- contact_page/
|   |       |-- home_page/
|   |       |-- services_page/
|   |       |-- shared/
|   |       `-- velocity_page/
|   |-- components/
|   |   |-- Banner/
|   |   |-- ContactForm/
|   |   |-- ContentBlock/
|   |   |-- Footer/
|   |   |-- Header/
|   |   |-- ImageCarousel/
|   |   |-- InfoCard/
|   |   `-- TextBlock/
|   |-- functions/
|   |-- pages/
|   |-- sitecontent/
|   `-- types/
```

## Installation & Setup

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- You must have [Node.js](https://nodejs.org/en/) (version 24.10.1 or later) installed.
- You must have the [Repository](https://github.com/MisterCyclone/linces-softco-website) cloned.

### Install dependencies

This command installs all the necessary packages defined in `package.json`.
```bash
npm install
```

### Running the Dev Build
To run a live dev build run the command below. The dashboard will be accessible at `http://localhost:5173` by default.
```bash
npm run dev
```
<br/>

# Components Guide

## ContentBlock

ContentBlocks are the main building blocks of displaying site content. They primarily take in two components of and render them side by side. 

The components it takes in referred to as contentPieces for this project. Below are the different types of components that ContentBlock takes in.

### contentPiece Types:
| `type` value | Required fields | Type specific optional fields | Description |
| --- | --- | --- | --- |
| `text` | `source` | `centerHeader`, `decapitalizeHeader` | Renders a `TextBlock` with title, subtitle, and body text. |
| `img` | `source` | none | Renders an image using the provided source path. |
| `infoCards` | `source` | `cardWidth`, `cardPaddingTop`, `cardGap` | Renders a grid of `InfoCard` components. |
| `carousel` | `source` | `styling`, `behavior` | Renders an `ImageCarousel` component. |

### Example for text and images
```tsx
<ContentBlock
	left={{
		type: 'text',
		source: funnyBrotherIntroduction,
		useCard: true,
		buttons: [{ label: 'Contact the Funny Brothers', href: '/contact#contact-form', state: openContactFormState }],
	}}
	right={{ type: 'img', source: funnyBrothersImage, paddingLeft: '3vw', paddingRight: '3vw' }}
/>
```

### Example for infocards
Usually Infocards are used on their own with no other component with them.

```tsx
<ContentBlock
	left={{
		type: 'infoCards',
		source: [
			{
				topBorderColor: '#56C1C1',
				content: englandTextContent
				readMoreLink: { text: 'Learn More >>>', link: '/countries#england' }
			},
			{
				topBorderColor: '#F4A259',
				content: franceTextContent
				readMoreLink: { text: 'Learn More >>>', link: '/smellycountries#france' },
			},
		],
		cardWidth: '18vw',
		cardGap: '2vw',
	}}
/>
```

### Example for image carousels
Usually Image Carousels are used on their own with no other component with them.

```tsx
<ContentBlock
	left={{
		type: 'carousel',
		source: [
			{ src: casinoMemoriesOne, alt: 'Cheating the dealer at blackjack' },
			{ src: casinoMemoriesTwo, alt: 'Eating casino chips at roulette when no one is looking' },
			{ src: casinoMemoriesThree, alt: 'Getting kicked out and beaten up.' },
		],
		styling: {
			theme: 'teal',
			height: '40vh',
			topBorderColor: '#56C1C1',
		},
		behavior: {
			numVisible: 1,
			numScroll: 1,
			circular: true,
			autoplayInterval: 5000,
		},
	}}
/>
```

### Props:
These are props that can be manipulated to style individual content blocks.

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `left` | `contentPiece` | Yes | Main content block shown on the left side, or the only block when `right` is omitted. |
| `right` | `contentPiece` | No | Optional second content block shown on the right side. |
| `useCard` | `boolean` | No | Wraps the overall content area in a card. |
| `topAlign` | `boolean` | No | Aligns content to the top instead of centering it vertically. |
| `topMargin` | `number \| string` | No | Sets the top padding for the content wrapper. Defaults to `10vh`. |
| `bottomMargin` | `number \| string` | No | Sets the bottom padding for the content wrapper. Defaults to `0`. |
| `backgroundColor` | `string` | No | Sets the outer wrapper background color. |
| `topSeperatorLine` | `boolean` | No | Adds a top border line to the content area. |
| `bottomSeperatorLine` | `boolean` | No | Adds a bottom border line to the content area. |
| `miniBottomSeperatorLine` | `boolean` | No | Adds a smaller divider below the block. |


### contentPieceProps:
These are props that can be manipulated to style specific sides of a contentblock.

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `paddingLeft` | `number \| string` | No | Left padding applied to the content section. |
| `paddingRight` | `number \| string` | No | Right padding applied to the content section. |
| `width` | `number \| string` | No | Width applied to the content section. |
| `buttonWidth` | `number \| string` | No | Default width for buttons inside the block. |
| `buttonMarginTop` | `number \| string` | No | Top margin applied above the button row. |
| `buttons` | `contentButton[]` | No | Optional list of action buttons rendered below the content. |
| `useCard` | `boolean` | No | Wraps the specific piece in a PrimeReact `Card`. |

### contentButton:
These are props that go into styling and setting up buttons inside of content pieces.

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `string` | Yes | Button text shown to the user. |
| `href` | `string` | Yes | Navigation target passed to the `navigateToPath` function. |
| `theme` | `'teal' \| 'purple'` | No | Styling theme applied through the button class name. |
| `width` | `number \| string` | No | Overrides the button width. |
| `state` | `unknown` | No | Optional router state passed through navigation. |


### Shared Navigation:

Most buttons and links use the `navigateToPath` function in `src/functions/navigateToPath.ts`.

It handles:

- Page navigation
- Hash scrolling for navigating to specifc sub-sections
- Handling optional router states, mostly logic for the contact form so it can be called from other pages

When you need a button to open the contact form, use the contact route plus the specific router state:

```tsx
import { openContactFormState } from '../sitecontent/ContactFormContent';

{
	label: 'Book a Demo',
	href: '/contact#contact-form',
	state: openContactFormState,
}
```


## Banner

Used for the wide header image at the top of each page.

```tsx
import Banner from '../components/Banner/Banner';

<Banner image={homeBanner} />
```

### Props:

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `image` | `string` | Yes | Image path or URL shown in the banner. |



## TextBlock

Used internally by `ContentBlock` and `InfoCard` to render title, subtitle, and body text.

```tsx
<TextBlock
	title="Section Title"
	subtitle="Section Subtitle"
	text="Section Text goes here."
	centerHeader={true}
	decapitalizeHeader={false}
/>
```

### Props:

Text content for the site only stores titles, subtitles and text. the optional props are handled when chosing to display text as a content piece in a content block.

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `title` | `string` | Yes | Title shown in the text block. |
| `subtitle` | `string` | Yes | Subtitle shown in the text block. |
| `text` | `string` | Yes | Paragraph text shown in the text block. |
| `centerHeader` | `boolean` | No | Centers the heading content when enabled. |
| `decapitalizeHeader` | `boolean` | No | Stops the heading from being forced to uppercase. |

## InfoCard

On its own it's a card that displays information in a neat format. This makes it useful for displaying mutiple relating pieces of information in a neat manner and so contentblocks take arrays of them and renders them together.

```tsx
<InfoCard
	topBorderColor="#56C1C1"
	content={cardContent}
	icon={iconPath}
	readMoreLink={{ text: 'Read More >>>', link: '/services#itsupport' }}
/>
```

### Props:

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `topBorderColor` | `string` | Yes | Color used for the top border of the card. |
| `readMoreLink` | `readMoreLinkProps` | No | Optional read-more link data passed to `InfoCard`. |
| `content` | `textBlockProps` | Yes | Text content rendered inside the card. |
| `icon` | `string` | No | Optional icon image used by the card. |
| `cardWidth` | `string \| number` | No | Width of the card. |
| `cardPaddingTop` | `string \| number` | No | Padding at the top of the card. |

## ImageCarousel

Used for swipeable or auto-playing image strips.

```tsx
<ImageCarousel
	images={slides}
	theme="purple"
	height="40vh"
	numVisible={3}
	numScroll={1}
	circular={true}
	autoplayInterval={5000}
/>
```

### Props:

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `images` | `carouselImage[]` | Yes | Slide data for the carousel. |
| `theme` | `'teal' \| 'purple'` | No | Controls the card theme class. Defaults to `teal`. |
| `topBorderColor` | `string` | No | Overrides the top border color. |
| `height` | `string \| number` | No | Controls the carousel height. Defaults to `40vh`. |
| `numVisible` | `number` | No | Number of items visible at once. Defaults to `1`. |
| `numScroll` | `number` | No | Number of items moved per scroll. Defaults to `1`. |
| `circular` | `boolean` | No | Enables circular scrolling. Defaults to `true`. |
| `autoplayInterval` | `number` | No | Enables autoplay when set. |

## ContactForm

The contact form is controlled by the contact page route state. It's closed by default and is opened when a button that has the correct navigation configuration pointing to it.

```tsx
<ContactForm onClose={() => navigate('/contact', { replace: true, state: null })} />
```

### Props:

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `onClose` | `() => void` | Yes | Called when the Close Form button is clicked. |

To open the form from another page, navigate to `/contact#contact-form` and pass `openContactFormState` from `src/sitecontent/ContactFormContent.ts`.

### Contact Form Routing

The contact form opens when the user navigates to `/contact#contact-form` with router state `{ openForm: true }`.

Use this pattern when creating a button that should open the form:

```tsx
import { openContactFormState } from '../sitecontent/ContactFormContent';

{
	label: 'Book a Demo',
	href: '/contact#contact-form',
	state: openContactFormState,
}
```

The form closes by clearing the router state and returning to `/contact`.

## Header and Footer

These components do not take page-specific props.

- `Header` reads its navigation items from `src/sitecontent/HeaderMenuContent.ts`.
- `Footer` reads its content from `src/sitecontent/FooterContent.ts`.

To add, remove, or rename items, update the appropiate sitecontent file instead of editing the component directly.

## Text Content Files

Text content is stored in the site content folder with JSON files per page.

- `src/sitecontent/homepage.json`
- `src/sitecontent/aboutuspage.json`
- `src/sitecontent/servicespage.json`
- `src/sitecontent/velocitypage.json`
- `src/sitecontent/contactpage.json`
- `src/sitecontent/FooterContent.ts`
- `src/sitecontent/HeaderMenuContent.ts`
- `src/sitecontent/ContactFormContent.ts`

If you are changing text, labels, links, or contact details, update these files first.

## Image Content Files

Image content is stored in the assets folders and grouped through image export files.

- `src/assets/pages/home_page/homeImages.ts`
- `src/assets/pages/aboutus_page/aboutImages.ts`
- `src/assets/pages/services_page/servicesImages.ts`
- `src/assets/pages/velocity_page/velocityImages.ts`
- `src/assets/pages/contact_page/contactImages.ts`
- `src/assets/pages/shared/sharedImages.ts`
- `src/assets/global/globalImages.ts`

If you are changing image paths, adding new images, or replacing existing images, update these files first.


