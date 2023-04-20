import './style.css';
import {AiOutlinePieChart,AiOutlineTags,AiOutlineSetting} from 'react-icons/ai';
import {BsCalendar4Event} from 'react-icons/bs'
import {BiUserCircle} from 'react-icons/bi'

const LogoWithLink=({logo, linkName})=>(<div className='logo-with-link'>
    <div className='icon'>{logo}</div><div className='logo-link'>{linkName}</div>
</div>)


 const SideNav =()=><div className="side-navv">
<h1 >Board.</h1>

<div>
   <LogoWithLink logo={<AiOutlinePieChart/>} linkName={'Dashboard'} />
   <LogoWithLink  logo={<AiOutlineTags/>}  linkName={'Transactions'} />
   <LogoWithLink  logo={<BsCalendar4Event/>}  linkName={'Schedules'} />
   <LogoWithLink  logo={<BiUserCircle/>}  linkName={'Users'} />
   <LogoWithLink  logo={<AiOutlineSetting/>}  linkName={'Settings'} />
</div>

 </div>;


 export default SideNav;