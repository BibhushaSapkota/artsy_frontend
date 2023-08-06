import './Product.css'
import { useNavigate } from 'react-router-dom';
const Product=({products})=>{
    const navigate=useNavigate();
    const handleClick = () => {
        if (localStorage.getItem('token')) {
            navigate(`/products/${products._id}`)          
        }
        else {
            navigate('/login')
        }
    }
    return (
        <div className="product-card" onClick={handleClick}>
            <div className="thumbnail">
                <img src={"http://localhost:3000"+products.image} alt="product"/>
                </div>
            <div className="product-info">
                <span className="product-name">{products.name}</span>
                <span className="product-price">{products.price}</span>
                </div>   
        </div>
        )

}
export default Product;