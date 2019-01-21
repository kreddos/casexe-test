import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss';

const propTypes = {
  onAddIp: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onRemoveIp: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  maxLen: PropTypes.number,
  errorMessage: PropTypes.string,
};

class IpControl extends Component {
  static propTypes = propTypes

  static defaultProps = {
    maxLen: undefined,
    errorMessage: '',
    onFocus: () => {},
  }


  ipRegex = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;

  constructor(props) {
    super(props);
    this.onAddIp = this.onAddIp.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  state = {
    value: '',
    errorMessage: '',
  };

  onFocus() {
    return new Promise((res) => {
      this.setState({ errorMessage: '' }, res);
    })
      .then(() => {
        const { onFocus } = this.props;
        onFocus();
      });
  }

  onAddIp() {
    const { value } = this.state;

    if (!this.ipRegex.test(value)) {
      this.setState({ errorMessage: 'invalid format' });
      return Promise.resolve();
    }

    const { list } = this.props;

    if (list.includes(value)) {
      this.setState({ errorMessage: 'You have already entered this IP address.' });
      return Promise.resolve();
    }

    return new Promise((res) => {
      this.setState({ value: '', errorMessage: '' }, res);
    }).then(() => {
      const { onAddIp } = this.props;
      onAddIp(value);
    });
  }

  onRemoveIp(index) {
    const { onRemoveIp } = this.props;
    onRemoveIp(index);
  }

  onChangeValue(e) {
    const { value } = e.currentTarget;
    this.setState({ value });
  }

  onKeyPress(e) {
    if (e.key !== 'Enter') {
      return;
    }

    this.onAddIp();
  }

  get errorMessage() {
    const { errorMessage } = this.props;
    const { errorMessage: localErrorMessage } = this.state;
    return errorMessage || localErrorMessage;
  }

  get inputProps() {
    const props = { ...this.props };
    Object.keys(propTypes).forEach((propName) => {
      delete props[propName];
    });
    return props;
  }

  renderIpControlList() {
    const { list } = this.props;

    if (!list.length) {
      return null;
    }

    return (
      <div className="ipControlList">
        { list.map(this.renderIp) }
      </div>
    );
  }

  renderAddButton() {
    const { maxLen, list } = this.props;

    if (maxLen && list.length >= maxLen) {
      return null;
    }

    return (
      <button className="linkButton addIpButton" type="button" onClick={this.onAddIp}>
        <span className="icon">+</span>
        add IP
      </button>
    );
  }

  renderIp(ip, key) {
    return (
      <div key={key} className="ipListItem">
        <span className="ipTitle">{ip}</span>
        <button className="linkButton" type="button" onClick={() => this.onRemoveIp(key)}>X remove</button>
      </div>
    );
  }

  renderErrorMessage() {
    if (!this.errorMessage) {
      return null;
    }

    return (
      <div className="controlMessage">
        {this.errorMessage}
      </div>
    );
  }

  render() {
    const { value } = this.state;
    return (
      <div className="ipControl">
        <div className="ipControlForm">
          <input {...this.inputProps} onFocus={this.onFocus} onKeyPress={this.onKeyPress} value={value} id="ip" type="email" onChange={this.onChangeValue} className={classNames({ error: this.errorMessage })} />
          { this.renderAddButton() }
        </div>
        { this.renderErrorMessage() }
        { this.renderIpControlList() }
      </div>
    );
  }
}

export default IpControl;
