# Smart Farm Website

A modern website for a smart farming solutions company built with Next.js and Tailwind CSS.

## Features

- Responsive navigation bar with active state highlighting
- Modern hero section with gradient background
- Feature-rich solutions and technology pages
- Contact form with client-side validation
- Reusable UI components (Navbar and Footer)

## Tech Stack

- Next.js 13+ (App Router)
- React
- Tailwind CSS
- TypeScript

## Getting Started

1. Clone the repository:
```bash
git clone git@github.com:jvc-byte/smart-farm.git
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The website will be available at `http://localhost:3000`

## Project Structure

```
smart-farm/
├── src/
│   ├── app/
│   │   ├── page.tsx           # Home page
│   │   ├── contact/
│   │   │   └── page.tsx       # Contact form page
│   │   ├── solutions/
│   │   │   └── page.tsx       # Solutions page
│   │   └── technology/
│   │       └── page.tsx       # Technology page
│   └── components/
│       └── ui/
│           ├── Navbar.tsx     # Navigation component
│           └── Footer.tsx     # Footer component
├── public/
│   └── images/                # Static images
└── package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Deployment

The website can be deployed using Vercel. Follow these steps:

1. Sign up for a Vercel account
2. Connect your GitHub repository
3. Deploy with one click using the Vercel platform

For more detailed deployment instructions, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
