import "./globals.css";

export const metadata = {
  title: "Oriana",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
