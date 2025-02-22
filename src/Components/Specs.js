import React from 'react';
import Currency from './Currency';
import slugify from 'slugify';


export default class Specs extends React.Component {
    render() {
        return (
            <div key={this.props.itemHash} className="feature__item">
                <input
                    type="radio"
                    id={this.props.itemHash}
                    className="feature__option"
                    name={slugify(this.props.feature)}
                    checked={this.props.item.name === this.props.selected[this.props.feature].name}
                    onChange={this.props.updateFeature}
                />
                <label htmlFor={this.props.itemHash} className="feature__label">
                {this.props.item.name} 
                (<Currency cost={this.props.item.cost} />)
                </label>
            </div>
        )
    }
}