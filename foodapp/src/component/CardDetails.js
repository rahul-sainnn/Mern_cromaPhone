import React from 'react';
import Table from 'react-bootstrap/Table';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from "../Redux/features/CartSlice";
import Footer from './Footer';
import Header from './Header';

function CardDetails(element) {
  const getdata = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const dlt = (elementId) => {
    dispatch(removeFromCart(elementId));
  }

  return (
    <>
      <Header />

      <div className="containery">
        <div className='divtext'>       
          <b><h2>Cart-Details</h2></b>
          <hr />
        </div>
        <section className='containerx'>
          {getdata.length === 0 ? (
            <div className="itemdetails">
              <p>Your cart is empty.</p>
            </div>
          ) : (
            <div className="itemdetails">
              {getdata.map((element) => (
                <div key={element.id} className="contbox">
                  <div className="items-imgs">
                    <img src={element.imgdata} alt="" />
                  </div>
                  <div className="details">
                    <Table>
                      <tr>
                        <td>
                          <p><strong>Restaurant</strong>: {element.name}</p>
                          <p><strong>Price</strong>: ₹ {element.price}</p>
                          <p><strong>Category</strong>: {element.category}</p>
                          <p><strong>Rating :</strong> <span style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>{element.rating} ★	</span></p>
                        </td>
                        <td>
                          <strong>Quantity:{""}</strong>
                          {getdata.find((cartItem) => cartItem.id === element.id)?.quantity || 0}
                          <p><strong>Remove</strong>: <span><DeleteIcon className='fas fa-trash' onClick={() => dlt(element.id)} style={{ color: "red", fontSize: 20, cursor: "pointer" }} /></span></p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
        <Footer />
      </div>
    </>
  );
}

export default CardDetails;
