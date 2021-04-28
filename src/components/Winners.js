import React, { useState, useEffect } from "react"
import Moment from 'moment';
import { Table } from 'react-bootstrap';

export default function Winners() {

  const URL = 'http://localhost:8000/winners'; // Url from dummy json-server

  const [data, setData] = useState([]); // Declare a new state variable, that takes an array

  // this will run, when the component is first initialized
  useEffect(() => {
    getData(); // call function that will fetch data from DB 
  }, []);


  const getData = async () => {
    const result = await fetch(URL); // fetch from dummy json-server
    const getResult = await result.json(); // parse result using json
    setData(getResult); // set state variable with the new result
  }

  console.log(data);

  return (
    <div>
      <h2>Winners</h2>
      <p>Her er en liste over gevinster fra alle udtrækningerne på lykkehjulet</p>
      <div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Price</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
        {data.map(res => ( // map over state variable data
            <tr key={res.id}>
              <td>{res.id}</td>
              <td>{res.user}</td>
              <td>{res.price}</td>
              <td>{Moment(res.date).format('Do MMMM YYYY, H:mm:ss')}</td>
            </tr>
          ))}
          </tbody>
        </Table>

      </div>

    </div>
  );
}