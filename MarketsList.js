class MarketsList extends React.Component {
    constructor(props) {
        super(props);

        this.key = props.key;
        this.cities = props.cities;
        this.province = props.province;
        this.defaultChecked = false;
        this.state = {isChecked: false};

        this.handleClicked = this.handleClicked.bind(this);
    }

    handleClicked() {
        this.setState({isChecked: !this.state.isChecked});
    }

    render() {
        return [
            React.createElement('div', {
                    className: 'custom-control custom-checkbox indented',
                    onClick: () => this.handleClicked(),
                }, React.createElement('input', {
                    id: MarketAsId(this.province),
                    className: 'custom-control-input',
                    type: 'checkbox',
                    defaultChecked: this.defaultChecked,
                }),
                React.createElement('a', {
                    key: MarketAsId(this.province) + '_header_link',
                    className: 'card-text collapsed',
                    href: '#' + MarketAsId(this.province) + '_collapse',
                    'data-toggle': 'collapse',
                }, React.createElement('label', {
                    className: 'custom-control-label',
                    htmlFor: MarketAsId(this.province),
                }), this.province)),
            React.createElement('div', {
                    key: MarketAsId(this.province) + '_collapse',
                    id: MarketAsId(this.province) + '_collapse',
                    className: 'collapse',
                },
                React.createElement('div', {
                    className: 'cities_checkbox',
                }),
                React.createElement(BuildCities, {cities: this.cities, province: this.province})),
        ];
    }
}

function BuildCities(params) {
    if (params.cities.size == 0) {
        return null;
    }

    let citiesToRender = [];
    let j = 0;

    while (params.cities[j]) {
        citiesToRender.push(
            React.createElement(CitiesList, {
                key: j,
                city: params.cities[j],
                province: params.province,
            }));

        j++;
    }

    return React.createElement('div', {
        className: 'cities-checkbox-container',
    }, citiesToRender)
}

