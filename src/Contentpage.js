import React ,{useEffect,useState}from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet-async"

function Contentpage() {
  const { id } = useParams();
 const idt = id .replace(/}$/, "");
  
  const [data, setData] = useState([]);
  useEffect(() => {
    
    axios.get(`${process.env.REACT_APP_BASE_URL}/posts/${idt}`) // Replace with your API
      .then(response => {
        setData(response.data); // Store data in state
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
       
  }, []);
 
    document.title =  data.title;

  
  return (
    <>
      <Helmet>
        <title>About Us - My React App</title>
      </Helmet>
 
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* Day Section */}
      <h1 style={{ marginBottom: "50px", marginTop: "50px" }}>{data.title}</h1>


      <div className="text-container" dangerouslySetInnerHTML={{__html:data.content}}>

      </div>
    </div>
    </>
  );
};


export default Contentpage