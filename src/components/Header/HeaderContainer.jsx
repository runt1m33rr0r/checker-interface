import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import Header from './Header';
import { resetMessage, toggleDarkness } from '../../actions/ui.actions';

class HeaderContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldBeLoading: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoading === true) {
      const timeout = setTimeout(() => {
        if (this.props.isLoading === true) {
          this.setState({ shouldBeLoading: true });
        } else {
          this.setState({ shouldBeLoading: false });
        }
        clearTimeout(timeout);
      }, 150);
    } else {
      this.setState({ shouldBeLoading: false });
    }
  }

  render() {
    return <Header {...this.props} isLoading={this.state.shouldBeLoading} />;
  }
}

HeaderContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = ({
  auth, wizard, network, ui,
}) => ({
  isAuthenticated: auth.isAuthenticated,
  isLoading: network.isFetching || wizard.isGenerating,
  username: auth.username,
  message: network.message,
  dark: ui.dark,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ handleSnackbarClose: resetMessage, toggleDarkness }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
