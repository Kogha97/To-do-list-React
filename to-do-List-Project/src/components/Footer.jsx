import React from "react";


export default function Footer() {
    return (
        <footer className="footer">
        <div className="footer-section contact">
            <h4>Contact Information</h4>
            <p>Email: contact@example.com</p>
            <p>Phone: 123-456-7890</p>
            <p>Address: 1234 Street Name, City, Country</p>
        </div>

        <div className="footer-section quick-links">
            <h4>Quick Links</h4>
            <h5>Home</h5>
            <h5>About Us</h5>
            <h5>Product</h5>
        </div>

        <div className="footer-section follow-us">
            <h4>Follow Us</h4>
            <a href="http://facebook.com">Facebook</a>
            <br />
            <a href="http://twitter.com">Twitter</a>
            <br />
            <a href="http://linkedin.com">LinkedIn</a>
            <br />
            <a href="http://instagram.com">Instagram</a>
        </div>

        <div className="footer-section legal">
            <h4>Legal</h4>
            <h5>Privacy Policy</h5>
            <h5>Terms of Use</h5>
        </div>

        <div className="footer-section about">
            <h4>About this App</h4>
            <p>Streamlining your day with simplicity and efficiency, one task at a time.</p>
        </div>

        <div className="footer-section newsletter">
            <h4>Newsletter</h4>
            <form>
                <input type="email" placeholder="Enter your email" />
                <button type="submit">Subscribe</button>
            </form>
        </div>

        <div className="footer-section copyright">
            <p>&copy; 2023 Monika, Rebekka, João.</p> <br /> <p>All Rights Reserved.</p>
        </div>
    </footer>


    )
}