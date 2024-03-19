
function Home() {
    return(
        <main className="third-bg-color">
            <div className="home-cover">
                <div className="cover-video">
                    <video src="images/video/cover.mp4" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" className="object-fit-cover"></video>
                </div>
                <div id="cover-background" className="main-font">
                </div>
                <div className="w-100 m-0 p-0 main-font cover-text-home text-white d-flex justify-content-center">
                    <p className="p-0 m-0">Najbolji <span className="accent-text-color">Gaming miševi</span>. Istražite našu veliku ponudu <span className="accent-text-color">vrhunskih</span> glodavaca!</p>
                </div>
            </div>
            <div className="container">
                <h2 className="secondary-font">Najpopularniji miševi</h2>
            </div>
        </main>
    )
}

export {Home};