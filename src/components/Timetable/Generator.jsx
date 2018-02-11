import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';

import { connect } from 'react-redux';
import { generateTimetable } from '../../actions/timetable-actions';

const Generator = ({ generate }) => (
  <Button variant="raised" color="primary" onClick={() => generate()}>
    Генерирай програма
  </Button>
);

Generator.propTypes = {
  generate: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  generate: () => dispatch(generateTimetable()),
});

export default connect(null, mapDispatchToProps)(Generator);
