import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import MyButton from './Button';
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function CardPersonne({personne, id}){
    
    const deleteCard = () => {
        axios.delete(`https://swapi.dev/api/people/${id}`)
        .then(() => console.log("sup")).catch(err => console.log(err));
    }
    
    let adresse = "/people/"+id
    return(
    <Card>
        <CardContent>
            <h5>{personne.name}</h5>
            <p>{personne.gender}</p>
        </CardContent>

        <CardActions>
            <Link to={adresse}>
                <MyButton name="Datails" func={()=>{}}></MyButton>
            </Link>
                
                <MyButton name="delete" func={deleteCard}></MyButton>
        </CardActions>
    </Card>
  );
}