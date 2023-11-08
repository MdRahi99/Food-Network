import Image from "next/image";
import banner_01 from '../../../../../public/images/banner-01.png';
import banner_02 from '../../../../../public/images/banner-02.png';
import star from '../../../../../public/images/star.png';
import starBlank from '../../../../../public/images/starblank.png';

const FoodDetails = () => {

    return (
        <div className="flex flex-col gap-10">
            <div className="flex lg:flex-row flex-col justify-between gap-7">
                <div className="flex flex-col gap-5 w-full">
                    <h1 className="w-full text-[28px] font-bold text-[#212121]">Health Benefits Of An Avocado</h1>

                    <div className="flex flex-col gap-3">
                        <h3 className="text-[16px] font-semibold text-[#212121]">Supports eye health:</h3>
                        <p className="font-normal text-[12px] text-[#212121]">
                            Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h3 className="text-[16px] font-semibold text-[#212121]">Supports eye health:</h3>
                        <p className="font-normal text-[12px] text-[#212121]">
                            Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.
                        </p>
                    </div>
                </div>
                <div className="w-full">
                    <Image
                        className=""
                        src={banner_01}
                        alt="Banner 01"
                        width={520}
                        height={320}
                        quality={100}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <h3 className="text-[18px] font-semibold text-[#212121]">Supports eye health:</h3>
                <p className="font-normal text-[14px] text-[#212121]">
                    Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration..
                </p>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-7">
                <div className="w-full">
                    <Image
                        className=""
                        src={banner_02}
                        alt="Banner 02"
                        width={520}
                        height={320}
                        quality={100}
                    />
                </div>
                <div className="w-full h-[320px] flex flex-col gap-3">
                    <h3 className="text-[18px] font-semibold text-[#212121]">Supports eye health:</h3>
                    <p className="font-normal text-[12px] text-[#212121]">
                        Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration..
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <h1 className="font-bold text-sm text-[#212121]">Was this helpful?</h1>
                <div className="flex items-center gap-2">
                    <Image
                        className=""
                        src={star}
                        alt="Star"
                        width={24}
                        height={24}
                        quality={100}
                    />
                    <Image
                        className=""
                        src={star}
                        alt="Star"
                        width={24}
                        height={24}
                        quality={100}
                    />
                    <Image
                        className=""
                        src={star}
                        alt="Star"
                        width={24}
                        height={24}
                        quality={100}
                    />
                    <Image
                        className=""
                        src={star}
                        alt="Star"
                        width={24}
                        height={24}
                        quality={100}
                    />
                    <Image
                        className=""
                        src={starBlank}
                        alt="Star"
                        width={24}
                        height={24}
                        quality={100}
                    />
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;