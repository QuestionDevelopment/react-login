import React, { Component } from 'react';
import Form from '../common/components/form';
import Text from '../common/components/text';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      canSubmit: false
    };

    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);
  }

  enableButton() {
    this.setState({
      canSubmit: true
    });
  }
  disableButton() {
    this.setState({
      canSubmit: false
    });
  }
  submit(model) {
    
  }
  render() {
    return (
      <div id="home">
        <div className="section hero">
          <div className="container">
            <div className="row">
              <div className="one-half column">
                <h4 className="hero-heading">Because life is too short for crappy products.</h4>
                <Form button="Search">
                  <Text name="q" required/>
                </Form>
              </div>
              <div className="one-half column phones">
                <img className="phone" alt="" src="/images/iphone.png" />
                <img className="phone" alt="" src="/images/iphone.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="section background-image">
          <div className="container">
            <h3 className="section-heading">Responsive Images</h3>
            <p className="section-description">Skeleton images sit easily in grid with .u-max-full-width class. I suggest exploring solution to serving different images based on device size.</p>
            <div className="row">
              <div className="one-half column category">
                <img className="u-max-full-width" src="https://placehold.it/350x150" alt="" />
              </div>
              <div className="one-half column category">
                <img className="u-max-full-width" src="https://placehold.it/350x150" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <h3 className="section-heading">Need help getting started?</h3>
            <p className="section-description">Skeleton is an amazingly easy place to start with responsive development. If you want to learn more, just visit the documentation!</p>
            <a className="button button-primary" href="http://getskeleton.com">View Skeleton Docs</a>
          </div>
        </div>
        <div className="section background-image">
          <div className="container">
            <div className="row">
              <div className="one-third column value">
                <h2 className="value-multiplier">67%</h2>
                <h5 className="value-heading">Purchase Increase</h5>
                <p className="value-description">Percentage of users more likely to purchase on mobile friendly site.</p>
              </div>
              <div className="one-third column value">
                <h2 className="value-multiplier">90%</h2>
                <h5 className="value-heading">Multi-device Users</h5>
                <p className="value-description">Most of the world accesses the internet on multiple devices.</p>
              </div>
              <div className="one-third column value">
                <h2 className="value-multiplier">66%</h2>
                <h5 className="value-heading">Sad Users</h5>
                <p className="value-description">Percentage of users that are frustrated with page load times.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;