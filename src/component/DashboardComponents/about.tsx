

function About() {
    return (
        <div className=' w-full h-[450px] border-t-2 border-b-2 border-gray-border py-5 flex  items-center'>
       <div className='ml-20 flex flex-col gap-2'>
        <Job/>
        <Benfit/>
        <Schedule/>
        <PayTypes/>
        <p>Work Location: In person</p>
       </div>
    </div>
  )
}
function Job(){
    const job = ['Handle the UI/UX research design','Work on researching on latest web applications designs & trends','Work on conceptualizing and visualizing','Work on creating graphics content and other graphic related works']
    return <div>
         <p className='text-header-text-2 text-sm mb-2'>About the job</p>
        <ol style={{ listStyleType: 'decimal' }} className='ml-5 text-all-black'>
        {job.map((ab, index) => (
          <Desc key={index} props={ab} index={index} />
        ))}
      </ol>
    </div>
}
function Desc({props,index}:any){
    return <li value={index + 1}>{props}</li>
}
function BenfitProp({ brand, index }:any) {
    return <li value={index + 1}>{brand}</li>;
  }
  
  function Benfit() {
    const perks = ['Health Insurance','Provident Fund'];
    return (
      <div>
        <h1>Benfits:</h1>
        <ul style={{ listStyleType: 'disc' }} className='ml-5 text-all-black'>
          {perks.map((car, index) => (
            <BenfitProp key={index} brand={car} index={index} />
          ))}
        </ul>
      </div>
    );
  }

  
  function Schedule() {
    const perks = ['Day Shift'];
    return (
      <div>
        <h1 >Schedule:</h1>
        <ul style={{ listStyleType: 'disc' }} className='ml-5 text-all-black'>
          {perks.map((car, index) => (
            <BenfitProp key={index} brand={car} index={index} />
          ))}
        </ul>
      </div>
    );
  }
  function PayTypes() {
    const perks = ['Performance Bonus','Yearly Bonus'];
    return (
      <div>
        <h1>Supplemental Pay Types:</h1>
        <ul style={{ listStyleType: 'disc' }} className='ml-5 text-all-black'>
          {perks.map((car, index) => (
            <BenfitProp key={index} brand={car} index={index} />
          ))}
        </ul>
      </div>
    );
  }

export default About