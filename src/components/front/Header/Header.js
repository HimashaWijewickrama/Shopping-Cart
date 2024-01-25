import "./Header.css";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
    return (
        <div className="header">
            <div>
                <h1>
                    <a href="/" style={{ textDecoration: "none", color: "white", paddingLeft: "10px" }}>Fancy</a>
                </h1>
            </div>
            <div className="header-links">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="/signup">Sign Up</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="/cart">
                            <AiOutlineShoppingCart size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div >
    );
};

export default Header;
