import { ViewTransition } from 'react'
import './globals.css'
import Footer from './ui/footer'
import Navbar from './ui/navbar'
import { Separator } from '@/components/ui/separator'

export default function RootLayout({children,}: {children: React.ReactNode}){
    return(
        <html lang="en" className='h-full'>
            <head>
                <title>Document</title>
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            </head>
            <body className='p-4 h-full'>
                <div>
                    <nav className='py-2'>
                        <Navbar/>
                    </nav>
                    <Separator/>
                        <ViewTransition>
                            <main className='p-4 flex flex-col h-[80%] items-center'>
                                {children}
                            </main>
                        </ViewTransition>
                    <Separator/>
                    <Footer/>
                </div>
            </body>
        </html>
    )
}