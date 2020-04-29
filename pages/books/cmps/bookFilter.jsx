export default class BookFilter extends React.Component {
    state = {
        filter: {
            name: '',
            maxPrice: '',
            minPrice: ''
        }
    }
    handleChange = ({ target }) => {
        const field = target.name
        const value = (target.type === 'number') ? parseInt(target.value) : target.value

        this.setState(prevState => ({ filter: { ...prevState.filter, [field]: value } }), () => {
            this.props.onSetFilter(this.state.filter)
        })
    }
    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filter)
    }
    render() {
        const { name, maxPrice, minPrice } = this.state.filter
        return (
            <form className="filter-form" onSubmit={this.onFilter}>
                <input type="text" name="name" value={name} placeholder="Search by name..." onChange={this.handleChange} />
                {/* <input type="number" name='minPrice' value={minPrice} placeholder="Min Price" onChange={this.handleChange} />
                <input type="number" name='maxPrice' value={maxPrice} placeholder="Max Price" onChange={this.handleChange} /> */}

                {/* <button className="add-book">Search now</button> */}
            </form>
        )
    }
}