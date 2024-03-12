import { Link, useParams } from "react-router-dom";
import "../../css/header.css"
import Logo from "../../assets/images/Logo.png"

const URLParam = useParams();

function HeaderComponent() {
    return(
        <header className="d-flex flex-column main-font">
            <div className="container-fluid d-flex flex-row justify-content-between main-bg-color align-items-center p-2">
            <div className="d-flex flex-row justify-content-center align-items-center">
                <div className="email-header d-flex flex-row justify-content-center align-items-center ms-3 me-0">
                    <i className="bi bi-envelope-at-fill secondary-text-color me-1"></i>
                    <a className="secondary-text-color text-decoration-none" href="mailto: info@gameon.hr">info@gameon.hr</a>
                </div>
                <div className="telefon-header d-flex flex-row justify-content-center align-items-center mx-3 secondary-text-color">
                    <i className="bi bi-telephone-fill me-1"></i>
                    <a className="text-decoration-none text-reset" href="tel: 0997896854">099 789 6854</a>
                </div>
            </div>
            <div className="d-flex flex-wrap socials justify-content-center align-items-center secondary-text-color fs-5">
                <a className="text-decoration-none text-reset mx-1" href="#"><i className="bi bi-facebook"></i></a>
                <a className="text-decoration-none text-reset mx-1" href="#"><i className="bi bi-instagram"></i></a>
                <a className="text-decoration-none text-reset mx-1" href="#"><i className="bi bi-twitter"></i></a>
                <a className="text-decoration-none text-reset mx-1" href="#"><i className="bi bi-youtube"></i></a>
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center">
                <div className="search d-flex flex-row input-group me-3">
                    <input type="text" placeholder="Pretraži..." name="searchInput" className="form-control"/>
                    <button type="submit" className="secondary-bg-color btn"><i className="bi bi-search text-white"></i></button>
                </div>
                <div className="me-3 scart secondary-text-color">
                    <i className="bi bi-cart-fill fs-5"></i>
                </div>
            </div>
        </div>
        <div className="container-fluid d-flex flex-column justify-content-between secondary-bg-color align-items-center p-2">
            <div className="container d-flex justify-content-center align-items-center">
                <a href="index.html"><img src={Logo} alt="GameOn" className="img-fluid"/></a>
            </div>
            <div className="navbar navbar-expand-lg">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 header-nav">
                    <li className="nav-item"><Link className="nav-link p-3 m-0" id="index" to="/">Naslovna</Link></li>
                    <li className="nav-item"><Link className="nav-link p-3 m-0" id="products" to="/products">Proizvodi</Link></li>
                    <li className="nav-item"><Link className="nav-link p-3 m-0" id="about" to="/about">O nama</Link></li>
                    <li className="nav-item"><Link className="nav-link p-3 m-0" id="blog" to="/blog">Blog</Link></li>
                    <li className="nav-item"><Link className="nav-link p-3 m-0" id="contact" to="/contact">Kontakt</Link></li>
                </ul>
            </div>
        </div>

        </header>
    )
}

export {HeaderComponent};