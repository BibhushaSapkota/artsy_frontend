import './Footer.css';

const Footer = () => {
    return(
        <div className="footer">
            <div className="top">
                <div>
                     <h1>Artsy</h1>
                     <p>Get your aesthetic enjoyment here</p>
                </div>
                <div>
                    <a href="/"><i className='fa-brands fa-facebook-square'></i></a>
                    <a href="/"><i className='fa-brands fa-instagram'></i></a>
                    <a href="/"><i className='fa-brands fa-twitter-square'></i></a>
                    <a href="/"><i className='fa-brands fa-linkedin'></i></a>

                </div>
               
                
             </div>
             <div className="bottom">
                <div>
                    <h4>Shop</h4>
                    <a href="/">Glass painting</a>
                    <a href="/">Tote Bags</a>
                    <a href="/">Wall painting</a>

                </div>
                <div>
                    <h4>Company</h4>
                    <a href="/">About us</a>
                    <a href="/">Contact us</a>
                    <a href="/">Terms and conditions</a>
                    <a href="/">Privacy policy</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">FAQ</a>
                    <a href="/">Shipping</a>
                    <a href="/">Returns</a>
                    <a href="/">Order status</a>
                </div>
                <div>
                    <h4>Newsletter</h4>
                    <p>Subscribe to our newsletter to get the latest updates</p>
                    <input type="text" placeholder="Enter your email"/>
                    <button>Subscribe</button>
                </div>

            </div>
        </div>
    )

}

export default Footer