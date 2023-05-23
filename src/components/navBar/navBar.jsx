import "./navBar.css"

export function Navbar() {
    return(
        <nav className="navbar">
            <p className="name"> &lt; AazimAnish /&gt;</p>
            <ul className="navbar-list">
                <li><a className="navbotton" href="#home">_Hello</a></li>
                <li><a className="navbotton" href="#projects">_projects</a></li>
                <li><a className="navbotton" href="#about-me">_about-me</a></li>
                <li><a className="navbotton" href="#contact-me">_contact-me</a></li>
            </ul>
            <hr className="line" />
        </nav>
    ); 
}; 
