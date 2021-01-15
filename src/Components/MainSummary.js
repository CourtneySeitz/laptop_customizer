import React from 'react';
import Total from './Total';
import Option from './Option';


export default class MainSummary extends React.Component {
    render() {
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];
        return (
        <Option
                    feature={feature}
                    featureHash={featureHash}
                    selectedOption={selectedOption}
        />
        );
        });
        
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
        );
    }
}

