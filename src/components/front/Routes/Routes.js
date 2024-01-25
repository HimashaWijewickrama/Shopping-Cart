// Routes.js
import React from "react";
import { Route, Switch } from "react-router-dom";
import Products from "../Products/Products";
import Signup from "../Signup/Signup";
import Cart from "../Cart/Cart";

const Routes = ({ productItems, cartItems, handleAddProduct }) => {
    return (
        <Switch>
            <Route path="/signup" component={Signup}/>
                {/* <Signup /> */}
            {/* </Route> */}
            <Route path="/cart" exact>
                <Cart cartItems={cartItems} handleAddProduct={handleAddProduct} />
            </Route>
            <Route path="/" exact>
                <Products productItems={productItems} handleAddProduct={handleAddProduct} />
            </Route>
        </Switch>
    );
};

export default Routes;
