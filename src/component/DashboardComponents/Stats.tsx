import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPencil, faUserGroup} from '@fortawesome/free-solid-svg-icons';
import { faEye,faUser,faMessage,faTrashCan} from '@fortawesome/free-regular-svg-icons';
import React from 'react'

function Stats() {
  return (
    <div className='bg-simple-gray w-80 flex flex-col '>
        <div className='flex flex-row items-center gap-4 mb-5 justify-center mt-10'>
            <button className='px-4 py-2 bg-light-or rounded-lg border-2 border-simple-orange text-orange-500 flex items-center'><img src="./delete.png" alt="" srcset="" className='mr-2'/>Delete Job</button>
            <button className='px-5 py-2 bg-simple-orange rounded-lg border-2 border-light-or text-white flex items-center'><img src='Icon.png' className='mr-2'/>Edit Job</button>
        </div>
        <div>
            <StatHelper label='Applicants' num={400} img='Applicants.png'/>
            <StatHelper label='Matches' num={100} img='user.png'/>
            <StatHelper label='Messages' num={147} img='message.png'/>
            <StatHelper label='Views' num={800} img='view.png'/>   
        </div>
    </div>
  )
}
interface StatProps{
    label:string,
    num:number,
    img:string 
}
function StatHelper({label,num,img}:StatProps){
    return <div className='flex flex-row justify-between mr-10 ml-10 mb-5 text-sm mt-5 border-gray-border border-b-2 pb-5'>
        <div className='font-normal text-sill-text flex items-center'><img src={img} className='mr-2 h-4'/>{label}</div>
        <div className='font-semibold'>{num}</div>
    </div>
}

export default Stats