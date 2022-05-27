import { useEffect, useState } from "react";

const useProducts = () => {
    const [product, setProduct] = useState([]);

    useEffect( ()=>{
        fetch('https://protected-caverns-27615.herokuapp.com/parts')
        .then(res => res.json())
        .then(data => setProduct(data));
    }, []);
    return [product, setProduct]
    
};

export default useProducts;