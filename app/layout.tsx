import type { Metadata, Viewport } from 'next'
import './globals.css'
export const metadata:Metadata={title:'Nandeesh M. — Software Engineer',description:'Backend systems, infrastructure, and engineering projects by Nandeesh M, a software engineer based in Bangalore.',icons:{icon:'/nm.svg'}}
export const viewport:Viewport={colorScheme:'dark',themeColor:'#101013'}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
