import useNavLinks from "@/hooks/useNavLinks";
import Image from "next/image";
import Link from "next/link";

const NavItems = () => {
    const [navLinks] = useNavLinks();

    return (
        <>
            {
                navLinks.map((link, index) => (
                    <Link href={link.route} className="p-1 border-2 border-opacity-10 bg-opacity-5 border-[#101010] bg-[#101010] rounded-md"
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
                    </Link>
                ))
            }</>
    );
};

export default NavItems;