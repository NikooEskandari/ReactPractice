'use strict';

$(function () {

    // Map of market provinces to market cities
    let markets = new Map();

    // Add data from server to market maps
    for (let i = 0; i < markets_data_from_server.length; i++) {
        const city = markets_data_from_server[i].market_city;
        const province = markets_data_from_server[i].market_province;

        if (markets.has(province)) {
            let provinceCities = markets.get(province);
            provinceCities.push(city);
            markets.set(province, provinceCities);
        } else {
            let provinceCities = [city];
            markets.set(province, provinceCities);
        }
    }

    class TestReact extends React.Component {
        constructor(props) {
            super(props);
            this.state = {};
        }

        render() {
            return (
                React.createElement('div', {
                    className: 'container-custom',
                }, React.createElement('div', {
                    id: 'pop-up-container',
                }), React.createElement('div', {
                    id: 'pop-up-small-container',
                }), React.createElement('div', {
                        id: 'header',
                    }, React.createElement('div', {
                        id: 'totals'
                    }), React.createElement('div', {
                        id: 'title',
                        className: "text-center"
                    }, React.createElement('h1', null, 'Media Optimizer')),
                    React.createElement('div', {
                        id: 'tabs'
                    })
                ), React.createElement(SelectContainer, null))
            );
        }
    }

    function SelectContainer() {
        return (
            React.createElement('div', {
                    id: 'select-container',
                }, React.createElement('div', {
                    className: 'checkbox-container-card-wrapper col-lg-3',
                }, React.createElement('div', {
                    className: 'card checkbox-container-card',
                }, React.createElement('div', {
                    id: 'checkbox-header',
                }), React.createElement(BuildMarkets, null)))
                , React.createElement('div', {
                    id: 'cards-container',
                    className: 'col-lg-8',
                }))
        );
    }

    function BuildMarkets() {
        if (markets.size == 0) {
            return null;
        }

        let componentsToRender = [];
        let i = 0;

        for (const [province, cities] of markets) {
            componentsToRender.push(
                React.createElement(MarketsList, {
                    key: i,
                    province: province,
                    cities: cities,
                }));

            i++;
        }

        return React.createElement('div', {
            id: 'checkbox-container',
        }, componentsToRender)
    }

    ReactDOM.render(React.createElement(TestReact, {}), document.getElementById("root"));


});