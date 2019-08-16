import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./AutocompleteSearch.css"

export class AutocompleteSearch extends Component {
    static propTypes = {
        options: PropTypes.instanceOf(Array).isRequired
    };
    state = {
        activeOption: 0,
        filteredOptions: [],
        showOptions: false,
        userInput: ''
    };

    onChange = (e) => {
        console.log('AutocompleteSearch onChange');

        const { options } = this.props;
        const userInput = e.currentTarget.value;

        const filteredOptions = options.filter(
            (option) =>
                option.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        this.setState({
            activeOption: 0,
            filteredOptions,
            showOptions: true,
            userInput: e.currentTarget.value
        });
    };

    onClick = (e) => {
        console.log('AutocompleteSearch onClick');

        this.setState({
            activeOption: 0,
            filteredOption: [],
            showOptions: false,
            userInput: e.currentTarget.innerText
        });
    };

    onKeyDown = (e) => {
        console.log('AutocompleteSearch onKeyDown');

        const { activeOption, filteredOptions } = this.state;

        if (e.keyCode === 13) {
            // return key
            this.setState({
                activeOption: 0,
                showOptions: false,
                userInput: filteredOptions[activeOption]
            });
        } else if (e.keyCode === 38) {
            // up arrow
            if (activeOption === 0) {
                return;
            }
            this.setState({ activeOption: activeOption - 1});
        } else if (e.keyCode === 40) {
            // down arrow
            if (activeOption - 1 === filteredOptions.length) {
                return;
            }
            this.setState({ activeOption: activeOption + 1});
        }
    };

    render() {
        const {
            onChange,
            onClick,
            onKeyDown,
            state: { activeOption, filteredOptions, showOptions,
                userInput}
        } = this;
        let optionList;
        if (showOptions && userInput) {
            if (filteredOptions.length) {
                optionList = (
                    <u1 className="options">
                        {filteredOptions.map((option, index) => {
                            let className;
                            if (index === activeOption) {
                                className = 'option-active';
                            }
                            return (
                                <li className={className} key={option} onClick={onClick}>
                                    {option}
                                </li>
                            );
                        })}
                    </u1>
                );
            } else {
                optionList = (
                    <div className="no-options">
                        <em>No pre-fetched matches found...</em>
                    </div>
                );
            }
        }
        return (
            <React.Fragment>
                <div className="search">
                    <input type="text"
                        className="search-box"
                        onChange={onChange}
                        onKeyDown={onKeyDown}
                        value={userInput}
                    />
                    <input type="submit" value="" className="search-btn" />
                    {optionList}
                </div>
            </React.Fragment>
        );
    }
}

export default AutocompleteSearch;