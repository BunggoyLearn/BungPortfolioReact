function Navigation() {
    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
      }
     return (
        <nav className="header">
            <ul>
                <li>
                    <a href="#about-me" onClick={handleClick} className="list-group-item list-group-item-action"> About Me </a>
                </li>
                <li>
                    <a href="#my-work" onClick={handleClick} className="list-group-item list-group-item-action">My Work</a>
                </li>
                <li>
                    <a href="#contact-me" onClick={handleClick} className="list-group-item list-group-item-action">Contact Me</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;