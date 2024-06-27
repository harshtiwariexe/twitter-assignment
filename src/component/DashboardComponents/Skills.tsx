import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IconProp } from '@fortawesome/fontawesome-svg-core';


function Skills() {
  return (
    <div className='flex flex-row gap-24 m-5 h-32 ml-20'>
        <SkillRequired />
        <Language/>
        <Type type='Full-time'/>
        <YearExperience year={3}/>
    </div>
  )
}
interface skillProp{
    a:string,
    img:string
}
function SkillRequired(){
    return <div>
        <p className='text-sm text-skill-text mb-1'>Skills Required</p>
            <SkillRequiredComponents a='Figma' img='figma.png'/>
            <SkillRequiredComponents a='Abode Illustrator' img='illus.png'/>
            <SkillRequiredComponents a='Adobe XD' img='xd.png'/>
       
    </div>
}
function SkillRequiredComponents({a,img}:skillProp){
    return <div className='border-[1px] m-1 rounded-md text-sm flex items-center flex-row max-w-max'><img src={img} alt="" className='h-4 m-1'/><p className='mr-1'>{a}</p></div>
}
function Language(){
    return <div>
        <p className='text-sm text-skill-text'>Preferred Language</p>
        <ul className='font-semibold text-all-black'>
            <li>
                English
            </li>
        </ul>
    </div>
}
interface TypeProp{
    type:string
}
function Type({type}:TypeProp){
    return <div>
        <p className='text-skill-text text-sm'>Type</p>
        <p className='font-semibold text-all-black'>{type}</p>
    </div>
}
interface ExperienceProp{
    year:number
}
function YearExperience({year}:ExperienceProp){
    return <div>
        <p className='text-skill-text text-sm'>Years Of Experience</p>
        <p className='font-semibold text-all-black'>{year}+ Years of experience</p>
    </div>
}
export default Skills