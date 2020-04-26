import emailService from "../services/emailService.js"
import ListEmail from '../cmps/emails/ListEmail.jsx'
const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM


export default class Email extends React.Component {
    state = {

        emails: null,
    }



    componentDidMount() {
        console.log('im mounted!')

    }




    render() {
        return (
            <Router>
                <section className="email-main-content">
                    <div className="flex email-content">
                        <div className="box-side-nav">
                            <p>inbox</p>
                            <p>sent</p>
                        </div>
                        <div>
                    <h2> This is your emails :</h2>
                            <ListEmail getEmails={emailService.getEmails} ></ListEmail>
                        </div>
                    </div>
                </section>
            </Router>
        )


    }
}