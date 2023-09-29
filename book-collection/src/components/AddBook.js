import React from 'react'
import { FormLabel, TextField, Box, Button,FormControlLabel,Checkbox} from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AddBook = () => {
    const history = useNavigate();
    const [input,setInput] = useState({
        name: '',
        description: '',
        price: '',
        author: '',
        image:''
    });
    const [checked,setChecked] = useState(false);
    const handler = (e) =>{
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };
    const sendRequest = async() => {
        axios.post("http://localhost:5000/books",{
            name:String(input.name),
            author: String(input.author),
            description: String(input.description),
            price: Number(input.price),
            image: String(input.image),
            available: Boolean(checked)
        }).then(res=>res.data);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input,checked);
        sendRequest().then(()=>history('/books'));
    }
  return (
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
   )
}

export default AddBook
