import React from 'react'

function companyInfo() {
  return (
    <div className='w-full h-80 flex flex-col justify-center '>
       <div className='flex flex-row items-center gap-5 ml-20'>
       <img src="./images.png" alt="" className='h-14 rounded-md'/>
       <h1 className='text-xl font-semibold text-all-black'>Atlassian</h1>
       </div>
       <div className='flex flex-row gap-20 ml-20'>
        <div>
            <Info a='Company Size' b='1K - 2K Employees'/>
            <Info a='Sector' b='Information Technology, Infrastructure'/>
            <Info a='Founded In' b='2019'/>
        </div>
        <div>
        <Info a='Type' b='Private'/>
        <Info a='Funding' b='Bootstrapped'/>
        <Info a='Founded By' b='Scott Farquhar, Mike Cannon-Brooks'/>
        </div>
       </div>
    </div>
  )
}
interface InfoProp{
    a:string,
    b:string
}
function Info({a,b}:InfoProp){
    return <div className='mt-4'>
        <p className='text-skill-text text-sm mt-2'>{a}</p>
        <p className='mt-1 text-md text-all-black font-medium'>{b}</p>
    </div>
}

export default companyInfo