import React from 'react';

// https://nextjs.org/docs/app/getting-started/layouts-and-pages#creating-a-layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
