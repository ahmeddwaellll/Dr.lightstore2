# Clash Royale Store

A modern, dark-themed marketplace for Clash Royale accounts and boosting services built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎮 **Account Marketplace** - Browse and purchase verified Clash Royale accounts
- 📈 **Boost Calculator** - Real-time pricing for trophy and league boosts with interactive charts
- 🃏 **Deck Builder** - Build custom 8-card decks with level and evolution selection
- 🛒 **Shopping Cart** - Persistent cart state with checkout flow
- 💳 **Payment Integration** - Stripe checkout ready (configuration required)
- 📊 **Admin Dashboard** - Order management and analytics
- 🎨 **Modern Design** - Glass-morphism UI with purple theme and smooth animations
- 📱 **Mobile First** - Fully responsive design optimized for all devices

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Glass-morphism design
- **State Management**: Zustand
- **Animations**: Framer Motion
- **Charts**: Chart.js
- **Payments**: Stripe
- **Database**: Supabase (Postgres)
- **Images**: Cloudinary
- **Deployment**: Vercel

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd clash-royale-store
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Fill in your environment variables in `.env.local`

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Environment Variables

### Required

- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Stripe publishable key
- `STRIPE_SECRET_KEY` - Stripe secret key
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anon key

### Optional

- `CLOUDINARY_CLOUD_NAME` - Cloudinary cloud name for card images
- `NEXT_PUBLIC_APP_URL` - Your app URL for webhooks

## Project Structure

```
clash-royale-store/
├── app/
│   ├── admin/          # Admin dashboard
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Main app page
├── components/
│   ├── Navigation.tsx  # Glass-morphic sticky nav
│   ├── Hero.tsx        # 3D hero section
│   ├── Marketplace.tsx # Account grid with filters
│   ├── BoostCalculator.tsx # Interactive calculator
│   ├── DeckBuilder.tsx # Card selection system
│   ├── CheckoutDrawer.tsx # Shopping cart
│   └── Footer.tsx      # Simple footer
├── lib/
│   ├── constants.ts    # App constants & types
│   ├── store.ts        # Zustand state management
│   ├── utils.ts        # Utility functions
│   └── mockData.ts     # Mock accounts & cards
├── public/             # Static assets
├── package.json        # Dependencies
├── README.md           # Documentation
└── vercel.json         # Deployment config
```

## Features Overview

### Account Marketplace
- Grid display of available accounts
- Advanced filtering (arena, trophies, champions, etc.)
- Detailed account modal with stats
- Instant "Buy Now" functionality

### Boost Calculator
- Trophy boost calculator (0-15,000 trophies)
- League boost calculator (7 leagues)
- Real-time price calculation with Chart.js visualization
- Express delivery option (+30%)

### Deck Builder
- 100+ Clash Royale cards with evolution support
- Filter by evolution status
- 8-card deck selection with level configuration
- Visual deck preview
- Card rarity color coding

### Admin Dashboard
- Order management table
- Status workflow (pending → in progress → completed)
- Revenue and order statistics
- Order detail modals

## Configuration

### Stripe Setup
1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your API keys from the Stripe Dashboard
3. Set up webhook endpoints for payment events
4. Configure the webhook secret in your environment variables

### Supabase Setup
1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Set up your database schema for orders and users
3. Configure Row Level Security (RLS) policies
4. Add your project URL and anon key to environment variables

### Cloudinary Setup (Optional)
1. Create a Cloudinary account
2. Upload card images to a folder named `cr_store/cards`
3. Configure naming convention: `{cardId}.png` and `{cardId}_evo.png`

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms
The app can also be deployed to Netlify, Railway, or any platform supporting Next.js.

## Customization

### Colors
Edit the color constants in `lib/constants.ts`:
```typescript
export const COLORS = {
  primary: '#7C3AED',      // Deep violet
  secondary: '#A78BFA',    // Softer lilac
  darkBg: '#110C1B',       // Almost-black purple
  cardBg: 'rgba(42,28,67,0.55)', // Glass card background
  accentGold: '#FFC700'    // Legendary glow
} as const;
```

### Pricing
Update pricing constants in the same file:
```typescript
export const PRICING = {
  pricePer1kTrophies: 5,   // USD per 1000 trophies
  pricePerLeague: 5,       // USD per league
  maxTrophies: 15000       // Maximum trophy count
} as const;
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please open an issue in the repository.

---

Built with ❤️ for the Clash Royale community