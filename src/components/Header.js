import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper blue darken-1">
                    <Link to="/" className="brand-logo center">iDesign</Link>
                </div>
            </nav>
        );
    }
}

export default Header;
