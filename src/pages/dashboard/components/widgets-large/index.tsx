import { CChart } from '@coreui/react-chartjs';
import './style.css';


 const WidgetLarge =({showChart})=>{
   if(showChart)
   {
     return( <div className='widget-large'>
        <CChart 
   
   type="pie"
   data={{
     labels: ['Basic Tees','Custom Short pants','Super Hoddies'],
     datasets: [
       {
         data: [55, 31,14],
         backgroundColor: ['#98D89E', '#F6DC7D', '#EE8484'],
       },
     ],
   }}
 />
     </div>)
   }else return (<div className='widget-large'></div>)
 }

 const LargeWidgetsContainer=()=>
   <div className='widget-large-container'>
   <div className='widget-large-inner-container'>
    <WidgetLarge showChart = {true}/>
    <WidgetLarge showChart = {false}/>
   
    </div>

 </div>

 export default LargeWidgetsContainer;
 