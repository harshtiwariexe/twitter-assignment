import { useState } from "react";
function HeaderDropDown() {
    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (index: number) => {
        setActiveItem(index);
    };

    return (
        <div className='w-full bg-white shadow-sm rounded-lg py-1 transition-transform transform-gpu duration-300 ease-in-out'>
            <div className='flex flex-row justify-start ml-20 gap-10'>
                {['Job Preview', 'Applicants', 'Match', 'Messages'].map((item, index) => (
                    <p 
                        key={index} 
                        onClick={() => handleItemClick(index)}
                        className={`py-2 cursor-pointer ${activeItem === index ? 'text-simple-orange border-b-2 border-simple-orange' : 'text-header-text-2'}`}
                    >
                        {item}
                    </p>
                ))}
            </div>
        </div>
    );
}
export default HeaderDropDown