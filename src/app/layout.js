import "./globals.css";
import GlobalProvider from "../../context/globalContext";

export const metadata = {
  title: "Optica Divisar",
  description: "Optica, lentes, armazones, sol, contactologia, gafas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
