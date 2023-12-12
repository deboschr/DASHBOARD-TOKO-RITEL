document.addEventListener("DOMContentLoaded", function () {
	const importContainer = document.querySelector(".import-container");
	const isAllow = importContainer.getAttribute("data-isallow");
	const iconElement = document.querySelector(".icon-import");
	const fileInput = document.getElementById("file");
	const textFile = document.querySelector(".text-file");
	const importButton = document.querySelector(".btn-import");

	if (isAllow == "false") {
		fileInput.disabled = true;
		importButton.disabled = true;
	}

	iconElement.addEventListener("click", function () {
		this.classList.toggle("clicked");
	});

	fileInput.addEventListener("change", function () {
		if (fileInput.files.length > 0) {
			textFile.textContent = fileInput.files[0].name;
			textFile.style.color = "#219be1";
		} else {
			textFile.textContent = "No file chosen yet!";
		}
	});
});
