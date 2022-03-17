import { Link } from "react-router-dom";
import './Header.css';

const HeaderComponent =() =>{
return(
    <div>
        <nav className="uk-navbar-container uk-margin" uk-navbar>
            <div className="uk-navbar-left">
            <Link to="/" className="uk-navbar-item uk-logo">  React</Link>

                <ul className="uk-navbar-nav">
                    <li>
                    <Link to="/"><span className="uk-icon uk-margin-small-right"></span>Home</Link>
                    </li>
                    <li>
                    <Link to="/about"><span className="uk-icon uk-margin-small-right"></span>About</Link>
                        
                    </li>
                </ul>

            </div>
        </nav>
    </div>
);

}
export default HeaderComponent;