import React, {useState, useEffect} from 'react';
import Spinner from '../components/Spinner';
import axios from 'axios';
import {Link} from 'react-router-dom'; 

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    axios
      .get('http://localhost:3000/api/products')
      .then((response)=>{
        setProducts
      })
  }, [])

  return (
    <div></div>
  )
}

export default Home