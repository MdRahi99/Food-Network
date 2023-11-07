import Categories from "./categories/page";
import Contents from "./contents/page";
import Settings from "./settings/page";

const HomePage = () => {
    return (
        <div className="m-3 mb-6 grid grid-cols-1 lg:grid-cols-12 gap-2 justify-between items-center">
            <div className="p-4 lg:col-span-3 bg-[#fff] rounded-xl">
                <Categories />
            </div>
            <div className="p-4 lg:col-span-6 bg-[#fff] rounded-xl">
                <Contents />
            </div>
            <div className="p-4 lg:col-span-3 bg-[#fff] rounded-xl">
                <Settings />
            </div>
        </div>
    );
};

export default HomePage;