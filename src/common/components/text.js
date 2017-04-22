import React from 'react';
import {HOC} from 'formsy-react';

class Text extends React.Component {

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    console.log(value);
    this.props.setValue('something');
  }

  render() {
    return(
      <div>
        <input
          type="text"
          onChange={this.onChange}
          value={this.props.getValue()}
        />
      </div>
    );
  }
}

export default HOC(Text);
