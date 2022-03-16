import './Header.css';

const HeaderComponent =() =>{
return(
    <div>
        <nav className="uk-navbar-container uk-margin" uk-navbar>
            <div className="uk-navbar-left">
                <a className="uk-navbar-item uk-logo" href="#">React</a>

                <ul className="uk-navbar-nav">
                    <li>
                        <a href="#">
                            <span className="uk-icon uk-margin-small-right"></span>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="uk-icon uk-margin-small-right"></span>
                            About
                        </a>
                    </li>
                </ul>

            </div>
        </nav>
    </div>
);

}
export default HeaderComponent;