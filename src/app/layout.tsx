import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luxtronics — Considered Technology & Precision Electronics",
  description: "Shop considered technology, next-gen wearables, rugged devices, and precision OEM electronics components from Luxtronics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        {/* Tailwind Engine */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                darkMode: 'class',
                theme: {
                  extend: {
                    colors: {
                      paper: '#faf9f5',
                      surface: '#ffffff',
                      ink: {
                        900: '#111217',
                        800: '#1c1e24',
                        700: '#323540',
                        600: '#4b5060',
                        500: '#686e82',
                        400: '#949bb0',
                      },
                      luxgold: {
                        300: '#f5d179',
                        400: '#e5ab37',
                        500: '#c88a1e',
                        600: '#a36b0f',
                      }
                    },
                    fontFamily: {
                      sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                      heading: ['Outfit', 'sans-serif'],
                    }
                  }
                }
              }
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#faf9f5] text-[#111217] antialiased selection:bg-amber-500/20 selection:text-amber-800 font-sans">
        {children}
      </body>
    </html>
  );
}
