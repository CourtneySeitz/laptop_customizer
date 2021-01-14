import React from 'react';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

export default class Currency extends React.Component {
    render() {
        return (
            <span>
                {USCurrencyFormat.format(this.props.cost)}
            </span>
        )
    }
}