import Navigation from "../components/navigation";

export const metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Loading...",
  },
  description: "The best movies on the best framework",
};

export default function AppLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
