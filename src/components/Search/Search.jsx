import Image from "next/image";
import search from '../../../public/images/search.png';

const Search = () => {
    return (
        <div className='p-2 border-2 border-opacity-20 border-[#E65527] rounded-lg bg-[#E65527] bg-opacity-10 absolute top-1/2 right-1 transform -translate-y-1/2'>
            <Image
                src={search}
                alt="Search Icon"
                width={13}
                height={13}
                quality={100}
            />
        </div>
    );
};

export default Search;