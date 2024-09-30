import {Link} from 'react-router-dom'

const data = [
    { label: 'HOME', to: '/' },
    { label: 'ABOUTME', to: '/About' },
    { label: 'PROJECTS', to: '/Display' },
    { label: 'CONTACTME', to: '/Contact' },
];

function Navigation() {
    return (
        <nav className="navigation">
            <div className="navigation-bar">
                {data.map((item) => (
                    <Link key={item.to} to={item.to}>
                        <button>{item.label}</button>
                    </Link>
                ))}
            </div>
        </nav>
    );
}

export default Navigation;