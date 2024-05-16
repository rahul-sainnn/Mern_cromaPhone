import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch, useSelector } from 'react-redux';
import CardData from './CardData';
import { addTocart } from '../Redux/features/CartSlice';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

//import CardDetails from './CardDetails';
// import Items from './Items';
import Header from './Header';

const Cards = (element) => {
  // const cartItems = useSelector((state) => state.cart);

  const [data, setData] = useState(CardData);
  const [searchInput, setSearchInput] = useState("");
  const getdata = useSelector((state) => state.cart);


  const [categoryFilter, setCategoryFilter] = useState("all"); // Initialize with "all" to show all items


  const dispatch = useDispatch();

  const send = (e) => {
    //  console.log(e);
    dispatch(addTocart(e));
  }




  const filterElementBycategory = (category) => {
    setCategoryFilter(category);
    if (category === "all") {
      setData(CardData);
    } else {
      const filteredData = CardData.filter((element) => element.category === category);
      setData(filteredData);
    }
  };






  const filterElementBySearch = (input) => {
    console.log('Input:', input); // Add this line for debugging
    setSearchInput(input);
    if (input.trim() === "") {
      // If the input is empty, show all items
      setData(CardData);
    } else {
      // Filter items based on the search input
      const filteredData = CardData.filter((element) =>
        element.name.toLowerCase().includes(input.toLowerCase())
      );
      console.log('Filtered Data:', filteredData); // Add this line for debugging
      setData(filteredData);
    }
  };




  // const filterElementBycategory = (price) => {
  //   if (price === "All") {
  //     categoryFilter(null);
  //   } else {
  //     categoryFilter(parseInt(price));
  //   }
  // };



  // const addTocartHandler = (element) => {

  //   dispatch(addTocart(element));
  //   const existingItem = cartItems.find((cartItem) => cartItem.id === element.id)
  //   if (existingItem) {
  //     dispatch(
  //       addTocart({ ...existingItem, quantity: existingItem.quantity + 1 })
  //     );
  //   } else {
  //     dispatch(addTocart({ ...element, quantity: 1 }));
  //   }

  // }


  return (
    
    <div className='container'>
     <Header />





      <div className='addtocart'>
        <Carousel intervalTime={3000} data-bs-theme="dark">
          <Carousel.Item>
            <img className='theimg' src='https://img.freepik.com/premium-photo/typical-set-fast-food-wooden-table-beef-burger-bowl-salty-french-fries-ketchup_396607-18741.jpg' alt='img' />
          </Carousel.Item>
          <Carousel.Item>
            <img className='theimg' src='https://img.freepik.com/premium-photo/unhealthy-products-food-bad-figure-skin-heart-teeth-assortment-fast-carbohydrates_933530-3596.jpg' alt='img' />
          </Carousel.Item>
          <Carousel.Item>
            <img className='theimg' src='https://img.freepik.com/premium-photo/background-fast-food-burger-junk-american_616652-1337.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696723200&semt=ais' alt='img' />
          </Carousel.Item>
        </Carousel>






        <div className="boxcontainer">
          <div className="input">
            <input style={{ height: "50px", width: "60vh", }}
              type="text"
              placeholder="What are you looking for?"
              value={searchInput}
              onChange={(e) => filterElementBySearch(e.target.value)}
            />
          </div>

          <div className="category-filter-buttons">
            <button text="button" onClick={() => filterElementBycategory("starter")}>
              Starter
            </button>
            <button onClick={() => filterElementBycategory("main-course")}>
              Main-Course
            </button>
            <button onClick={() => filterElementBycategory("dessert")}>
              Dessert
            </button>
            <button onClick={() => filterElementBycategory("all")}>
              Show All
            </button>
          </div>

        </div>



        <div className='flex-container'>
          {data.map((element) => {
            return (
              <div className='row' key={element}>
                <Card>
                  <Card.Img variant="pic" src={element.imgdata} />
                  <Card.Body>
                    <Card.Title>{element.name}</Card.Title>
                    Quantity:{""}
                    {getdata.find((cartItem) => cartItem.id === element.id)?.quantity || 0}
                    <Card.Text>price: ₹{element.price}</Card.Text>
                    <div className='center-text'>
                      <Button className='btnaddtocart' onClick={() => send(element)} variant="primary">Add to cart</Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>

        <div className='footer'>
          <div class="container">
            <div class="footer-content">
              <div class="footer-logo">
                <img className='xyzpic' src="https://logos-world.net/wp-content/uploads/2021/02/Just-Eat-Logo-2001-2011.png" alt="Food Site Logo" />
              </div>

              <div class="footer-menu">
                <ul>
                  <li><a href="https://www.instagram.com/hey_maskman/"><InstagramIcon /></a></li>
                  <li><a href="https://www.linkedin.com/in/saurabh-sharma-550279274/"><LinkedInIcon /></a></li>
                  <li><a href="about.html">About Us</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </div>

              <div class="footer-contact">
                <p>Contact Us:</p>
                <p>Email: contact@foodsite.com</p>
                <p>Phone: (123) 456-7890</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;