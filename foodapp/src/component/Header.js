import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { useSelector, useDispatch } from 'react-redux'; // Import useDispatch
//import { addTocart } from '../Redux/features/CartSlice';
import CardData from './CardData';
import HomeIcon from '@mui/icons-material/Home';

function Header() {

  const getdata = useSelector((state) => state.cart);
  // console.log(getdata);

  const [data, setData] = useState(CardData);
  const [searchInput, setSearchInput] = useState("");




  const [menu, setmenu] = useState();
  const open = Boolean(menu);

  const handleClick = (event) => {
    setmenu(event.currentTarget);
  };

  // const handleClose = () => {
  //   setmenu(null);
  // };





  // const cart = useSelector(state => state.cart);
  // const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  // const dispatch = useDispatch(); // Declare dispatch

  // const addTocartHandler = (item) => {
  // dispatch(addTocart(item));
  // }

  return (
    <>
      <div className='mainboxxyz'>
        <div>
          <Navbar className='mainbox'>




            <NavLink to="/home"><img src='https://logos-world.net/wp-content/uploads/2021/02/Just-Eat-Logo-2001-2011.png' alt='img' id='img' /></NavLink>


            <NavLink to="/home" style={{ textDecoration: "none", color: "white", cursor: "pointer" }} id='home' ><HomeIcon /></NavLink>
            <NavLink to="/login" style={{ textDecoration: "none", color: "white", cursor: "pointer" }} id='login' >Login</NavLink>
            <NavLink to="/signup" style={{ textDecoration: "none", color: "white", cursor: "pointer" }} id='signup' >SignUp</NavLink>
            <Badge className="btnx" badgeContent={getdata.length} color="secondary"
              id="demo-positioned-button"
              aria-controls={open ? 'demo-positioned-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}>
              <NavLink to="/cart">
                <ShoppingCartIcon color="action" style={{ color: 'white', cursor: "pointer" }} />
              </NavLink>
            </Badge>



            {/* 

        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={menu}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        > */}
            {/* {
            getdata.length ?
              <div className="carddetails">
            <table>
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Restaurent</th> 
                </tr>
              </thead>
              {
                getdata.map((e)=>{
                  return(
                     <>
                      <tr>
                        <td>
                          <img src="e.imgdata" alt="" />
                        </td>
                        <td>
                          <p>{e.rname}</p>
                        </td>
                      </tr>
                     </>
                  )
                })
              }
            </table>  
          </div>:
              <div className="carddetails">
              <CloseIcon className='fas fa-trash'/>
          <p>Your cart is empty</p>
        </div>
        } */}

            {/* 
      </Menu> */}
          </Navbar>
        </div>
      </div>
    </>
  );
}

export default Header;