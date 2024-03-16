import { Link } from "react-router-dom";
import "../../css/footer.css"
import { navigationList } from "../Navigation";

function FooterComponent() {
    return(
        <footer className="d-flex flex-column main-font">
            <div className="container-fluid d-flex flex-row justify-content-between secondary-bg-color align-items-center p-2">
            <div className="container-fluid d-flex flex-row justify-content-between secondary-bg-color align-items-start p-2 w-75">
                <div className="d-flex flex-column mx-3 justify-content-center align-items-center">
                    <h5 className="main-text-color secondary-font">Mapa Weba</h5>
                    <ul className="me-auto mb-2 mb-lg-0 list-unstyled">
                        {navigationList.map(e => {
                            return(
                                <li key={e.key}><Link className="text-decoration-none accent-text-color" to={e.url}>{e.title}</Link></li> 
                            )
                        })}
                    </ul>
                </div>
                <div className="d-flex flex-column mx-3 justify-content-center align-items-start">
                    <h5 className="main-text-color secondary-font">Kontakt informacije</h5>
                    <div className="d-flex flex-row justify-content-center align-items-center">
                        <i className="bi bi-envelope-at-fill me-1 accent-text-color"></i>
                        <a className="main-text-color text-decoration-none" href="mailto: info@gameon.hr">info@gameon.hr</a>
                    </div>
                    <div className="d-flex flex-row justify-content-center align-items-center">
                        <i className="bi bi-telephone-fill me-1 accent-text-color"></i>
                        <a className="main-text-color text-decoration-none" href="tel: 0997896854">099 789 6854</a>
                    </div>
                    <div className="d-flex flex-row justify-content-center align-items-start">
                        <i className="bi bi-building-fill me-1 accent-text-color"></i>
                        <span className="main-text-color text-decoration-none">Ul. Velimira Škorpika 7/a,<br/> 22000, Šibenik</span>
                    </div>
                    <div className="d-flex flex-row justify-content-center align-items-start">
                        <i className="bi bi-person-vcard-fill me-1 accent-text-color"></i>
                        <span className="main-text-color text-decoration-none">05546017522</span>
                    </div>
                </div>
                <div className="d-flex flex-column mx-3 justify-content-center align-items-start">
                    <h5 className="main-text-color secondary-font">Dokumenti</h5>
                    <ul className="me-auto mb-2 mb-lg-0 list-unstyled">
                        <li><a className="text-decoration-none accent-text-color" href="#">Uvjeti poslovanja</a></li>
                        <li><a className="text-decoration-none accent-text-color" href="#">Uvjeti korištenja</a></li>
                        <li><a className="text-decoration-none accent-text-color" href="#">Pravila o privatnosti</a></li>
                        <li><a className="text-decoration-none accent-text-color" href="#">Pravila o kolačićima</a></li>
                    </ul>
                </div>
            </div>
            <div className="d-flex main-text-color secondary-font justify-content-end align-items-center mx-3 w-50">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.7228439802893!2d15.905297276557379!3d43.71630854834616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13352596fefd40c5%3A0xdf9d5af364c27a35!2sCentar%20za%20nove%20tehnologije%20i%20poduzetni%C5%A1tvo%20Trokut!5e0!3m2!1shr!2shr!4v1708520922923!5m2!1shr!2shr" width="400" height="300" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <div className="container-fluid d-flex main-bg-color justify-content-center align-items-center">
            <span className="fs-6 main-text-color">Izradio: Stjepan Goreta - 2024</span>
        </div>
    </footer>
    )
}

export {FooterComponent};