import React,{useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';


// const products= 


const useStyles = makeStyles((theme) => ({
  root: {
    width: '450px',
    maxWidth: '65ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    textAlign:'right',
    marginRight:'30px'
  },
}));


export default function ProductsLst(props) {
  const [products, setProducts] = useState(
    [
      {
        "id": 0,
        "name": "קשת 1 ",
        "price": 200,
        "category": "babies"
      },
      {
        "id": 2,
        "name": "קשת 2",
        "price": 300,
        "category": "babies"
      },
  
      {
        "id": 4,
        "name": "קשת 4",
        "price": 300,
        "category": "babies"
      },
      {
        "id": 5,
        "name": "סיכה 1",
        "price": 300,
        "category": "babies"
      },
      {
        "id": 5,
        "name": "סיכה 1",
        "price": 300,
        "category": "babies"
      },
      {
        "id": 6,
        "name": "סיכה 2",
        "price": 300,
        "category": "babies"
      },
      {
        "id": 6,
        "name": "סיכה 2",
        "price": 300,
        "category": "babies"
      },
      {
        "id": 7,
        "name": "סיכה 3",
        "price": 300,
        "category": "occasions"
      },
      {
        "id": 8,
        "name": "סיכה 4",
        "price": 300,
        "category": "occasions"
      },
      {
        "id": 9,
        "name": "סיכה 5",
        "price": 300,
        "category": "occasions"
      },
      
      {
        "id": 17,
        "name": "סרטטט8",
        "price": 300,
        "category": "bags"
      },
      {
        "id": 18,
        "name": "סרטטט9",
        "price": 300,
        "category": "bags"
      },
      {
        "id": 19,
        "name": "תיק1",
        "price": 200,
        "category": "baby"
      },
      {
        "id": 19,
        "name": "תיק1",
        "price": 200,
        "category": "baby"
      },
      {
        "id": 19,
        "name": "תיק1",
        "price": 200,
        "category": "baby"
      },
      {
        "id": 19,
        "name": "תיק1",
        "price": 200,
        "category": "baby"
      },
      {
        "id": 19,
        "name": "תיק1",
        "price": 200,
        "category": "baby"
      },
      {
        "id": 19,
        "name": "תיק1",
        "price": 200,
        "category": "hair"
      }
  ]);

  
  function OnlyCheap(){
    let cheapProds=products.filter(prod=>prod.price<250);
    console.log(cheapProds)
    setProducts([...cheapProds])
    console.log(products)
  }
  

  return (
    <div>
      {/* {console.log(products)} */}
        {products.map((prod)=>
        <div>
{            (prod.category===props.category)?<h3>{prod.name}</h3>:''
}        </div>               
      )}
      {products.filter(prod=>prod.category===props.category).length>5?<h1> many products in category</h1>:""}
      <button onClick={OnlyCheap}>הסתר פריטים שמחירם יקר</button>
    </div>   
  );
}