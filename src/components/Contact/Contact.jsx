
function Contact() {
    return(
    <main class="third-bg-color d-flex flex-column justify-content-center align-items-center">
        <div class="my-4">
            <h1 class="secondary-font">Kontakt</h1>
        </div>
        <div class="container d-flex justify-content-center align-items-center">
            <div class="container w-50 align-self-start">
                <h2 class="secondary-font mb-4">Forma za upit</h2>
                <form>
                    <div class="row">
                        <div class="col mb-3">
                            <div class="form-floating">
                                <input type="text" name="imeprezime" id="imeprezime-contact" placeholder="Ime i prezime" class="form-control"/>
                                <label for="imeprezime-contact">Ime i prezime</label>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col">
                            <div class="form-floating">
                                <input type="email" name="email" id="email-contact" placeholder="primjer@primjer.com" class="form-control"/>
                                <label for="email-contact">Email</label>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col">
                            <div class="form-floating">
                                <textarea name="poruka" id="poruka-contact" placeholder="poruka" class="form-control"></textarea>
                                <label for="poruka-contact">Vaša poruka</label>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-contact main-font">Pošalji</button>
                </form>
            </div>
            <div class="container w-50">
                <div class="container d-flex justify-content-center align-items-center">
                    <p class="lead text-center">Imate upit o nekom proizvodu? Zanima vas više o najboljem jamstvu u regiji? Ili ste pak zalutali na krivu vrstu stranice s miševima. Slobodno nam pošaljite upit na jedan od slijedećih kanala.</p>
                </div>
                <div class="d-flex container flex-column gap-3 justify-content-center align-items-center mb-5">
                    <div class="container d-flex justify-content-center align-items-center">
                        <div class="d-flex flex-column mx-3 justify-content-center align-items-start main-font">
                            <h5 class="secondary-font align-self-center">Kontakt informacije</h5>
                            <div class="d-flex flex-row justify-content-center align-items-center">
                                <i class="bi bi-envelope-at-fill me-1 accent-text-color"></i>
                                <a class="text-reset text-decoration-none" href="mailto: info@gameon.hr">info@gameon.hr</a>
                            </div>
                            <div class="d-flex flex-row justify-content-center align-items-center">
                                <i class="bi bi-telephone-fill me-1 accent-text-color"></i>
                                <a class="text-reset text-decoration-none" href="tel: 0997896854">099 789 6854</a>
                            </div>
                            <div class="d-flex flex-row justify-content-center align-items-start">
                                <i class="bi bi-building-fill me-1 accent-text-color"></i>
                                <span class="text-reset text-decoration-none">Ul. Velimira Škorpika 7/a,<br/> 22000, Šibenik</span>
                            </div>
                            <div class="d-flex flex-row justify-content-center align-items-start">
                                <i class="bi bi-person-vcard-fill me-1 accent-text-color"></i>
                                <span class="text-reset text-decoration-none">05546017522</span>
                            </div>
                        </div>
                    </div>
                    <div class="container d-flex flex-column justify-content-center align-items-center mb-5">
                        <div class="mb-1">
                            <h5 class="secondary-font m-0">Društvene mreže</h5>
                        </div>
                        <div class="socials-white fs-5">
                            <a class="text-black text-decoration-none mx-1" href="#"><i class="bi bi-facebook"></i></a>
                            <a class="text-black text-decoration-none mx-1" href="#"><i class="bi bi-instagram"></i></a>
                            <a class="text-black text-decoration-none mx-1" href="#"><i class="bi bi-twitter"></i></a>
                            <a class="text-black text-decoration-none mx-1" href="#"><i class="bi bi-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    )
}

export {Contact};   