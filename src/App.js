import React,{useEffect,useState} from "react";
import Card from "./Card";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contentpage from "./Contentpage";
import axios from "axios";

function App() {
  document.title = "Post"
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("useEffect is running...");
    axios.get(`${process.env.REACT_APP_BASE_URL}/posts`) // Replace with your API
      .then(response => {
        setData(response.data); // Store data in state
       
        
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);
  
  return (
   
    <Router>
      <Routes>
        {/* Main Page with Cards */}
        <Route
          path="/"
          element={
            <div className="container">
              {data.map((item) => (
                
                <Card key={item._id} id={item._id} title={item.title}/>
              ))}
            </div>
          }
        />

        {/* Content Page Route */}
        <Route path="/content/:id" element={<Contentpage/>} />
      </Routes>
    </Router>
   
  );

}

export default App;
