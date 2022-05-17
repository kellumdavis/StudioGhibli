import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function Person (props) {

  const url = `https://ghibliapi.herokuapp.com/people/`;

  const [personInfo, setPersonInfo] = useState([]);
 

  useEffect(() => {
    const getPersonInfo = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setPersonInfo(data);
      } catch (err) {
        console.log("Ran into a problem ERROR");
      }
    };
    
    getPersonInfo();
  }, []);
  return (
    <div>
      {personInfo.map((people, idx) => {
        const id = people.url.split("/people/").slice(1);
    
        return (
          <div key={idx}>
            <Link to={`/people/${id}`} >
              <h2>{people.name}</h2>
              <img src={people.image} alt={people.title}/>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Person;