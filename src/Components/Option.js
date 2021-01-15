
import React from 'react';
import Currency from './Currency';

export default class Option extends React.Component {
    render() {
        return (  
            <div className="summary__option" key={this.props.featureHash}>
                <div className="summary__option__label">{this.props.feature} </div>
                <div className="summary__option__value">{this.props.selectedOption.name}</div>
                <div className="summary__option__cost">
                <Currency cost={this.props.selectedOption.cost} />
                </div>
            </div>
        );
        };
        
        };
