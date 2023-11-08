import Image from 'next/image';
import empty from '../../../../public/images/empty.png';
const Empty = () => {
    return (
        <div className='flex flex-col items-center justify-center px-10 py-44 lg:p-44 gap-6 bg-[#fff] rounded-xl m-3'>
            <Image
                src={empty}
                alt="Empty"
                width={530}
                height={300}
                quality={100}
            />
            <h1 className='font-semibold text-[24px] text-[#212121]'>This Page Is Empty</h1>
        </div>
    );
};

export default Empty;