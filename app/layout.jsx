import "./globals.css";

export const metadata = {
  title: "OpenDIRT.org",
  description: "Open academic initiative for measuring AI agent runtime efficiency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}


