import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setTitle } from '../../../actions/ui-actions';
import Table from '../Table';

class UserTable extends Component {
  componentDidMount = () => this.props.setTitle(this.props.title);

  render = () => <Table {...this.props} />;
}

UserTable.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setTitle: title => dispatch(setTitle(title)),
});

export default connect(null, mapDispatchToProps)(UserTable);
