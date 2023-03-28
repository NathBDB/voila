import './HomePage.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

import AlertError from './components/Alert';
import CardPersonne from './components/Card';
import MyButton from './components/Button';

import CircularProgress from '@mui/material/CircularProgress';


function HomePage() {
   
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)

    useEffect(()=>{
        setLoading(true)
        axios.get('https://swapi.dev/api/people')
        .then(function(res){
            setData(res.data.results);

        }).catch((error)=>{
            console.log("err")
            setError(true)

        }).finally(() => {
            setLoading(false);
        });
    },[])

    return (
        
        <div className="App">
            <header className="App-header">
                <MyButton name="next" ></MyButton>
                <MyButton name="add" ></MyButton>
            </header>
            {loading  ? (
            
            <div className='div-load'>
                <CircularProgress />
            </div>
            )
            :error ? <AlertError title="super bonne cette erreur" description="bah super mec t 1 cr4ck" /> : 
            
            (
            <ul>
                {data.map((pers, i) =>(
                <li key={i}><CardPersonne personne={pers} id = {i+1}></CardPersonne></li>
                ))}
            </ul>
            )}
            
            
        </div>
    );
}

export default HomePage;
