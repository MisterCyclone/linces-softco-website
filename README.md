# Linces Softco Limited Website Documentation
## Created by Alfie Skinner (MisterCyclone)

## Overview

The site is built from a small set of reusable components and matching `sitecontent` files. Most pages follow the same pattern:

1. page data is stored in `src/sitecontent/*.ts` or `src/sitecontent/*.json`
2. the page component imports that content
3. reusable components render the content with shared styling and navigation behavior

# Component Guide

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

## ContentBlock

This is the main page layout component. It renders one or two contentPieces side-by-side, optionally in a card wrapper.

```tsx
<ContentBlock
	left={{
		type: 'text',
		source: heroSection,
		useCard: true,
		buttons: [{ label: 'Book a Demo', href: '/contact#contact-form', state: openContactFormState }],
	}}
	right={{ type: 'img', source: heroImage, paddingLeft: '3vw', paddingRight: '3vw' }}
/>
```

### Props:

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `left` | `contentPiece` | Yes | Main content block shown on the left side, or the only block when `right` is omitted. |
| `right` | `contentPiece` | No | Optional second content block shown on the right side. |
| `useCard` | `boolean` | No | Wraps the overall content area in a card. |
| `topAlign` | `boolean` | No | Aligns content to the top instead of centering it vertically. |
| `topMargin` | `number \| string` | No | Sets the top padding for the content wrapper. Defaults to `10vh`. |
| `bottomMargin` | `number \| string` | No | Sets the bottom padding for the content wrapper. Defaults to `0`. |
| `backgroundColor` | `string` | No | Sets the outer wrapper background color. |
| `topSeperatorLine` | `boolean` | No | Adds a top border line to the content area. Spelling is preserved from the code. |
| `bottomSeperatorLine` | `boolean` | No | Adds a bottom border line to the content area. Spelling is preserved from the code. |
| `miniBottomSeperatorLine` | `boolean` | No | Adds a smaller divider below the block. Spelling is preserved from the code. |

### contentPiece Types:
| `type` value | Required fields | Variant-specific optional fields | Description |
| --- | --- | --- | --- |
| `text` | `source` | `centerHeader`, `decapitalizeHeader` | Renders a `TextBlock` with title, subtitle, and body text. |
| `img` | `source` | none | Renders an image using the provided source path. |
| `infoCards` | `source` | `cardWidth`, `cardPaddingTop`, `cardGap` | Renders a grid of `InfoCard` components. |
| `carousel` | `source` | `styling`, `behavior` | Renders an `ImageCarousel` component. |

### Shared Layout Fields:

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

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `string` | Yes | Button text shown to the user. |
| `href` | `string` | Yes | Navigation target passed to `navigateToPath`. |
| `theme` | `'teal' \| 'purple'` | No | Styling theme applied through the button class name. |
| `width` | `number \| string` | No | Overrides the button width. |
| `state` | `unknown` | No | Optional router state passed through navigation. |


### Shared Navigation:

Most buttons and links use the shared `navigateToPath` helper in `src/functions/navigateToPath.ts`.

It handles:

- page navigation
- hash scrolling
- optional router state

When you need a button to open the contact form, use the contact route plus the shared router state:

```tsx
import { openContactFormState } from '../sitecontent/ContactFormContent';

{
	label: 'Book a Demo',
	href: '/contact#contact-form',
	state: openContactFormState,
}
```

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

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `title` | `string` | Yes | Title shown in the text block. |
| `subtitle` | `string` | Yes | Subtitle shown in the text block. |
| `text` | `string` | Yes | Paragraph text shown in the text block. |
| `centerHeader` | `boolean` | No | Centers the heading content when enabled. |
| `decapitalizeHeader` | `boolean` | No | Stops the heading from being forced to uppercase. |

## InfoCard

Used for the card grids on the home and velocity pages.

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

The contact form is controlled by the contact page route state.

```tsx
<ContactForm onClose={() => navigate('/contact', { replace: true, state: null })} />
```

### Props:

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `onClose` | `() => void` | Yes | Called when the Close Form button is clicked. |

To open the form from another page, navigate to `/contact#contact-form` and pass `openContactFormState` from `src/sitecontent/ContactFormContent.ts`.

## Header and Footer

These components do not take page-specific props.

- `Header` reads its navigation items from `src/sitecontent/HeaderMenuContent.ts`.
- `Footer` reads its content from `src/sitecontent/FooterContent.ts`.

To add, remove, or rename items, update the corresponding sitecontent file instead of editing the component directly.

## Site Content Files

The site separates layout from content. Common content files include:

- `src/sitecontent/homepage.json`
- `src/sitecontent/aboutuspage.json`
- `src/sitecontent/servicespage.json`
- `src/sitecontent/velocitypage.json`
- `src/sitecontent/contactpage.json`
- `src/sitecontent/FooterContent.ts`
- `src/sitecontent/HeaderMenuContent.ts`
- `src/sitecontent/ContactFormContent.ts`

If you are changing text, labels, links, or contact details, update these files first.

## Contact Form Routing

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

