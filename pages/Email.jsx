import emailService from "../services/emailService.js"
import ListEmail from '../cmps/emails/ListEmail.jsx'

export default class Email extends React.Component {
state = {

    emails: null,
}



    componentDidMount() {
        console.log('im mounted!')

    }


    

    render() {
        return (
            <section className="email-main-content">
                <h2> This is your emails :</h2>
                <div>
                    <ListEmail emails={emailService.getEmails()} ></ListEmail>
                </div>
            </section>
        )


    }
}