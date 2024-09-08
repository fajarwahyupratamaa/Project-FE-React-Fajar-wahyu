import React from 'react';
import './about.css'; // Ensure you create this CSS file for styling

const About = () => {
    return (
        <div className="about-container">
            <div className="about-description">
                <h2>About Wakanda Forever Store</h2>
                <div className="about-image">
                    <img src="./toko-mall.jpg" alt="Our Store" />
                </div>
                <p>
                    Welcome to Wakanda Forever Store! We are a community-driven shop dedicated to providing you with an exceptional shopping experience. Our store offers a wide variety of high-quality products that cater to your needs and preferences.
                </p>
                <p>
                    At Wakanda Forever, we believe in the power of innovation and tradition. Our products are carefully selected to ensure they meet the highest standards of quality and sustainability. Whether you are looking for the latest trends or timeless classics, we have something for everyone.
                </p>
                <p>
                    Our friendly and knowledgeable staff are always here to assist you with any questions or concerns. We strive to create a welcoming environment where you can shop with confidence and ease. Thank you for choosing Wakanda Forever Store – where shopping meets excellence.
                </p>
                
                <div className="about-contact">
                    <h3>Contact Us</h3>
                    <p><strong>Address:</strong> 123 Wakanda Street, Vibranium City, WF 45678</p>
                    <p><strong>Email:</strong> <a href="mailto:info@wakandaforeverstore.com">info@wakandaforeverstore.com</a></p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                    <p><strong>Business Hours:</strong> Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 4:00 PM</p>
                </div>
            </div>
        </div>
    );
};

export default About;
