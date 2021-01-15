import React from 'react';
import Total from './Total';


export default class MainSummary extends React.Component {
    render() {
        
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    <Total selected={this.props.selected} />
                </div>
                </div>
            </section>
        )
    }
}