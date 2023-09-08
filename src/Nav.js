import React, {Component} from 'react'

// add nav bar that also accounts for when screen is small

export default class Nav extends Component {
    constructor () {
        super();
        this.state = {
            isMenuOpen: false,
        };
    }

    toggleMenu = () => {
        this.setState ({ isMenuOpen: !this.state.isMenuOpen });
    }
    render () {
        const {isMenuOpen} = this.state;

        return (
            <nav>
                <div className="hamburger" onClick={this.toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <ul className={isMenuOpen ? 'show' : ''}>
                    <li>Home</li>
                    <li>My Styles</li>
                    <li>Style Me</li>
                    <li>Shop & Sell</li>
                </ul>
            </nav>
        );
    }
}


