import Navigation from "../components/navigation";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function AppLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        app layout
      </body>
    </html>
  );
}
