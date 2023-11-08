import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Common/Navbar/Navbar'
import Sidebar from '@/components/Common/Sidebar/Sidebar'
import Footer from '@/components/Common/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Food Network',
  description: 'Food Network App',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className='flex'>
          <div className='hidden lg:flex h-[830px] lg:w-16'>
            <Sidebar />
          </div>
          <div className='w-full h-[1276px] bg-[#EEF0F2] lg:rounded-tl-3xl rounded-tl-none'>
            {children}
          </div>
        </div>
        <div className='block mt-[700px] lg:hidden'>
          <Footer />
        </div>
      </body>
    </html>
  )
}

export default RootLayout;
