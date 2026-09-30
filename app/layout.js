import "@fontsource-variable/plus-jakarta-sans";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";

export const metadata = {
  title: "Devkumar Patel | SAP Support & IT Specialist",
  description:
    "Portfolio of Devkumar (Dev) Patel: SAP S/4HANA support, IT systems, REST API integration, cloud and full-stack web development. Based in Toronto.",
  openGraph: {
    title: "Devkumar Patel | SAP Support & IT Specialist",
    description: "SAP S/4HANA support, IT systems, cloud and web development. Based in Toronto.",
    type: "website",
    images: ["/profile.jpg"],
  },
};

export const viewport = { themeColor: "#05070d" };

const boot = `document.documentElement.classList.add('js');`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: boot }} />
      </head>
      <body className="bg-void font-sans text-slate-300 antialiased">{children}</body>
    </html>
  );
}
