import React from 'react';
import PropTypes from 'prop-types';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormControlLabel } from 'material-ui/Form';

const SchoolTypeChooser = props => (
  <RadioGroup value={props.schoolType}>
    <FormControlLabel
      onClick={() => props.handleChange('gymnasium')}
      value="gymnasium"
      control={<Radio />}
      label="Гимназия"
    />
    <FormControlLabel
      onClick={() => props.handleChange('elementary')}
      value="elementary"
      control={<Radio />}
      label="Основно училище"
    />
  </RadioGroup>
);

SchoolTypeChooser.propTypes = {
  schoolType: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SchoolTypeChooser;
