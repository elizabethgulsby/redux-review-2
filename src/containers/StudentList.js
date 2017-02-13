import React, { Component } from 'react';
import { connect } from 'react-redux';
//have to import SelectStudent action or else redux won't know what to return
import SelectStudent from '../actions/SelectStudent';
//trigger reaction through every single reducer
import { bindActionCreators } from 'redux';


class StudentList extends Component {
	render () {
		var studentArray = [];
			this.props.students.map((student, index) => {
			studentArray.push(
				<li key={index} onClick={() => this.props.SelectStudent(student)}>
					{student.name}
				</li>
			)
		});
		return (
			<div>
				{studentArray}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		students: state.students
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		SelectStudent: SelectStudent
	}, dispatch)
}

var aComponentThatHasReduxStateAndActions = connect(mapStateToProps, mapDispatchToProps)(StudentList);

export default aComponentThatHasReduxStateAndActions;