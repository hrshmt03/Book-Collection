import React, {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Checkbox, FormLabel, FormControlLabel, Box, TextField } from '@mui/material';

const BookDetail = () => {
    const [input, setInput] = useState({})
     const id = useParams().id;
     const [checked,setChecked] = useState(false);
     const history = useNavigate();
    useEffect(() => {
        const fetchHandler = async() => {
            await axios
            .get(`http://localhost:5000/books/${id}`)
            .then((res) => res.data).then(data=>setInput(data.book));
        };
        fetchHandler();
    },[id]);

    const sendRequest = async() => {
        await axios.put(`http://localhost:5000/books/${id}`,{
            name:String(input.name),
            author: String(input.author),
            description: String(input.description),
            price: Number(input.price),
            image: String(input.image),
            available: Boolean(checked)
        }).then(res=>res.data)
    }
    const handleSubmit = (e) =>{
     e.preventDefault();
     sendRequest().then(()=>history("/books"));
    } 
    const handler = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    } 
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <Box 
        display="flex" 
        flexDirection="column" 
        justifyContent={'center'} 
        maxWidth={700}
        alignContent={'center'}
        alignSelf={'center'}
        marginLeft={"auto"}
        marginRight={"auto"}
        marginTop={1}
        > 
    <FormLabel>Name</FormLabel>
     <TextField value={input.name} onChange={handler} margin="normal" fullWidth variant="outlined" name="name"></TextField>
     <FormLabel>Author</FormLabel>
     <TextField value={input.author} onChange={handler} margin="normal" fullWidth variant="outlined" name="author"></TextField>
     <FormLabel>Description</FormLabel>
     <TextField value={input.description} onChange={handler} margin="normal" fullWidth variant="outlined" name="description"></TextField>
     <FormLabel>Price</FormLabel>
     <TextField value={input.price} onChange={handler} type="number" margin="normal" fullWidth variant="outlined" name="price"></TextField>
     <FormLabel>Image</FormLabel>
     <TextField value={input.image} onChange={handler} margin="normal" fullWidth variant="outlined" name="image"></TextField>
     <FormControlLabel control={<Checkbox checked={checked} onChange={()=>setChecked(!checked)}/>}
     label="Available"/>
     <Button variant="contained" type="submit">Add Book</Button>
     </Box>
    </form>
    </div>
  )
}

export default BookDetail