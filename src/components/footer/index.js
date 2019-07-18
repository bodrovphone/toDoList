import React, { Component } from 'react';
import { FooterStyles } from './FooterStyles';

export default class Footer extends Component {
  render() {
    const items = this.props.activeTasks.length;
    let { enableFilter, activeFilter, clearCompleted } = this.props;
    return (
      <FooterStyles className="container-row">
        <div className="flex-item">
          {items > 1 ? `${items} items` : `${items} item`} left
        </div>
        <div className="flex-item container-row">
          <button
            onClick={enableFilter}
            id="all"
            className={`flex-item filter ${
              activeFilter === 'all' ? 'enabled' : ''
            }`}
          >
            All
          </button>
          <button
            onClick={enableFilter}
            id="active"
            className={`flex-item filter ${
              activeFilter === 'active' ? 'enabled' : ''
            }`}
          >
            Active
          </button>
          <button
            onClick={enableFilter}
            id="completed"
            className={`flex-item filter ${
              activeFilter === 'completed' ? 'enabled' : ''
            }`}
          >
            Completed
          </button>
        </div>
        <button className="flex-item clear-items" onClick={clearCompleted}>
          Clear completed
        </button>
      </FooterStyles>
    );
  }
}
