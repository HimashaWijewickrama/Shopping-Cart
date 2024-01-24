import { Link } from "react-router-dom";
import "./Header.css";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
    return (
        <div className="header">
            <div>
                <h1>
                    <Link to="/" className="Logo">
                        Fancy
                    </Link>
                </h1>
            </div>
            <div className="header-links">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/cart">
                            <AiOutlineShoppingCart size={30}/>
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    )

}
export default Header;