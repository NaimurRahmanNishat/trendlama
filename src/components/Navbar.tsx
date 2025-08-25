import Image from 'next/image';
import Link from 'next/link';
import logo from "../../public/logo.png";
import SearchBar from './SearchBar';
import { Bell, Home, ShoppingCart } from 'lucide-react';
import ShoppingCartIcon from './ShoppingCartIcon';

const Navbar = () => {
  return (
    <nav className='w-full flex items-center justify-between border-b border-gray-200 py-2 px-4'>
        {/* left */}
        <Link href={"/"} className='flex items-center'>
        <Image
            src={logo}
            alt="logo"
            width={36}
            height={36}
            className='w-6 h-6 md:w-9 md:h-9 cursor-pointer'
        />
        <p className='hidden md:block text-md font-medium tracking-wider'>TRENDLAMA.</p>
        </Link>
        {/* right */}
        <div className='flex items-center gap-6'>
            <SearchBar/>
            <Link href={"/"}>
                <Home className='w-4 h-4 text-gray-600 cursor-pointer'/>
            </Link>
            <Bell className='w-4 h-4 text-gray-600 cursor-pointer'/>
            <ShoppingCartIcon/>
            <Link href={"/login"}>Sign in</Link>
        </div>
    </nav>
  )
}

export default Navbar;