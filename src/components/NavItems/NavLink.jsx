'use client'
const { default: Link } = require("next/link")
import classNames from "@/utlis/classNames";
import { usePathname } from "next/navigation";

const NavLink = ({children, href, exact = false, activeClassName, ...props}) => {

    const path = usePathname();
    const active = exact ? path === href : path.startsWith(href);
    const classes = classNames(props.className, active && activeClassName);

    if(classes){
        props.className = classes
    };

    return (
        <Link href={href} {...props}>
            {children}
        </Link>
    );
};

export default NavLink;