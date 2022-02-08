function MarketAsId(market) {
    return market.replace(/\ /g, '');
}

function getCardsByMarket(market) {
    if (market === '' || typeof market === 'undefined') {
        return;
    }

    $.ajax({
        url: Routing.generate('media_optimizer_get_market_data', {market: market, _locale: window.locale}),
        method: 'GET',
        beforeSend: function () {

        },
        success: function (response) {
            if (response.success === true) {
                appendMarketToCards(market, response.cards);
            }
        },
        failure: function () {
            alert('Error: Failed to get market data from ' + market + '.');
        },
        cache: false,
        contentType: false,
        processData: false
    });
}

function appendMarketToCards(market, cards) {
    let cardsToRender = [];

    for (let i = 0; i < cards.length; i++) {

        cardsToRender.push(
            React.createElement(CardsList, {
                key: i,
                id: cards[i].id,
                title: cards[i].title,
                city: cards[i].market_city,
                province: cards[i].market_province,
            }));
    }

    console.log(cardsToRender);

    ReactDOM.render(cardsToRender, document.getElementById('cards-container'));

    // return React.createElement('div', {
    //     id: 'cards-container',
    //     className: 'col-lg-9',
    // }, cardsToRender)
}