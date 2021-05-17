const { Component, Children, PropTypes } = React;

class SplitText extends Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("span", { "aria-label": this.props.copy, role: this.props.role },
      this.props.copy.split("").map(function (char, index) {
        let style = { "animation-delay": 0.2 + index / 10 + "s" };
        return /*#__PURE__*/React.createElement("span", {
          "aria-hidden": "true",
          key: index,
          style: style },
        char);

      })));


  }}


  class SplitText2 extends Component {
    render() {
      return /*#__PURE__*/(
        React.createElement("span", { "aria-label": this.props.copy, role: this.props.role },
        this.props.copy.split("").map(function (char, index) {
          let style = { "animation-delay": 2.5 + index / 10 + "s" };
          return /*#__PURE__*/React.createElement("span", {
            "aria-hidden": "true",
            key: index,
            style: style },
          char);

        })));


    }}


    class SplitText3 extends Component {
      render() {
        return /*#__PURE__*/(
          React.createElement("span", { "aria-label": this.props.copy, role: this.props.role },
          this.props.copy.split("").map(function (char, index) {
            let style = { "animation-delay": 4.5 + index / 10 + "s" };
            return /*#__PURE__*/React.createElement("span", {
              "aria-hidden": "true",
              key: index,
              style: style },
            char);

          })));


      }}


class Layout extends Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("h1", null, /*#__PURE__*/React.createElement(SplitText, { copy: "Happy Holidays", role: "heading" })));

  }}

class Layout2 extends Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("h1", null, /*#__PURE__*/React.createElement(SplitText2, { copy: "from", role: "heading" })));

  }}

class Layout3 extends Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("h1", null, /*#__PURE__*/React.createElement(SplitText3, { copy: "Vanstone Online", role: "heading" })));

  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Layout, null), document.getElementById('app'));

ReactDOM.render( /*#__PURE__*/React.createElement(Layout2, null), document.getElementById('app2'));

ReactDOM.render( /*#__PURE__*/React.createElement(Layout3, null), document.getElementById('app3'));
