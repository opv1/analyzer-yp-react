import React, { Component } from 'react';
import classes from './Layout.module.scss';
import Header from '../../containers/Header/Header';
import Main from '../../containers/Main/Main';
import Footer from '../../containers/Footer/Footer';

class Layout extends Component {
  state = {
    type: null,
  };

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      if (this.props.location.pathname === '/yp-graduate-work-react') {
        this.setState({
          type: 'withBackground',
        });
      } else {
        this.setState({
          type: null,
        });
      }
    }
  }

  componentDidMount() {
    if (this.props.location.pathname === '/yp-graduate-work-react') {
      this.setState({
        type: 'withBackground',
      });
    }
  }

  render() {
    const cls = [classes.Layout, classes[this.state.type]];

    return (
      <div className={cls.join(' ')}>
        <Header type={this.state.type} />
        <Main>{this.props.children}</Main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
