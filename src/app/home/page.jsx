'use client'

import Categories from "./categories/page";
import Contents from "./contents/page";
import Settings from "./settings/page";
import { useState } from "react";
import SelectItem from "./selectItem/page";

const HomePage = () => {

    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        <div className="lg:m-3 mb-6 grid grid-cols-1 lg:grid-cols-12 gap-2 justify-between">
            <div className={`block lg:hidden`}>
                <SelectItem toggleSidebar={toggleSidebar} />
            </div>
            <div className={`p-4 ${isSidebarVisible ? "block lg:block" : "hidden lg:block"} w-[400px]  lg:w-full lg:col-span-3 bg-[#fff] rounded-r-xl lg:rounded-xl h-[830px]`}>
                <Categories />
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