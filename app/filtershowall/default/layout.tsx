import "./landing.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`my-nav-class`}
      >
        {children}
      </body>
    </html>
  );
}
