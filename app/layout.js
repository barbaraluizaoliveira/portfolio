import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Bárbara | Portfólio",
  description: "Currículo/Portfólio - Next.js + Tailwind + GitHub API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="min-h-screen gradient">
          <NavBar />
          <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
