import Image from "next/image";
import settings from '../../../../public/images/settings.png';
import uparrow from '../../../../public/images/uparrow.png';
import toggleBtn from '../../../../public/images/toggleBtn.png';

const Settings = () => {

    return (
        <div className="flex flex-col gap-5 border-2 border-[#101010] border-opacity-10 px-2 py-3 rounded-xl">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image
                        className=""
                        src={settings}
                        alt="Settings"
                        width={20}
                        height={20}
                        quality={100}
                    />
                    <h1 className="text-sm font-semibold text-[#E55527]">Settings</h1>
                </div>
                <Image
                    className=""
                    src={uparrow}
                    alt="Settings"
                    width={12}
                    height={8}
                    quality={100}
                />
            </div>

            <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                    <h1 className="text-[13px] font-medium text-[#101010]">Paragraph font size</h1>
                    <p className="text-[#E55527] font-semibold text-[12px]">19</p>
                </div>
                <input type="range" min={0} max="100" value="40" className="range h-1 bg-[#E55527]" />
            </div>

            <div className="flex flex-col gap-3">
                <h1 className="font-medium text-[13px] text-[#101010]">Choose Vitamin Type</h1>
                <select className="focus:outline-none bg-[#101010] bg-opacity-10 text-[#101010] select w-full max-w-xs">
                    <option defaultValue='All Vitamin'>All Vitamin</option>
                    <option>Vitamin A</option>
                    <option>Vitamin B</option>
                    <option>Vitamin C</option>
                    <option>Vitamin D</option>
                    <option>Vitamin E</option>
                </select>
            </div>

            <div className="flex items-center justify-between">
                <h1 className="text-[13px] font-semibold text-[#101010]">Turn Off Subtitle</h1>

                <Image
                    className="bg-[#E8E8E8] bg-opacity-10 w-[34px] h-[16px]"
                    src={toggleBtn}
                    alt="Toggle"
                    width={20}
                    height={20}
                    quality={100}
                />
            </div>
        </div>
    );
};

export default Settings;