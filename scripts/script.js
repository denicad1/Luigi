const popUps = () => {
	$(function () {
		$("#popUpBtn").click(function () {
			let text = $("main").text();

			$(".popUp").css({ opacity: "1", visibility: "visible" });
		});
		$("#popUpClose,#grubBtn").click(function () {
			$(".popUp").css({ opacity: "0", visibility: "hidden" });
		});
	});
};
popUps();
