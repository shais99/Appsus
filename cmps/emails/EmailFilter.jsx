
export default class EmailFilter extends React.Component {

    state = {
        filter: {
            filterBy: '',
            search: ''
        }
    }
    handleChange = ({ target }) => {
        const field = target.name
        const value = (target.type === 'number') ? parseInt(target.value) : target.value
        this.setState(prevState => ({ filter: { ...prevState.filter, [field]: value } }), () => {
        this.props.onSetFilter(this.state.filter.search)
        })
    }
    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filter.search)
    }

    render() {
        const { search } = this.state.filter
        return (
            <form className="flex align-center justify-center" onSubmit={this.onFilter}>
                <img className="email-search-img smallerAnim" src="assets/img/search.png" alt="" />
                <input autoComplete="off" className="email-search" type="text" name='search' placeholder="Search" value={search}
                    onChange={this.handleChange} />
            </form>

        )
    }
}