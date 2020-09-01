import React from 'react';

class Translator extends React.Component {
  state = {
    text: ""
  }

  inputChangeHandler = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="controls">
          <div className="input-container">
            <span>input:</span>
            <input type="text" className="text-input" data-testid="text-input" value={this.state.text} onChange={this.inputChangeHandler} />
          </div>
          <div className="input-container">
            <span>output:</span>
            <input type="text" className="text-output" data-testid="text-output" value={this.props.translations.get(this.state.text) || ''} readOnly />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Translator;
