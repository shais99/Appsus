export default class SearchNote extends React.Component {
    state = {
        filter: {
            searchBy: ''
        }
    }
    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value

        this.setState(prevState => ({ filter: { ...prevState.filter, [field]: value } }), () => {
            this.props.onSetSearch(this.state.filter)
        })
    }
    render() {
        const { searchBy } = this.state
        return (
            <input type="text" name="searchBy" className="search-input" placeholder="Search By Label..." value={searchBy}
             onChange={this.handleChange} />
        )
    }
}