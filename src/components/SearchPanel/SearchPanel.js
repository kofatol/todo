import React, { Component } from 'react';

import './SearchPanel.css';

export default class SearchPanel extends Component {
  render() {
    const { onSearchInput } = this.props;

    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="type to search"
        onChange={(e) => onSearchInput(e.target.value)}
      />
    );
  }
}
