
import SideNav from './components/sidenav';
import CenterWidgetsContainer from './components/widgets-centre';
import LargeWidgetsContainer from './components/widgets-large';
import SmallWidgetsContainer from './components/widgets-small';
import Logo from './components/logo';
import './style.css';


const ParentContainer=()=> <div className='parent-container'>
 <Logo/> 
 <SmallWidgetsContainer/>
 <CenterWidgetsContainer/>
 <LargeWidgetsContainer/>
 </div>

const Dashboard = ()=> (<div className='dashboard'>
    <SideNav/>
    <ParentContainer/>
</div>)

export default Dashboard;
