class CardsList extends React.Component {
    constructor(props) {
        super(props);

        this.id = props.id;
        this.key = props.key;
        this.title = props.title;
        this.city = props.city;
        this.province = props.province;
    }

    render() {
        return (
            React.createElement('div', {
                id: this.id,
                className: 'card card-custom',
                height: '40vh',
                width: '30vw',
            }, React.createElement('img', {
                className: 'card-image',
                loading: 'lazy',
                height: '50%',
                width: '100%',
                src: 'http://placekitten.com/200/100?image=' + this.key,
            }), React.createElement('div', {
                className: 'card-body',
            }, React.createElement('h5', {
                className: 'card-title',
            }, this.title), React.createElement('p', {
                className: 'card-text',
            }, 'Market: ' + this.city + ', ' + this.province), React.createElement('p', {
                className: 'card-text',
            })))
        );

    }
}