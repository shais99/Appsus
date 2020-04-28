const Router = ReactRouterDOM.HashRouter
const { Route, Switch, NavLink } = ReactRouterDOM
import emailService from '../../services/emailService.js'
export default class MainNav extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="box-side-nav fade-in">
                    <div className="hello-user-container">
                        <h2 className="hello-user-header">Hello {emailService.getCurrUser()}</h2>
                    </div>
                    <NavLink activeClassName='active-tab' exact to="/email/compose">
                        <div className="email-send-btn flex even align-center">
                            <img src="assets/img/googlePlus.png" alt="" />
                            <p>Compose</p>
                        </div>
                    </NavLink>
                    <NavLink activeClassName='active-tab' to="/email/star">

                        <div className={'email-send-btn flex even align-center'} >
                            <img src="assets/img/star.png" alt="" />
                            <p>Starred</p>
                        </div>
                    </NavLink>
                    <NavLink activeClassName='active-tab' exact to="/email/inbox">

                        <div className="container-number-pop email-send-btn flex even align-center">
                            <img src="assets/img/inbox.png" alt="" />
                            <h4 className="number-pop flex align-center justify-center" 
                            hidden={this.props.getUnreadAmount() < 1}>{this.props.getUnreadAmount()}</h4>

                            <p>Inbox</p>
                        </div>
                    </NavLink>
                    <NavLink activeClassName='active-tab' exact to="/email/sent">
                        <div id="sent" className="email-send-btn flex even align-center">
                            <img src="assets/img/sent.png" alt="" />
                            <p>Sent</p>
                        </div>
                    </NavLink>
                </div>
            </React.Fragment>
        )
    }
}