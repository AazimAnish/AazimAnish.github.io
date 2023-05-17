import "./navBar.css"

export function Navbar() {
    return(
        <nav className="navbar">
            <ul className="navbar-list">
                <li><a href="#contact-me">_contact-me</a></li>
                <li><a href="#about-me">_about-me</a></li>
                <li><a href="#projects">_projects</a></li>
                <li><a href="#home">Hello</a></li>
            </ul>
            <hr className="line" />
        </nav>
    ); 
}; 
