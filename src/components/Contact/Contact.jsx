
function Contact() {
    return(
    <main className="third-bg-color d-flex flex-column justify-content-center align-items-center">
        <div className="my-4">
            <h1 className="secondary-font">Kontakt</h1>
        </div>
        <div className="container d-flex justify-content-center align-items-center">
            <div className="container w-50 align-self-start">
                <h2 className="secondary-font mb-4">Forma za upit</h2>
                <form>
                    <div className="row">
                        <div className="col mb-3">
                            <div className="form-floating">
                                <input type="text" name="imeprezime" id="imeprezime-contact" placeholder="Ime i prezime" className="form-control"/>
                                <label for="imeprezime-contact">Ime i prezime</label>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <div className="form-floating">
                                <input type="email" name="email" id="email-contact" placeholder="primjer@primjer.com" className="form-control"/>
                                <label for="email-contact">Email</label>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <div className="form-floating">
                                <textarea name="poruka" id="poruka-contact" placeholder="poruka" className="form-control"></textarea>
                                <label for="poruka-contact">Vaša poruka</label>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-contact main-font">Pošalji</button>
                </form>
            </div>
            <div className="container w-50">
                <div className="container d-flex justify-content-center align-items-center">
                    <p className="lead text-center">Imate upit o nekom proizvodu? Zanima vas više o najboljem jamstvu u regiji? Ili ste pak zalutali na krivu vrstu stranice s miševima. Slobodno nam pošaljite upit na jedan od slijedećih kanala.</p>
                </div>
                <div className="d-flex container flex-column gap-3 justify-content-center align-items-center mb-5">
                    <div className="container d-flex justify-content-center align-items-center">
                        <div className="d-flex flex-column mx-3 justify-content-center align-items-start main-font">
                            <h5 className="secondary-font align-self-center">Kontakt informacije</h5>
                            <div className="d-flex flex-row justify-content-center align-items-center">
                                <i className="bi bi-envelope-at-fill me-1 accent-text-color"></i>
                                <a className="text-reset text-decoration-none" href="mailto: info@gameon.hr">info@gameon.hr</a>
                            </div>
                            <div className="d-flex flex-row justify-content-center align-items-center">
                                <i className="bi bi-telephone-fill me-1 accent-text-color"></i>
                                <a className="text-reset text-decoration-none" href="tel: 0997896854">099 789 6854</a>
                            </div>
                            <div className="d-flex flex-row justify-content-center align-items-start">
                                <i className="bi bi-building-fill me-1 accent-text-color"></i>
                                <span className="text-reset text-decoration-none">Ul. Velimira Škorpika 7/a,<br/> 22000, Šibenik</span>
                            </div>
                            <div className="d-flex flex-row justify-content-center align-items-start">
                                <i className="bi bi-person-vcard-fill me-1 accent-text-color"></i>
                                <span className="text-reset text-decoration-none">05546017522</span>
                            </div>
                        </div>
                    </div>
                    <div className="container d-flex flex-column justify-content-center align-items-center mb-5">
                        <div className="mb-1">
                            <h5 className="secondary-font m-0">Društvene mreže</h5>
                        </div>
                        <div className="socials-white fs-5">
                            <a className="text-black text-decoration-none mx-1" href="#"><i className="bi bi-facebook"></i></a>
                            <a className="text-black text-decoration-none mx-1" href="#"><i className="bi bi-instagram"></i></a>
                            <a className="text-black text-decoration-none mx-1" href="#"><i className="bi bi-twitter"></i></a>
                            <a className="text-black text-decoration-none mx-1" href="#"><i className="bi bi-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    )
}

export {Contact};   