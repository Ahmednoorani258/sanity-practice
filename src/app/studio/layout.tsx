import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Ecommerce-App-Practice",
  description: "Created By Muhammad Ahmed Noorani",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
