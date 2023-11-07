'use client'
import Image from "next/image";
import search from '../../../../public/images/search.png';
import { useState, useEffect } from "react";
import Link from "next/link";

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/category-data.json');
                if (response.ok) {
                    const data = await response.json();
                    setCategories(data);
                }
            } catch (error) {
                console.error('An error occurred while fetching categories data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-col gap-3">
            <div className="flex w-full gap-1 border-2 border-[#E65527] p-1 border-opacity-20">
                <button className="py-1 w-full text-sm px-3 bg-opacity-10 text-[#E55527] bg-[#E65527] rounded-md font-semibold">
                    Fruits
                </button>
                <button className="py-1 w-full text-sm px-3 bg-opacity-10 text-[#E55527] bg-[#E65527] rounded-md font-semibold">
                    Vegetables
                </button>
            </div>

            <div className="w-full relative">
                <input type="text" placeholder="Search by Fruits Name" className="input focus:outline-none pl-3 py-1 pr-1 border-2 h-10 border-[#F0F2F4] text-sm rounded-lg placeholder-[#101010] w-full" />
                <div className='p-2 border-2 border-opacity-20 border-[#E65527] rounded-lg bg-[#E65527] bg-opacity-10 absolute top-1/2 right-1 transform -translate-y-1/2'>
                    <Image
                        src={search}
                        alt="Search Icon"
                        width={13}
                        height={13}
                        quality={100}
                    />
                </div>
            </div>
            <div>
                <h1 className="font-medium font-sm text-[#101010]">Fruits List</h1>
                {
                    categories.map(category => {
                        const { _id, image, title, desc } = category;
                        return <Link href={`/category-details/${_id}`} key={_id} className="flex w-full items-center gap-8 p-4">
                            <Image
                                className="py-2 px-2 w-12 bg-[#E55527] bg-opacity-5 border-1 rounded-bl-lg rounded-tr-lg rounded-tl-lg rounded-br-lg rotate-45"
                                src={image}
                                alt="Search Icon"
                                width={42.52}
                                height={42.52}
                                quality={100}
                            />
                            <div className="w-full flex flex-col gap-2">
                                <h2 className="w-full font-medium text-[#101010] font-sm">{title}</h2>
                                <p className="w-full font-normal text-[#101010] text-opacity-70">{desc}</p>
                            </div>
                        </Link>
                    })
                }
            </div>
        </div>
    );
};

export default Categories;