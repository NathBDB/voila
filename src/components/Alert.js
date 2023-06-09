import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function AlertError({title, description}){
    return(
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity='error'>
                <AlertTitle>{title}</AlertTitle>
                {description}
            </Alert>
        </Stack>
    );
}