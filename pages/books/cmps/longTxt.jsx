export default class longTxt extends React.Component {
    state = {
        isLongTxtShown: false,
        LENGTH_NUMBER: 100
    }
    get shortText() {
        const text = this.props.text

        if (this.state.isLongTxtShown) return text
        else return text.slice(0, this.state.LENGTH_NUMBER)
    }
    showReadBtn = () => {
        if (this.props.text.length < this.state.LENGTH_NUMBER) return;
        if (this.state.isLongTxtShown && this.props.text.length > this.state.LENGTH_NUMBER) {
            return (<button className="read-toggle" onClick={this.toggleText}>Read Less</button>)
        }
        else return (<button className="read-toggle" onClick={this.toggleText}>Read More</button>)
    }
    toggleText = () => {
        this.setState(prevState => ({ isLongTxtShown: !prevState.isLongTxtShown }))
    }
    render() {
        if (!this.props.text) return <span>No Description for this book</span>
        return (
            <React.Fragment>
                {this.shortText}
                {this.showReadBtn()}
            </React.Fragment>
        )
    }
}