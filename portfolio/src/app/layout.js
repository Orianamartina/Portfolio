import "./globals.css";

export const metadata = {
  title: "Oriana",
  description: "Oriana Pettinelli, full stack developer",
  icons: {
    icon: "/icon.png",
  },
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
