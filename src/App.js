import React, {useEffect} from 'react'
import axios from 'axios'
import './App.css';

import {ExportToExcel} from './ExportToExcel'

function App() {
  const [datas, setDatas] = React.useState([])
  const [newData, setNewData] = React.useState([])
  const [finalData, setFinalData] = React.useState([]);
  const fileName = "myfile"; // here enter filename for your excel file

  useEffect(() => {
    const API_DATA = [
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      }
    ]
   setTimeout(() => {
      const data = [{
        fileName:"Product",
        data: API_DATA
      }]
      setDatas(data)
    }, 1000);
  }, [])
  useEffect(()=> {
    const API_DATA_NEW = [
      {
        "userId": 1,
        "id": 1,
        "name": "Seema"
      },
      {
        "userId": 1,
        "id": 2,
        "name": "kamal"
      },
      {
        "product":"abc"
      }

    ]
    setTimeout(() => {
      let res = [...datas]
      console.log("ressssssssssss", res)
      res.push({
        fileName:"Employee",
        data:API_DATA_NEW
      })
     
      setFinalData(res)
    },1000)
  },[datas])

  return (
    <div className="App">
      <ExportToExcel finalDataSend={finalData} apiData={datas} apiNewData={newData} fileName={fileName} />
    </div>
  );
}

export default App;
