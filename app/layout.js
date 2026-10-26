
import "./globals.css";

export const metadata = {
  title: {
    default: "From Bug Report to Root Cause",
    template: "%s | From Bug Report to Root Cause",
  },
  description:
    "Learn a systematic approach to debugging, investigating software issues, and finding root causes instead of guessing at fixes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
