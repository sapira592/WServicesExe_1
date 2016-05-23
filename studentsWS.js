// returns all excellence students NAMES - only!
exports.getAllExcellenceStudent = function(allStudents) 
{
   var namesArr = [];
   var j = 0 ;

   for(var i = 0; i < allStudents.length; i++)
   	if(allStudents[i].grade > 89) 
   		namesArr[j++] = allStudents[i].name;

   if(!j) return "No excellence students";
   return namesArr;
};

exports.getStudGrade = function(id,allStudents) 
{ 
	var flag = false;
	var grade;

	for(var i=0;i < allStudents.length; i++)
	{
		if(allStudents[i].id == id)
		{
			grade = allStudents[i].grade;
			flag = true;
		}
	}

	if(flag) return grade;
	return "Invalid id";
}; 

exports.getExcellenceByYear = function(year,allStudents)
{   
   var namesArr = [];
   var j = 0 ;

   for(var i = 0; i < allStudents.length; i++)
   	if(allStudents[i].year == year && allStudents[i].grade > 89) 
   		namesArr[j++] = allStudents[i];

   if(!j) return "No excellence students in " + year;
   return namesArr;
};