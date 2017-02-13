//pure functions here; the data that's being served on the page being sent to the container (StudentList)
 var students = function() {
 	var studentsArray = [
 		{
 			name: "Rishi",
 			seat: 5
 		},
 		{
 			name: "Liz",
 			seat: 6
 		}
 	];
 	return studentsArray;
 }

 export default students;