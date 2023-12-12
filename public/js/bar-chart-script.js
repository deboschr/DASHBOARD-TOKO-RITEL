document.addEventListener("DOMContentLoaded", function () {
	// Retrieve data from data-aggregate and property-aggregate divs
	const dataAggregateDiv = document.getElementById("data-aggregate");
	const propAggregateDiv = document.getElementById("property-aggregate");

	const dataAggregate = JSON.parse(dataAggregateDiv.dataset.aggregate);
	const propAggregate = JSON.parse(
		propAggregateDiv.getAttribute("property-aggregate")
	);

	if (dataAggregate && dataAggregate.length > 0) {
		const labels = dataAggregate.map((item) => item[Object.keys(item)[0]]);
		const data = dataAggregate.map((item) => item[Object.keys(item)[1]]);

		const ctx = document.getElementById("myChart");

		new Chart(ctx, {
			type: "bar",
			data: {
				labels: labels,
				datasets: [
					{
						label: propAggregate.colAggregate,
						data: data,
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

		// Set the table title
		const tableTitle = document.querySelector(".table-title");
		tableTitle.textContent = `${propAggregate.operator} of ${propAggregate.colAggregate} grouped by ${propAggregate.colGroupBy}`;
	}
});
