import Image from 'next/image';
import select from "../../../../public/images/select.png";
import downarrow from "../../../../public/images/downarrow.png";

const SelectItem = ({toggleSidebar}) => {

    return (
        <div className="flex items-center justify-between bg-[#fff] lg:rounded-lg p-3 mb-1">
            <div className="flex items-center gap-4">
                <Image
                    src={select}
                    alt="select Icon"
                    width={14}
                    height={14}
                    quality={100}
                />
                <h1 className="text-[14px] font-semibold text-[#212121]">Select Food Item</h1>
            </div>
            <button onClick={toggleSidebar}>
                <Image
                    src={downarrow}
                    alt="arrow Icon"
                    width={14}
                    height={14}
                    quality={100}
                />
            </button>
        </div>
    );
};

export default SelectItem;