import React from "react";

import AutoCompleteText from './AutoCompleteHere'

class AutoComplete extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div className="container">
                <div className="col s12 m7">
                    <div className="card horizontal">
                        <div className="card-stacked">
                            <div className="card-content">
                                <AutoCompleteText
                                    onInput={this.props.handleChange}
                                    onKeyPress={this.props.handleKeyPress}
                                    placeholder="Start Typing Places!"
                                    appid="IDZ2j4o9IdjMZO42fKwO"
                                    appcode="4TSWoPbt3OQLpfqwLA2IdA"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AutoComplete