import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Sale } from "../models/sales";
import NotificationButton from "../notificationButton";
import { BASE_URL } from "../utils/request";
import "./style.css";
function SalesCard() {
  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const max = new Date();

  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(max);

  const [sales, setSales] = useState<Sale[]>([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/sales`)
      .then((response) => setSales(response.data.content));
  }, []);

  return (
    <div className="dsmeta-card">
      <h3 className="dsmeta-sales-title">Vendas</h3>
      <div>
        <div className="dsmeta-form-control-container">
          <DatePicker
            selected={minDate}
            onChange={(date: Date) => setMinDate(date)}
            className="dsmeta-form-control"
            dateFormat={"dd/MM/yyyy"}
          />
        </div>
        <div className="dsmeta-form-control-container">
          <DatePicker
            selected={maxDate}
            onChange={(date: Date) => setMaxDate(date)}
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
            {sales.map((sale) => {
              return (
                <tr key={sale.id}>
                  <th className="show992">{sale.id}</th>
                  <th className="show576">{new Date(sale.data).toLocaleDateString()}</th>
                  <th>{sale.sellerName}</th>
                  <th className="show992">{sale.visited}</th>
                  <th className="show992">{sale.deals}</th>
                  <th>{sale.amount.toFixed(2)}</th>
                  <th>
                    <div className="dsmeta-red-btn-container">
                      <NotificationButton />
                    </div>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SalesCard;
