
import logo from '../../assets/images/logo.png';
import './header.css'

function Header() {
    return(
        <div className="header container">
            <div className="row bg-white shadow align-items-center header-top">
                <div className="col-6 logo-img">
                    <img src={logo} alt='Logo' />
                </div>

                <div className="col-6 cart-btn">
                    <button><i className="fa fa-shopping-cart"></i> Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Header