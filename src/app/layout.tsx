import type { Metadata } from "next";
import "@/styles.css";
import FacebookPixel from "@/components/FacebookPixel";
import { FB_PIXEL_ID } from "@/lib/fbpixel";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "PPP - Programa Psicólogo Próspero: Mentoria Contínua para Psicólogos de Alto Valor",
  description: "Mentoria contínua para psicólogos de alto valor com Neto Zago.",
  authors: [{ name: "Neto Zago" }],
  openGraph: {
    title: "PPP - Programa Psicólogo Próspero",
    description: "Comunidade privada com encontros mensais ao vivo, estudos de caso e plano de crescimento individualizado.",
    type: "website",
  },
  twitter: {
    card: "summary",
  },
  icons: {
    icon: "/logo_neto_zago_ppp_favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Suspense fallback={null}>
          <FacebookPixel />
        </Suspense>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
