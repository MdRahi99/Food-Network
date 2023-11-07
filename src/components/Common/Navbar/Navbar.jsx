import Image from 'next/image';
import logo from '../../../../public/images/logo.png';
import dropdown from '../../../../public/images/dropdown.png';
import navBtn1 from '../../../../public/images/toggle.png';
import navBtn2 from '../../../../public/images/switch.png';
import search from '../../../../public/images/search.png';
import NavItems from '@/components/NavItems/NavItems';

const Navbar = () => {
    return (
        <div className="navbar pl-5 pr-4 py-3 grid grid-cols-12 items-center justify-between">
            <div className="navbar-start col-span-6 lg:col-span-5 w-full">
                <Image
                    src={logo}
                    alt="Picture of the author"
                    width={71.6}
                    height={36}
                    quality={100}
                />
            </div>
            <div className="navbar-center lg:flex hidden lg:col-span-2 w-full relative">
                <input type="text" placeholder="Search Best Food" className="input focus:outline-none pl-3 py-1 pr-1 border-2 h-10 border-[#F0F2F4] text-sm rounded-lg placeholder-[#101010] w-full" />
                <div className='p-2 border-2 border-opacity-20 border-[#E65527] rounded-lg bg-[#E65527] bg-opacity-10 absolute top-1/2 right-1 transform -translate-y-1/2'>
                    <Image
                        src={search}
                        alt="Search Icon"
                        width={13}
                        height={13}
                        quality={100}
                    />
                </div>
            </div>
            <div className="navbar-end col-span-6 lg:col-span-5 flex items-center w-full gap-6">
                <div className='p-1 hidden lg:flex border-2 border-opacity-20 bg-opacity-10 border-[#E65527] bg-[#E65527] rounded'>
                    <Image
                        src={navBtn1}
                        alt="Navbar Button No 01"
                        width={22}
                        height={22}
                        quality={100}
                    />
                </div>
                <div className='p-1  hidden lg:flex border-2 border-opacity-20 bg-opacity-10 border-[#E65527] bg-[#E65527] rounded'>
                    <Image
                        src={navBtn2}
                        alt="Navbar Button No 02"
                        width={22}
                        height={22}
                        quality={100}
                    />
                </div>
                <div className='p-2 flex lg:hidden border-2 border-opacity-20 border-[#E65527] rounded-lg bg-[#E65527] bg-opacity-10'>
                    <Image
                        src={search}
                        alt="Search Icon"
                        width={13}
                        height={13}
                        quality={100}
                    />
                </div>
                {/* Dropdown */}
                <div className="p-1 transition-transform ease-out duration-300 transform translate-x-0 hover:translate-x-1 border-2 border-opacity-20 border-[#101010] bg-opacity-10 rounded bg-[#101010] dropdown dropdown-left">
                    <Image
                        tabIndex={0}
                        src={dropdown}
                        alt="Dropdown Icon"
                        width={20}
                        height={20}
                        quality={100}
                    />
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 gap-4 rounded-box w-20"
                    >
                        <NavItems />
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Navbar;