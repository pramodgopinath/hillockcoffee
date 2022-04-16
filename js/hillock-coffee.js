// JavaScript Document
$(document).ready(function () {
	$("#submit").click(function submit() {
		alert("Reservation for " + $("#name").val() + " is successfully completed");
	});

	$("#menubtn").click(function () {
		$("#menutoggle").toggleClass("active");
	});

	/*Responsive scripts*/
	$(window).resize(function () {
		var brwdth = $(window).width();
		if (brwdth > 991) {
			$("#menutoggle").removeClass("active");
		}
	});
});
