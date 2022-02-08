class CitiesList extends React.Component {
    constructor(props) {
        super(props);

        this.key = props.key;
        this.city = props.city;
        this.province = props.province;
        this.defaultChecked = false;
        this.state = {isChecked: false};

        this.handleClicked = this.handleClicked.bind(this);
    }

    handleClicked() {
        this.setState({isChecked: !this.state.isChecked});

        if (!this.state.isChecked) {
            getCardsByMarket(this.city + ", " + this.province);
        } else {

        }
    }

    render() {
        return (
            React.createElement('div', {
                className: 'custom-control custom-checkbox indented',
                onClick: () => this.handleClicked(),
            }, React.createElement('input', {
                id: this.city,
                className: 'custom-control-input',
                type: 'checkbox',
                defaultChecked: this.defaultChecked,
            }), React.createElement('label', {
                className: 'custom-control-label',
                htmlFor: this.city,
            }, this.city))
        );
    }
}

