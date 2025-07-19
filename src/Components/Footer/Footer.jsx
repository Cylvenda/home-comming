import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <p> Home Coming Lts</p>
                <hr />
                <p> &copy; {new Date().getFullYear()} All Right Received </p>
            </div>
        </footer>
    )
}

export default Footer
