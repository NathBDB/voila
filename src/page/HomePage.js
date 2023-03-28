import logo from './logo.svg';
import './HomePage.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

import { useParams, Link } from 'react-router-dom'

function People({personne, id}){
    let key = "/people/"+id
    return(
    <div className='People'>
      
        <p>{personne.name}</p>
        <p>{personne.gender}</p>
      
      <Link to={key}>
        <button>more</button>
      </Link>
    </div>
  );
}

function HomePage() {

    const {id} = useParams(); //get the URL parameters
   
    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get('https://swapi.dev/api/people')
        .then(function(res){
            setData(res.data.results);
        }).catch((error)=>{
            console.log(error);
            
        })
    })

        return (
            <div className="App">
        <header className="App-header">
        <ul>
            {data.map((pers, i) =>(
            <li key={i}><People personne={pers} id={i+1}></People></li>
            ))}
        </ul>
        </header>
        </div>
    );
}

export default HomePage;
