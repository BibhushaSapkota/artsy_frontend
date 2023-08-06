import CategoriesData from "./CategoriesData";
import "./PopularProducts.css";
import product1 from "../../images/product1.jpg";
import product2 from "../../images/product3.jpg"
import glass1 from "../../images/glass1.jpg";
import glass2 from "../../images/glass2.png";

const Popular=({products})=>{
    return(
        <div className="popular">
            <h1>Popular Categories</h1>
            <p>Art has been a part of human culture for many centuries. It has been used to express emotions, to communicate ideas and it has been a way to pass down knowledge from one generation to another. Art is important in our cultural and social lives because it is the medium through which we process our emotions and ideas.</p>
            <CategoriesData
            className="popular-products"
            heading="Wall Painting"
            text=" A painting in a frame can add a sense of elegance and sophistication to a room, and can also help to preserve the painting by providing a barrier between it and the elements. Frames can be made from a variety of materials, such as wood, metal, or plastic, and come in a range of sizes and styles to suit the painting and the space in which it will be displayed. Framing a painting can also add to its value, especially if the frame is an antique or has historical significance."
            img1={product1}
            img2={product2}/>
            <CategoriesData
            className="popular-products-reverse"
            heading="Glass Painting"
            text="Glass painting is the art of painting on glass surfaces such as windows, doors, vases, and other glass objects. It involves using special paints that are specifically designed for glass surfaces, and techniques such as brush painting, stippling, and sponging. Glass painting can create stunning effects, with the light shining through the glass, illuminating the colors and designs. It is often used for decorative purposes, but can also be used to create functional objects such as stained glass windows."
            img1={glass1}
            img2={glass2}/>
        </div>

    )
}
export default Popular