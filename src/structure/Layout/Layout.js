import React, { Component } from 'react';
import classes from './Layout.module.scss';
import Header from '../../containers/Header/Header';
import Main from '../../containers/Main/Main';
import Footer from '../../containers/Footer/Footer';
import { connect } from 'react-redux';
import { setStylesLayout } from '../../store/actions/actions';

class Layout extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.props.setStylesLayout(this.props.location.pathname);
    }
  }

  componentDidMount() {
    this.props.setStylesLayout(this.props.location.pathname);
  }

  render() {
    const cls = [classes.Layout, classes[this.props.typeLayout]];

    return (
      <div className={cls.join(' ')}>
        <Header />
        <Main>{this.props.children}</Main>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { typeLayout: state.layout.typeLayout };
}

function mapDispatchToProps(dispatch) {
  return {
    setStylesLayout: (pathname) => dispatch(setStylesLayout(pathname)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
