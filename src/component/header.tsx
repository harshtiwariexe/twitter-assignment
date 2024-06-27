import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown} from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import HeaderDropDown from './headerDropDown';

function Header() {
    const [clickedIndex, setClickedIndex] = useState(0);
    const [dropdownVisible, setDropdownVisible] = useState(true);

    const handleClick = (index: number) => {
        setClickedIndex(index);
        if (index === 0) {
            setDropdownVisible(!dropdownVisible);
        } else {
            setDropdownVisible(false);
        }
    };

    return (
        <div className='w-full'>
            <div className='bg-white text-md flex flex-row justify-around w-full h-[80px] border-y-2 items-center gap-32'>
                <div className='px-3 py-2 bg-gray-border font-semibold text-red-500'>Logo</div>
                <div className='flex flex-row justify-between gap-24 border-2 py-1 px-1 rounded-l-full rounded-r-full'>
                    <MiddleComponent 
                        label='Job' 
                        img='./case.svg'
                        isActive={clickedIndex === 0} 
                        onClick={() => handleClick(0)} 
                    />
                    <MiddleComponent 
                        label='Messages' 
                        img='./msg.png'
                        isActive={clickedIndex === 1} 
                        onClick={() => handleClick(1)} 
                    />
                    <MiddleComponent 
                        label='Payments' 
                        img='./payment.png'
                        isActive={clickedIndex === 2} 
                        onClick={() => handleClick(2)} 
                    />
                </div>
                <div className='flex flex-row justify-center items-center gap-1'>
                    <FontAwesomeIcon icon={faBell} className='h-5 cursor-pointer'/>
                    <div className='flex flex-row gap-1 items-center justify-center cursor-pointer hover:bg-slate-200 px-3 py-2 rounded-full'>
                        <img src="./images.png" alt="" className='h-7 rounded-full' />
                        <FontAwesomeIcon icon={faAngleDown}/>
                    </div>
                </div>
            </div>
            {dropdownVisible && <HeaderDropDown />}
        </div>
    );
}

interface LabelProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
    img:string
}

function MiddleComponent({ label, isActive, onClick, img}: LabelProps) {
    const textColor = isActive ? 'text-white' : 'text-header-text';
    const backgroundColor = isActive ? 'bg-simple-orange' : 'bg-initial';

    return (
        <div 
            className={`px-4 py-3 rounded-full cursor-pointer flex flex-row items-center justify-center ${backgroundColor}`}
            onClick={onClick}
        >
            <img src={img} alt="" className='mr-1 h-4 '/>
            <p className={`${textColor}`}>{label}</p>
        </div>
    );
}



export default Header;
