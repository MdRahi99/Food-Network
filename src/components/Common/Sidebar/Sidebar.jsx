import NavItems from '@/components/NavItems/NavItems';

const Sidebar = () => {
    return (
        <div className="flex p-3 items-center justify-center h-full">
            <ul className='flex flex-col items-center justify-around gap-10'>
                <NavItems />
            </ul>
        </div>
    );
};

export default Sidebar;