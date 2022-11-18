import icon from '../../assets/img/notification-icon.svg'
import axios from 'axios'
import './style.css'
import { BASE_URL } from '../utils/request';

type props = {
  salesId:number;
}
function handleClick(Id: number){
  axios.get(`${BASE_URL}/sales/${Id}/notification`)
  .then((response)=>console.log('Sucesso'))
}
function NotificationButton({salesId} : props) {
  return(
    <div className="dsmeta-red-btn" onClick={()=>handleClick(salesId)}>
      <img src={icon} alt="icon"/>
    </div>
  )
}
  
export default NotificationButton
  