//action that's being dispatched
function SelectStudent(student) {
	return {
		type: "pick_student",
		payload: student
	}
}

export default SelectStudent;