import './globals.css'
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Èric Salat - Desarrollador Front-end',
  description: 'Web profesional - portfolio de Èric Salat Badia. Desarrollador Front End',
}

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="es">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  )
}
