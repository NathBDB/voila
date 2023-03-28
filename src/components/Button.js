
import Button from '@mui/material/Button';

export default function MyButton({name, func}){
    
    return(
        <Button size='small' color='primary' onClick={func}>{name}</Button>
    )
}