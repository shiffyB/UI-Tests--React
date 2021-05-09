import React, { useContext } from 'react';
import {useParams } from 'react-router-dom'
import {productsContext} from './ProductsContext'
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { Theme, withStyles, createStyles } from '@material-ui/core/styles';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default function Logo(props) {
    const StyledBadge = withStyles((theme) =>
    createStyles({
      badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
      },
    }),
  )(Badge);
  return (
      <div>
          
          <img src="./pics/logo.png" height="100px" style={{display:"Block" ,marginLeft:"auto" ,marginRight:"auto" ,marginBottom:"10px",marginTop:"10px"}} ></img>
<Link to="/Cart">
<IconButton aria-label="cart" style={{display:"block",marginRight:"auto"}}>
    <ShoppingCartIcon style={{}}/>
</IconButton>
</Link>
          
      </div>
  );
}
