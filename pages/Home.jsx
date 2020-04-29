export default class Home extends React.Component {

    render() {
        return (
            <section className="main-home-container">
                <div className="home-content-title flex justify-center column">
                    <h2 className="home-main-title">Appsus Application</h2>
                    <h4 class="home-subtitle">Three In One</h4>
                </div>

                <div className="apps-container flex even">

                    <div className="single-app flex">
                        <img src="assets/img/books.png" className="single-app-img" alt="" />
                        <div className="single-app-content flex column even">
                            <div className="single-app-title">Books</div>
                            <p class="single-app-desc">
                                It's a nice application that you can search for a book and read about him...
                            </p>
                            <a className="single-app-btn books-btn" href="index.html#/books">Take a look</a>
                        </div>
                    </div>
                    <div className="single-app flex align-center">
                        <img src="assets/img/notes.png" className="single-app-img" alt="" />
                        <div className="single-app-content flex column even">
                            <div className="single-app-title">Notes</div>
                            <p class="single-app-desc">
                                Now you can save all your secret notes in one place, everyone has secrets ;&#41;
                            </p>
                            <a className="single-app-btn notes-btn" href="index.html#/notes">Take a look</a>
                        </div>
                    </div>
                    <div className="single-app flex">
                        <img src="assets/img/books.png" className="single-app-img" alt="" />
                        <div className="single-app-content flex column even">
                            <div className="single-app-title">Email</div>
                            <p class="single-app-desc">
                                Our mail application is ready! Take a look on it and send some emails :&#41;
                            </p>
                            <a className="single-app-btn email-btn" href="index.html#/email">Take a look</a>
                        </div>
                    </div>

                </div>

            </section>
        )
    }
}