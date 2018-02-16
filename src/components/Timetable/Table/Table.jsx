import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Lesson from '../Lesson';
import TabView from '../../common/TabView';

const Table = ({ groupNames }) => <TabView renderElement={Lesson} elements={groupNames} />;

Table.propTypes = {
  groupNames: PropTypes.array.isRequired,
};

const mapStateToProps = ({ wizard }) => ({
  groupNames: wizard.groupNames,
});

export default connect(mapStateToProps)(Table);
