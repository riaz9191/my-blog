# Luminous Global Website

This is the official website for Luminous Global LLC, a U.S.-registered company based in Florida, focused on the import, export, and distribution of fast-moving consumer goods (FMCG) and trending e-commerce products.

## Features

- **Modern UI:** Built with Next.js and Tailwind CSS, utilizing Shadcn UI components for a sleek and responsive design.
- **Email Integration:** Contact form submissions are sent directly to your specified email address using Nodemailer.
- **Dynamic Content:** Configurable site details (company name, contact info, social links) managed through a central `config/site.ts` file.
- **Interactive Hero Section:** Features a typewriter effect and animated counters for an engaging first impression.
- **SEO Optimized:** Enhanced metadata for better search engine visibility and social media sharing.
- **Smooth Scrolling:** Improved navigation with `scroll-margin-top` for sticky header compatibility.
- **Toast Notifications:** Provides user feedback for form submissions using Sonner.

## Technologies Used

- **Next.js 14+:** React framework for production.
- **React 19:** JavaScript library for building user interfaces.
- **TypeScript:** Strongly typed programming language that builds on JavaScript.
- **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
- **Shadcn UI:** Reusable components built with Radix UI and Tailwind CSS.
- **Nodemailer:** Module for Node.js applications to allow easy email sending.
- **Geist Fonts:** Modern, high-quality fonts for a clean aesthetic.
- **Lucide React:** A beautiful collection of open-source icons.
- **Framer Motion:** A production-ready motion library for React.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Make sure you have the following installed:

- Node.js (v18.x or higher)
- npm (comes with Node.js)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/luminous-global-website.git
    cd luminous-global-website
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

### Environment Variables

Create a `.env.local` file in the root of your project and add the following environment variables. These are crucial for the email functionality.

```env
EMAIL_USER=your-gmail-email@gmail.com
EMAIL_PASS=your-gmail-app-password
```

**Note:** If you have 2-Factor Authentication enabled on your Gmail account, you must generate an [App Password](https://support.google.com/accounts/answer/185833) and use that instead of your regular Gmail password.

### Running the Development Server

To start the development server, run:

```bash
npm run dev

Open [http://localhost:9191](http://localhost:9191) in your browser to see the result.

### Building for Production

To build the application for production, run:

```bash
npm run build
```

This will create an optimized build in the `.next` folder.

### Running in Production Mode

To start the application in production mode after building, run:

```bash
npm run start
```

## Project Structure
```

```
luminous-global-website/
├── app/                  # Next.js application routes and API endpoints
├── components/           # Reusable React components (UI, sections)
│   ├── sections/         # Major page sections (Hero, About, Contact, etc.)
│   └── ui/               # Shadcn UI components
├── config/               # Site-wide configuration (e.g., site.ts)
├── hooks/                # Custom React hooks
├── public/               # Static assets (images, favicon)
├── styles/               # Global CSS styles
├── .env.local            # Environment variables (local)
├── .gitignore            # Files/folders to ignore in Git
├── next.config.mjs       # Next.js configuration
├── package.json          # Project dependencies and scripts
├── postcss.config.mjs    # PostCSS configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).
