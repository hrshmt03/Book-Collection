import React, { useState } from 'react'
import {AppBar, Toolbar, Typography,Tabs, Tab} from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import {NavLink} from 'react-router-dom';
const Header = () => {
    const [value, setValue] = useState();
  return (
    <div>
      <AppBar sx={{backgroundColor: '#232F3D'}} position ='sticky'>
        <Toolbar>
            <NavLink to="/" style={{color:"white"}}>
        <Typography>
            <BookIcon/>
             </Typography></NavLink>
               <Tabs 
                 sx={{ml: "auto"}}
             textColor="inherit" 
             indicatorColor="primary" 
             value={value} 
             onChange={(e,val)=>setValue(val)}
             >
                 <Tab LinkComponent={NavLink} to="/add" label="Add item" />
                     <Tab LinkComponent={NavLink} to="/books" label="Books" />
                     <Tab LinkComponent={NavLink} to="/about" label="About Us" />
             </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
