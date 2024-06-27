import Title from './DashboardComponents/title'
import About from './DashboardComponents/about'
import Stats from './DashboardComponents/Stats'
import CompanyInfo from './DashboardComponents/companyInfo'
import Skills from './DashboardComponents/Skills'

export default function MainDashboard() {
  return (
    <>
    <div className='flex flex-row'>
        <div className='w-[1200px]'>
            <Title/>
            <Skills/>
            <About/>
            <CompanyInfo/>
        </div>
        <Stats/>
        </div>
    </>
  )
}
