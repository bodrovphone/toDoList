import React, { Component } from 'react';
import { FooterStyles } from './FooterStyles';

export default class Footer extends Component {
  render() {
    const items = this.props.activeTasks.length;
    let { enableFilter, activeFilter, clearCompleted } = this.props;
    return (
      <FooterStyles className="container-row">
        <div>{items > 1 ? `${items} items` : `${items} item`} left</div>
        <div className="container-row">
          <button
            onClick={enableFilter}
            id="all"
            className={`filter ${activeFilter === 'all' ? 'enabled' : ''}`}
          >
            All
          </button>
          <button
            onClick={enableFilter}
            id="active"
            className={`filter ${activeFilter === 'active' ? 'enabled' : ''}`}
          >
            Active
          </button>
          <button
            onClick={enableFilter}
            id="completed"
            className={`filter ${
              activeFilter === 'completed' ? 'enabled' : ''
            }`}
          >
            Completed
          </button>
        </div>
        <button className="clear-items" onClick={clearCompleted}>
          Clear completed
        </button>
      </FooterStyles>
    );
  }
}
