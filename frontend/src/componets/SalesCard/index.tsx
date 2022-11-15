import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import NotificationButton from '../notificationButton'
import './style.css'
function SalesCard() {
    const min = new Date(new Date().setDate(new Date().getDate() - 365))
    const max = new Date

    const [minDate, setMinDate] = useState(min)
    const [maxDate, setMaxDate] = useState(max)
    return(
        <div className="dsmeta-card">
            <h3 className="dsmeta-sales-title">Vendas</h3>
            <div>
                <div className="dsmeta-form-control-container">
                    <DatePicker 
                        selected={minDate}
                        onChange={(date : Date)=> setMinDate(date)}
                        className="dsmeta-form-control"
                        dateFormat={"dd/MM/yyyy"}
                    />
                </div>
            <div className="dsmeta-form-control-container">
                    <DatePicker 
                        selected={maxDate}
                        onChange={(date : Date)=>setMaxDate(date)}
                        className="dsmeta-form-control"
                        dateFormat={"dd/MM/yyyy"}
                    />
            </div>
        </div>

        <div>
            <table className="dsmeta-sales-table">
                <thead>
                    <tr>
                        <th className="show992">ID</th>
                        <th className="show576">Data</th>
                        <th>Vendendor</th>
                        <th className="show992">Visitas</th>
                        <th className="show992">Vendas</th>
                        <th>Total</th>
                        <th>Notificar</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="show992">#342</th>
                        <th className="show576">12/11/2022</th>
                        <th>Anakin</th>
                        <th className="show992">15</th>
                        <th className="show992">10</th>
                        <th>R$ 55000.00</th>
                        <th>
                            <div className="dsmeta-red-btn-container">
                                <NotificationButton/>
                            </div>    
                        </th>
                    </tr>
                    
                    <tr>
                        <th className="show992">#342</th>
                        <th className="show576">12/11/2022</th>
                        <th>Anakin</th>
                        <th className="show992">15</th>
                        <th className="show992">10</th>
                        <th>R$ 55000.00</th>
                        <th>
                            <div className="dsmeta-red-btn-container">
                                <NotificationButton/>
                            </div>    
                        </th>
                    </tr>
                    <tr>
                        <th className="show992">#342</th>
                        <th className="show576">12/11/2022</th>
                        <th>Anakin</th>
                        <th className="show992">15</th>
                        <th className="show992">10</th>
                        <th>R$ 55000.00</th>
                        <th>
                            <div className="dsmeta-red-btn-container">
                                <NotificationButton/>
                            </div>    
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    )
}
  
export default SalesCard