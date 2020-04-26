export default class ListEmail extends React.Component {

    state = {

    }

    componentDidMount() {
        console.log('im mounted!')
        console.log("ListEmail -> render -> props.emails", this.props.emails)

    }



    render() {

        return (
            <section>
                <h2>EMail List :</h2>



                {this.props.emails.map((email, idx) => {

                    return (
                        <div key={idx}>
                            <h2>Name: {email.name}</h2>
                            <p>Recipient: {email.to}</p>
                        </div>





                    )

                })}



            </section>
        )


    }
}