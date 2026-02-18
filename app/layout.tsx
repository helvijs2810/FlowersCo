import './globals.css'
import Navbar from './ui/navbar'

export default function RootLayout({children,}: {children: React.ReactNode}){
    return(
        <html lang="en">
            <head>
                <title>Document</title>
            </head>
            <body className='p-4'>
                <nav>
                    <Navbar/>
                </nav>
                <main className='p-4'>
                    {children}
                </main>
            </body>
        </html>
    )
}