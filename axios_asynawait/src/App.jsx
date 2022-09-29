import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  const getApiData = async () => {
    //error handelling
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setMyData(res.data);

    } catch (error) {
      setIsError(error.message);
    }

  };
  // using aync await
  useEffect(() => {
    getApiData();

  }, []);
  return (
    <>
      <h1>Axios tutorial - how to fetch data using Axios by making API call</h1>
      {isError != "" && <h2>{isError}</h2>}
      <div className='grid'>
        {myData.map((post) => {
          const { id, title, body } = post;
          return <div className='card' key={id}>
            <h2>{title.slice(0, 15)}</h2>
            <p>{body}</p>
          </div>
        })}
      </div>
    </>
  )
}

export default App
