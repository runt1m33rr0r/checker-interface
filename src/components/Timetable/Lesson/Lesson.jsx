import React from 'react';
import PropTypes from 'prop-types';

const Lesson = ({ index }) => <div>{index}</div>;

Lesson.propTypes = {
  index: PropTypes.number.isRequired,
};

export default Lesson;
