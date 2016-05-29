$(document).ready(function() {
  $("#MLA").click(function() {
  if ( ( $('form')[0].checkValidity() ) == false) {
    	console.log($("#name").val);
   		sweetAlert("Oops...", "Yo Holmes you gotta fill that field", "error");
  }
  else {
    		
    	$("#finalName").html(document.getElementById("name").value);
    	$("#finalTeacher").html(document.getElementById("teacherName").value);
	    $("#finalClass").html(document.getElementById("class").value);
	    $("#finalDate").html(document.getElementById("date").value);
	    $("#finalTitle").html(document.getElementById("title").value);
	    $("#actualEssay").html(document.getElementById("essay").value);
} 
  });
  $("#Chicago").click(function() {
  	if ( ( $('form')[0].checkValidity() ) == false) {
    	console.log($("#name").val);
   		sweetAlert("Oops...", "Yo Holmes you gotta fill that field", "error");
  }
  else { 
  
  $("#finalName").html(document.getElementById("title").value);
  $("#finalName").addClass("chicagoTitleCenter");
  $("#finalTeacher").html(document.getElementById("name").value);
  $("#finalTeacher").addClass("chicagoCrapCenter");
  $("#finalClass").html(document.getElementById("class").value);
  $("#finalClass").addClass("chicagoCrapCenter");
  $("#finalDate").html(document.getElementById("date").value);
  $("#finalDate").addClass("chicagoCrapCenterBottom");
  }
  
  });
});

