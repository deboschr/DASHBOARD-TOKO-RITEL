document.addEventListener("DOMContentLoaded", function () {
	// Retrieve data from data-aggregate and property-aggregate divs
	const tablebarDiv = document.getElementById("data-tablebar");
	const scatterDiv = document.getElementById("data-scatter");

	const tablebarData = JSON.parse(tablebarDiv.getAttribute("data-tablebar"));
	const scatterData = JSON.parse(scatterDiv.getAttribute("data-scatter"));

	if (tablebarData && scatterData) {
		if (tablebarData.length > 0) {
			// Accessing the table head
			const tableHead = document.getElementById("tableHead");

			// Function to generate table header
			function populateTableHeader() {
				const headerRow = document.createElement("tr");
				const groupingHeader = document.createElement("td");
				groupingHeader.textContent = "Education";
				const aggregateHeader = document.createElement("td");
				aggregateHeader.textContent = `Average income`;

				headerRow.appendChild(groupingHeader);
				headerRow.appendChild(aggregateHeader);
				tableHead.appendChild(headerRow);
			}

			// Accessing the table body
			const tableBody = document.getElementById("tableBody");

			// Function to generate table rows
			function populateTable() {
				tableBody.innerHTML = "";

				if (tablebarData && tablebarData.length > 0) {
					tablebarData.forEach((item) => {
						const row = document.createElement("tr");
						const groupingCell = document.createElement("td");
						groupingCell.textContent = item["Education"];
						const resultCell = document.createElement("td");
						resultCell.textContent = item.AggregateResult;

						row.appendChild(groupingCell);
						row.appendChild(resultCell);
						tableBody.appendChild(row);
					});
				} else {
					const emptyRow = document.createElement("tr");
					const emptyCell = document.createElement("td");
					emptyCell.setAttribute("colspan", "2");
					emptyCell.textContent = "No data available";
					emptyRow.appendChild(emptyCell);
					tableBody.appendChild(emptyRow);
				}
			}

			const labels = tablebarData.map((item) => item[Object.keys(item)[0]]);
			const barData = tablebarData.map((item) => item[Object.keys(item)[1]]);

			const ctx = document.getElementById("myBarChart");

			new Chart(ctx, {
				type: "bar",
				data: {
					labels: labels,
					datasets: [
						{
							label: "Education",
							data: barData,
							borderWidth: 1,
						},
					],
				},
				options: {
					scales: {
						y: {
							beginAtZero: true,
						},
					},
				},
			});

			// Populate the table header and body on page load
			populateTableHeader();
			populateTable();
		}

		const xValues = scatterData.map((item) => item[Object.keys(item)[0]]);
		const yValues = scatterData.map((item) => item[Object.keys(item)[1]]);

		const ctx = document.getElementById("myScatterPlot");

		new Chart(ctx, {
			type: "scatter",
			data: {
				datasets: [
					{
						label: `Income} vs Month Fish Products`,
						data: xValues.map((value, index) => ({
							x: value,
							y: yValues[index],
						})),
						borderWidth: 1,
					},
				],
			},
			options: {
				scales: {
					x: {
						type: "linear",
						position: "bottom",
					},
					y: {
						beginAtZero: true,
					},
				},
			},
		});
	}
});
