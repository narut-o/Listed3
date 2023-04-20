import './style.css';
import {FaDownload} from 'react-icons/fa'
import {AiOutlineTags,AiOutlineLike} from 'react-icons/ai'
import {FiUsers} from 'react-icons/fi'


 const WidgetSmall=({title, details, colorClass,icon})=><div className={colorClass}>
  <div className='icon-div'><div className='widget-icon'>{icon}</div></div> 
   <div className='widget-title '>{title}</div>
   <div className='widget-value'>{details}</div>
 </div>

 const SmallWidgetsContainer=()=><div className='widget-small-container'>
   <div className='widget-small-inner-container'>
    <WidgetSmall title={'Total Revenues'} details={'$2,129,430'} colorClass={'small-color-1'} icon = {<FaDownload/>} />
    <WidgetSmall title={'Total Transactions'} details={'1,520'} colorClass={'small-color-2'}icon={<AiOutlineTags/>}/>
    <WidgetSmall title={'Total Likes'} details={'9,721'} colorClass={'small-color-3'}icon={<AiOutlineLike/>}/>
    <WidgetSmall title={'Total Users'} details={'892'} colorClass={'small-color-4'}icon ={<FiUsers/>}/>
    </div>

 </div>
 
 export default SmallWidgetsContainer;