import axios from "axios";
import Home from "./components/Home/Home";
import { useEffect,useState } from "react";
function App() {

const [getItems, setGetItems] = useState([])

useEffect(() => {
  
  fetchData()

}, [])

  const fetchData= () => {
const options = {
  method: 'GET',
  url: 'https://aliexpress-datahub.p.rapidapi.com/api',
  params: {num_iid: '32791950154', api: 'item_detail'},
  headers: {
    'X-RapidAPI-Key': 'ba535cf422msh968cca6333e6247p17404ajsn2e0a3939fd97',
    'X-RapidAPI-Host': 'aliexpress-datahub.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
 console.log(response.data.result.item.images)
  setGetItems(response.data.result.item.images)
 
}).catch(function (error) {
	console.error(error);
});
  }
  return (
<div>
  
 <Home getItems={getItems} />
  </div>
  );
}

export default App;
