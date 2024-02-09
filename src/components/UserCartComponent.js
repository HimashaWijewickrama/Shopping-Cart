import React from 'react';
import { MdOutlineDeleteOutline } from "react-icons/md";
import Swal from 'sweetalert2';
import Button from 'react-bootstrap/Button'; // Import the Button component
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function UserCartComponent({
    cartCourses,
    deleteCourseFromCartFunction,
    totalAmountCalculationFunction,
    setCartCourses,
    isCartVisible,
    setIsCartVisible,
}) {

    const handleClear = () => {

        Swal.fire({
            title: "Are you sure?",
            html: '<b>If you click this button, the added items in your cart will be removed</b>',
            icon: "warning",
            footer: '<b>You wont be able to revert this!</b>',
            showCancelButton: true,
            confirmButtonText: "Yes, go ahead!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                setCartCourses([]);
                Swal.fire({
                    title: "Done!",
                    html: '<b>Your cart has been cleared, successfully</b>',
                    icon: "success"
                });
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                Swal.fire({
                    title: "Cancelled!",
                    html: '<b>Your cart items have been saved, successfully:)</b>',
                    icon: "success"
                });
            }
        });
    }

    return (
        <div className={`cart-container ${isCartVisible ? 'active' : ''}`}>
            <div className='cart-contain'>
                <MdOutlineDeleteOutline size={20} style={{ color: "red", marginLeft: '200px' }} onClick={handleClear} />
                <h2>My Cart</h2>
                {cartCourses.length === 0 ? (
                    <p className="empty-cart">Your cart is empty.</p>
                ) : (
                    <div>
                        <ul>
                            {cartCourses.map((item) => (
                                <li key={item.product.id} className="cart-item">
                                    <div>
                                        <div className="item-info">
                                            <div className="item-image">
                                                <img src={item.product.image}
                                                    alt={item.product.name} />
                                            </div>
                                            <div className="item-details">
                                                <h3>{item.product.name}</h3>
                                                <p>Price: Rs.{item.product.price}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="item-actions">
                                                <Button variant="outline-danger" // Bootstrap danger button
                                                    onClick={() =>
                                                        deleteCourseFromCartFunction(item.product)}>
                                                    Remove Product
                                                </Button>
                                                <div className="quantity">
                                                    <button type="button" className="btn btn-success"
													style={{ margin: "1%" }}
                                                        onClick={(e) => {
                                                            setCartCourses((prevCartCourses) => {
                                                                const updatedCart = prevCartCourses.map(
                                                                    (prevItem) =>
                                                                        prevItem.product.id === item.product.id
                                                                            ? {
                                                                                ...prevItem, quantity:
                                                                                    item.quantity + 1
                                                                            }
                                                                            : prevItem
                                                                );
                                                                return updatedCart;
                                                            })
                                                        }}>+</button>
                                                    <p className='quant'>{item.quantity} </p>
                                                    <button
													type="button" 
													className="btn btn-danger"
                                                        onClick={(e) => {
                                                            setCartCourses((prevCartCourses) => {
                                                                const updatedCart = prevCartCourses.map(
                                                                    (prevItem) =>
                                                                        prevItem.product.id === item.product.id
                                                                            ? {
                                                                                ...prevItem, quantity:
                                                                                    Math.max(item.quantity - 1, 0)
                                                                            }
                                                                            : prevItem
                                                                );
                                                                return updatedCart;
                                                            })
                                                        }}>-</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="checkout-section">
                            <div className="checkout-total">
                                <p className="total">Total Amount:
                                    Rs.{totalAmountCalculationFunction()}
                                </p>
                            </div>
                            <Button
                                variant="outline-primary" // Set the button variant
                                disabled={cartCourses.length === 0 || totalAmountCalculationFunction() === 0}
                            >
                                Proceed to Payment
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default UserCartComponent;
