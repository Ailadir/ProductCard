# ProductCard

A minimal React + TypeScript project built with Vite, featuring a customizable `ProductCard` component using Material UI. The `ProductCard` displays product information such as title, origin country, price (with currency formatting), and an image.

## Features

- ⚡️ Fast development with Vite
- 🛠️ Written in TypeScript
- 🎨 Uses Material UI for modern UI components
- 💱 Supports price formatting for multiple currencies (RUB, USD, EUR)
- 🧩 Easily reusable and customizable `ProductCard` component

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- Yarn or npm

### Installation

```bash
git clone <your-repo-url>
cd ProductCard
yarn install
# or
npm install
```

### Development

Start the development server:

```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

### Build

To build for production:

```bash
yarn build
# or
npm run build
```

### Lint

To run ESLint:

```bash
yarn lint
# or
npm run lint
```

## Usage

The main feature of this project is the `ProductCard` component, which can be used as follows:

```tsx
import ProductCard from './Components/ProductCard/ProductCard';
import pizza from '../public/pizza.png';

<ProductCard
  title="Margarita"
  originCountry="Russia"
  price={34900} // price in minor units (e.g., kopecks, cents)
  image={pizza}
/>
```

#### Props

- `title` (string): Name of the product
- `originCountry` (string): Country of origin
- `price` (number): Price in minor units (e.g., cents, kopecks)
- `currencyType` (optional, 'RUB' | 'USD' | 'EUR'): Currency for price formatting (default: 'RUB')
- `image` (string): Image URL or import

## File Structure

```
src/
  Components/
    ProductCard/
      ProductCard.tsx
      helpers/
        getLocale.ts
  App.tsx
  main.tsx
  ...
public/
  pizza.png
```

## License

MIT