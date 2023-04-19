import './style.css';


 const WidgetSmall=({title, details, colorClass})=><div className={colorClass}>
   <div className='widget-icon'></div>
   <div className='widget-title '>{title}</div>
   <div className='widget-value'>{details}</div>
 </div>

 const SmallWidgetsContainer=()=><div className='widget-small-container'>
   <div className='widget-small-inner-container'>
    <WidgetSmall title={'Total Revenues'} details={'$2,129,430'} colorClass={'small-color-1'} />
    <WidgetSmall title={'Total Transactions'} details={'1,520'} colorClass={'small-color-2'}/>
    <WidgetSmall title={'Total Likes'} details={'9,721'} colorClass={'small-color-3'}/>
    <WidgetSmall title={'Total Users'} details={'892'} colorClass={'small-color-4'}/>
    </div>

 </div>
 
 export default SmallWidgetsContainer;