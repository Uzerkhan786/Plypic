import { useEffect, useState } from "react";

export const GetAllProducts = async () => {
    const [products, setProducts] = useState();

    useEffect(() => {
        async function fetchProducts() {
            const res = await fetch('http://localhost:3000/api/v1/products');
            const json = await res.json();
            console.log(json);
            setProducts(json.data)
        }
        fetchProducts();

    }, [])
    return products

}