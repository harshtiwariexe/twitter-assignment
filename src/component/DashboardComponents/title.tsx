import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle,faCoins,faGlobe } from '@fortawesome/free-solid-svg-icons';


function title() {
  return (
    <div className='border-b-2 h-36 flex flex-col justify-center'>
        <Heading label='Senior Product Designer'/>
        <SubHeading place='Delware, USA' salary='$300k-$400k'/>
    </div>
    
  )
}

interface LabelProp {
    label: string;
}

function Heading({ label }: LabelProp) {
    const [active, setActive] = useState(true);

    return (
        <div className='mt-2 ml-20 flex flex-row items-center gap-3'>
            <h1 className='text-4xl font-bold text-all-black'>{label}</h1>
            <p className='bg-gray-border h-1 w-1 rounded-full'></p>
            <p className='text-header-text-2 text-sm'>posted 2 days ago</p>
            <div>{active ? (
                <p className='border-2 text-sm bg-not-open text-[#067647] px-1 py-0 flex items-center rounded-full border-open'>
                  <FontAwesomeIcon icon={faCircle} size='2xs' style={{color: "#008516",}} className='mr-1'/>  Open
                </p>
            ) : (
                <p className='border-2 text-sm bg-red-100 text-red-600 px-2 py-0 rounded-full flex items-center border-red-600'>
                    <FontAwesomeIcon icon={faCircle} size="2xs" style={{color: "#c61515",}} className='mr-1'/>Closed
                </p>
            )}</div>
        </div>
    );
}



interface SubHeadingProp{
    place:string,
    salary:string
}
function SubHeading({place,salary}:SubHeadingProp){
    return <div className='flex flex-row gap-4 ml-20 mt-4 text-title-text'>
        <p className='flex items-center'><img src='./location.png' className='mr-1 h-4'/>{place}</p>
        <p className='bg-gray-border h-1 w-1 mt-2 rounded-full'></p>
        <p className='flex items-center'><img src='./coin.png' className='mr-1 h-4'/>{salary}</p>
    </div>
}

export default title