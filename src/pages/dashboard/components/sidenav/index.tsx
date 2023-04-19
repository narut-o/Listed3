import './style.css';

const LogoWithLink=({logo, linkName})=>(<div className='logo-with-link'>
    <span>{logo}</span><span>{linkName}</span>
</div>)


 const SideNav =()=><div className="side-nav">
<h1>Board.</h1>

<div>
   <LogoWithLink logo={null} linkName={'Dashboard'} />
   <LogoWithLink  logo={null}  linkName={'Transactions'} />
   <LogoWithLink  logo={null}  linkName={'Schedules'} />
   <LogoWithLink  logo={null}  linkName={'Users'} />
   <LogoWithLink  logo={null}  linkName={'Settings'} />
</div>

 </div>;


 export default SideNav;