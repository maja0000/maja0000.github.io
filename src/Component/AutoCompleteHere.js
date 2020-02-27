'use strict';

function _interopDefault(ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));

function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
        if (head.firstChild) {
            head.insertBefore(style, head.firstChild);
        } else {
            head.appendChild(style);
        }
    } else {
        head.appendChild(style);
    }

    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
}

var css = ".styles_AutoCompleteText__9cbtl {\r\n  width: 100%;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 14px;\r\n  color: rgba(0, 0, 0, 0.73);\r\n}\r\n\r\n.styles_AutoCompleteText__9cbtl input {\r\n  width: 100%;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 14px;\r\n  color: rgba(0, 0, 0, 0.73);\r\n  padding: 10px 5px;\r\n  box-sizing: border-box;\r\n  outline: none;\r\n}\r\n\r\n.styles_AutoCompleteText__9cbtl ul {\r\n  list-style: none;\r\n  text-align: left;\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 1px solid rgba(128, 128, 128, 0.81);\r\n  border-top: none;\r\n}\r\n\r\n.styles_AutoCompleteText__9cbtl ul::before {\r\n  content: \"\";\r\n}\r\n\r\n.styles_AutoCompleteText__9cbtl li {\r\n  padding: 10px 5px;\r\n  cursor: pointer;\r\n}\r\n.styles_AutoCompleteText__9cbtl li:hover {\r\n  text-decoration: underline;\r\n  background-color: rgba(128, 128, 128, 0.2);\r\n}\r\n";
var styles = { "AutoCompleteText": "styles_AutoCompleteText__9cbtl" };
styleInject(css);

var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
};

var createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }

    return target;
};

var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var AutoCompleteText = function (_Component) {
    inherits(AutoCompleteText, _Component);

    function AutoCompleteText(props) {
        classCallCheck(this, AutoCompleteText);

        var _this = possibleConstructorReturn(this, (AutoCompleteText.__proto__ || Object.getPrototypeOf(AutoCompleteText)).call(this, props));

        _this.onTextChanged = function (e) {
            var value = e.target.value;
            console.log(props);
            // props.handleChange();
            _this.setState({ locationId: "", text: value });

            if (value.length > 0) {
                _this.setState({ text: value });
                fetch("https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?apikey=wMUjz7aAp9K1K_Rzxs6cfwXWRXlgh2RTmtv_0jgzSp8&query=" + value + '&beginHighlight=').then(function (response) {
                    return response.json();
                }).then(function (data) {
                    var op = data.suggestions.filter((suggest) => {
                        return suggest.matchLevel === 'city'
                    }).map(function (o) {
                        return {
                            label: o.address.city,
                            locationId: o.locationId
                        };
                    });


                    _this.setState({ suggestions: op });
                }).catch(function (err) {
                    console.log(err);
                    _this.setState({ suggestions: [] });
                });
            } else {
                _this.setState({ suggestions: [] });
            }
        };

        _this.renderSuggestions = function () {
            var suggestions = _this.state.suggestions;


            if (suggestions.length === 0) {
                return null;
            } else {
                return React__default.createElement(
                    "ul",
                    null,
                    suggestions.map(function (item) {
                        return React__default.createElement(
                            "li",
                            {
                                key: item.locationId,
                                locationid: item.locationId,
                                onClick: function onClick() {
                                    return _this.suggestionSelected(item);
                                }
                            },
                            item.label
                        );
                    })
                );
            }
        };

        _this.suggestionSelected = function (item) {
            _this.setState({
                text: item.label,
                locationId: item.locationId,
                suggestions: []
            });
        };

        _this.state = {
            suggestions: [],
            text: "",
            locationId: ""
        };
        return _this;
    }

    createClass(AutoCompleteText, [{
        key: "render",
        value: function render() {
            var text = this.state.text;

            return React__default.createElement(
                "div",
                _extends({ className: styles.AutoCompleteText }, this.props),
                React__default.createElement("input", {
                    type: "text",
                    className: `city-value`,
                    value: text,
                    onChange: this.onTextChanged,
                    placeholder: this.props.placeholder
                }),
                this.renderSuggestions()
            );
        }
    }]);
    return AutoCompleteText;
}(React.Component);

AutoCompleteText.propTypes = {
    placeholder: PropTypes.string,
    appid: PropTypes.string.isRequired,
    appcode: PropTypes.string.isRequired
};

module.exports = AutoCompleteText;
//# sourceMappingURL=index.js.map
