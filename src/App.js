import React from "react";
import logo from "./logo.svg";
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
import {useState, useEffect} from 'react';

import ProductsLst from './ProductsLst';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'black',
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 48,
    padding: '0 30px',
    direction:'rtl',
    marginBottom: "10px"
  },
});




function App() {
  const classes = useStyles();
  // const [products, setProducts] = useState({
  //   products : [],
  //   setProducts : (prod) => {
  //     setProducts({
  //       products : prod,
  //       setProducts : products.setProducts,
  //     })
  //   }
  // });
  // useEffect(() => {
  //   console.log("i am fetching again!!!!!!!!!!!!")
  //   axios.get('/data.json') 
  //   .then((data) => {
  //     console.log(data.data)
  //     products.setProducts(data.data.products);
  //   })
  // }, []);
  return (
      <div className="app">
      <ProductsLst category="babies" />
      </div>
    
  );
}
export default App;