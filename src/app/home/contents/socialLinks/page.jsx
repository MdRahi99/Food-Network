import facebook from '../../../../../public/images/facebook.png';
import linkedin from '../../../../../public/images/linkedin.png';
import twitter from '../../../../../public/images/twitter.png';
import link from '../../../../../public/images/link.png';
import Link from 'next/link';
import Image from 'next/image';

const socialLinks = [facebook, linkedin, twitter, link]

const SocialLinks = () => {
    return (
        <div className='flex flex-row lg:flex-col lg:justify-evenly lg:gap-0 gap-4 items-center lg:h-[298px]'>
            {
                socialLinks.map((link, index) => {
                    return <Link
                        key={index}
                        href='/' >
                        <Image
                            className=""
                            src={link}
                            alt="social"
                            width={28}
                            height={28}
                            quality={100}
                        />
                    </Link>
                })
            }
        </div>
    );
};

export default SocialLinks;