import useNavLinks from "@/hooks/useNavLinks";
import Image from "next/image";
import NavLink from "./NavLink";

const NavItems = () => {
    const [navLinks] = useNavLinks();

    return (
        <>
            {
                navLinks.map((link, index) => (
                    <NavLink exact={link.route === '/'} activeClassName='text-opacity-20 text-[#E65527] bg-[#E65527] bg-opacity-20' href={link.route} className="p-1 border-2 border-opacity-10 bg-opacity-5 border-[#101010] bg-[#101010] rounded-md"
                        key={index}>
                        <Image
                            className='mx-auto w-{22px} h-{22px}'
                            title={link.label}
                            tabIndex={0}
                            src={link.image}
                            alt={link.label}
                            width={22}
                            height={22}
                            quality={100}
                        />
                    </NavLink>
                ))
            }</>
    );
};

export default NavItems;