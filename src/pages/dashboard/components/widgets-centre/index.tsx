import { CChart } from '@coreui/react-chartjs';
import './style.css';

const WidgetCenter =()=><div className='widget-centre'>
   <CChart
  type="line" 
  data={{
    labels: ["week1","week2","week3","week4"],
    datasets: [
      {
        label: "Guest",
        backgroundColor: "rgba(220, 220, 220, 0.2)",
        borderColor: "rgba(220, 220, 220, 1)",
        pointBackgroundColor: "rgba(220, 220, 220, 1)",
        pointBorderColor: "#fff",
        data: [0, 200, 121, 390, 100, 40, 390, 80, 500]
      },
      {
        label: "User",
        backgroundColor: "rgba(151, 187, 205, 0.2)",
        borderColor: "rgba(151, 187, 205, 1)",
        pointBackgroundColor: "rgba(151, 187, 205, 1)",
        pointBorderColor: "#fff",
        data: [50, 120, 280, 29, 7, 250, 128, 70, 60]
      },
    ],
  }}
/>
</div>

const CenterWidgetsContainer=()=><div className='widget-center-container'>
   <div className='widget-center-inner-container'>
    <WidgetCenter/>
    
    </div>

 </div>
 
 export default CenterWidgetsContainer;