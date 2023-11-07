import Image from "next/image";
import Categories from "./categories/page";
import Contents from "./contents/page";
import Settings from "./settings/page";
import select from "../../../public/images/select.png";
import downarrow from "../../../public/images/downarrow.png";

const HomePage = async () => {

    return (
        <div className="m-3 mb-6 grid grid-cols-1 lg:grid-cols-12 gap-2 justify-between">
            <div className="p-4 hidden lg:block w-5/6 lg:w-full lg:col-span-3 bg-[#fff] rounded-xl h-[830px]">
                <Categories />
            </div>
            <div className="flex items-center justify-between lg:hidden bg-[#fff] rounded-lg p-3 mb-1">
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
                <button>
                    <Image
                        src={downarrow}
                        alt="arrow Icon"
                        width={14}
                        height={14}
                        quality={100}
                    />
                </button>
            </div>
            <div className="p-4 lg:col-span-6 bg-[#fff] rounded-xl">
                <Contents />
            </div>
            <div className="p-4 hidden lg:block lg:col-span-3 bg-[#fff] rounded-xl h-[280px]">
                <Settings />
            </div>
        </div>
    );
};

export default HomePage;