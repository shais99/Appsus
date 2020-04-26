import emailService from "../services/emailService.js"
import ListEmail from '../cmps/emails/ListEmail.jsx'
const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM


export default class Email extends React.Component {
    state = {
        filterBy: null,
        emails: null,
    }



    componentDidMount() {
    }
    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => this.loadEmails())
    }

    loadEmails = () => {
        var emails = emailService.query(this.state.filterBy)
        this.setState({ emails })
    }

    getEmails = () => {
        if (!this.state.emails) {
            console.log('returning all emails')
            return emailService.query()
        } 
        return this.state.emails
    }


    render() {
        return (
            <section className="email-main-content">
                <div className="flex email-content">
                    <div className="box-side-nav">
                        <p>inbox</p>
                        <p>sent</p>
                    </div>
                    <div>
                        <h2> Read Your fucking Emails :</h2>
                        <ListEmail getEmails={this.getEmails} onSetFilter={this.onSetFilter} ></ListEmail>
                    </div>
                </div>
            </section>
        )


    }
}