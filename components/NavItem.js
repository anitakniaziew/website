import React from "react";

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.scroll = this.scroll.bind(this);
  }

  scroll(ref) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    return (
      <li onClick={() => this.scroll(this.props.reference)}>
        {this.props.name}
      </li>
    );
  }
}
