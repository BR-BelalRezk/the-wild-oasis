import type { Metadata } from "next";
import "@repo/ui/globals.css";
import { Poppins, Sono } from "next/font/google";
import Providers from "@/components/providers";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const sono = Sono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Wild Oasis",
  description: "The Wild Oasis Dashboard",
  icons: {
    icon: "/logo-light.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${sono.variable} antialiased`}>
        <Providers>
          {children}

          <Toaster
            style={{ margin: "8px" }}
            toastOptions={{
              duration: 3000,
              style: {
                maxWidth: "500px",
                fontSize: "16px",
                padding: "16px 24px",
                backgroundColor: "var(--color-grey-0)",
                color: "var(--color-grey-700)",
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
