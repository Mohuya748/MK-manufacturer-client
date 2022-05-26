import React from 'react';
import useProducts from '../../Hooks/useProducts';


const ManageProducts = () => {
    const [product, setProduct] = useProducts();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete the item?');
        if (proceed) {
            const url = `http://localhost:5000/parts/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = product.filter(service => service._id !== id);
                    setProduct(remaining);
                })
        }
    }


    return (
        <div >
            <h1 className='text-center text-3xl text-secondary'>Manage Products</h1>

            <div className='m-20'>
                {
                    product.map(product => <div key={product._id}>
                        <div className='conatainer'>
                            <div className="card card-compact m-5 bg-base-100 shadow-xl  ">
                                <figure><img src={product.img} alt="image" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-cyan-500">{product.name}</h2>
                                    <p><span className='font-bold'>Price :</span> {product.price}</p>
                                    <p><span className='font-bold'>Short Description :</span> {product.description}</p>
                                    <p><span className='font-bold'>Available Quantity :</span> {product.available_Quantity}</p>
                                    <p><span className='font-bold'>Minimum Order Quantity :</span> {product.min_order_Quantity}</p>
                                    <div className="card-actions justify-end">
                                        <button onClick={() => handleDelete(product._id)} className="btn btn-secondary">DELETE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;