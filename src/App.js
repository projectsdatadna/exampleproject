
import './App.css';
import Axios from 'axios';

function App() {
  const getData = () => {
    Axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=de76e7cdc7f746d898982e7782964c2d&q=india")
    .then((response) => {
      console.log(response)

    })

  }
  const getNews = () => {
    Axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=de76e7cdc7f746d898982e7782964c2d&q=india")
    .then((response)=>{
      console.log(response)
    })

  }
  return (
    <>
    <div>
      <button className='App' onClick={getData}>Get News</button>
    </div>
    </>
  );
}

export default App;
