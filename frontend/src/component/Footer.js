import React from 'react';
import './Footer.css';


export default function Footer() {
    return (
        <nav className="foot" >
        <div className = "GitHubContainer" >
        <a href="https://github.com/CSC59939/DocumentScanner">
        <h2 className = "foot-GitHub" >
        <img src = "https://img.icons8.com/nolan/64/000000/github.png" className = "GitHubLogo" / >
        Visit our code in GitHub 
        </h2> 
        </a>
        </div> 
        </nav>
    )
}