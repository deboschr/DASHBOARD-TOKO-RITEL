
document.addEventListener("DOMContentLoaded", function () {
	// Retrieve data from data-aggregate and property-aggregate divs
	const dataAggregateDiv = document.getElementById("data-aggregate");
	const propAggregateDiv = document.getElementById("property-aggregate");

	const dataAggregate = JSON.parse(dataAggregateDiv.dataset.aggregate);
	const propAggregate = JSON.parse(
		propAggregateDiv.getAttribute("property-aggregate")
	);

	if (dataAggregate && propAggregate) {
		// Accessing the table head
		const tableHead = document.getElementById("tableHead");

		// Function to generate table header
		function populateTableHeader() {
			if (propAggregate) {
				const headerRow = document.createElement("tr");
				const groupingHeader = document.createElement("td");
				groupingHeader.textContent = propAggregate.colGroupBy;
				const aggregateHeader = document.createElement("td");
				aggregateHeader.textContent = `${propAggregate.operator} of ${propAggregate.colAggregate}`;

				headerRow.appendChild(groupingHeader);
				headerRow.appendChild(aggregateHeader);
				tableHead.appendChild(headerRow);
			}
		}

		// Accessing the table body
		const tableBody = document.getElementById("tableBody");

		// Function to generate table rows
		function populateTable() {
			tableBody.innerHTML = "";

			if (dataAggregate && dataAggregate.length > 0) {
				dataAggregate.forEach((item) => {
					const row = document.createElement("tr");
					const groupingCell = document.createElement("td");
					groupingCell.textContent = item[propAggregate.colGroupBy];
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

		// Set the table title
		const tableTitle = document.querySelector(".table-title");
		tableTitle.textContent = `${propAggregate.operator} of ${propAggregate.colAggregate} grouped by ${propAggregate.colGroupBy}`;

		// Populate the table header and body on page load
		populateTableHeader();
		populateTable();
	}
});
