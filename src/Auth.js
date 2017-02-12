import React from 'react';


class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
        </label>
      </form>
    );
  }

}

export default Auth;
