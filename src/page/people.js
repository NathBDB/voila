import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom'
import './people.css';

export default function PeoplePage(){
    const {id} = useParams(); //get the URL parameters
    
    const [data, setData] = useState([]);
    const [specie, setSpecies] = useState();

    useEffect(()=>{
         axios.get('https://swapi.dev/api/people/'+id)
         .then(function(res){
            console.log(res.data);
             setData(res.data)
                setSpecies(res.data.species[0])
        })

        // axios.get(specie)
        //  .then(function(res){
        //     setSpecies(res.name)
        //  })
    }, [])


    return(

        <div>
            <ul>
                <li>{data.name}</li>
                <li>{data.height} cm</li>
                <li>{data.hair_color} hair</li>
                <li>{data.skin_color} skin</li>
                <li>{specie} </li>
            </ul> 
        </div>
    )
}