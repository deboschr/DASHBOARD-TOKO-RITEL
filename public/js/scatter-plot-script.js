document.addEventListener("DOMContentLoaded", function () {
	// Retrieve data from data-aggregate and property-aggregate divs
	const dataAggregateDiv = document.getElementById("data-aggregate");
	const propAggregateDiv = document.getElementById("property-aggregate");

	const dataAggregate = JSON.parse(dataAggregateDiv.dataset.aggregate);
	const propAggregate = JSON.parse(
		propAggregateDiv.getAttribute("property-aggregate")
	);

	if (dataAggregate && dataAggregate.length > 0) {
		const xValues = dataAggregate.map((item) => item[Object.keys(item)[0]]);
		const yValues = dataAggregate.map((item) => item[Object.keys(item)[1]]);

		const ctx = document.getElementById("myChart");

		new Chart(ctx, {
			type: "scatter",
			data: {
				datasets: [
					{
						label: `${propAggregate.colX} vs ${propAggregate.colY}`,
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

		// Set the table title
		const tableTitle = document.querySelector(".table-title");
		tableTitle.textContent = `Scatter plot of ${propAggregate.colX}) against (${propAggregate.colY})`;
	}
});
