import React, { Component } from "react";
import PropTypes from "prop-types";
import Publication from "../Publication/Publication";
import Controls from "../Controls/Controls";
import Counter from "../Counter/Counter";
import styles from "./Reader.css";

export default class Reader extends Component {
  state = {
    currentPage: 0
  };

  handleClick = event => {
    const { name } = event.target;

    this.setState(prevState => ({
      currentPage: name === "back" ? prevState.currentPage - 1 : prevState.currentPage + 1
    }));
  };

  render() {
    const { items } = this.props;

    const { currentPage } = this.state;
    return (
      <div className={styles.reader}>
        <Controls
          handleClick={this.handleClick}
          currentPage={currentPage}
          length={items.length}
        />
        <Counter currentPage={currentPage} length={items.length} />
        <Publication item={items[currentPage]} />
      </div>
    );
  }
}

Reader.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
};
