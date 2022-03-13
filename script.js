$(document).ready(function () {
    $("body").removeClass("preload");

    const tax = document.getElementById("tax");
    const taxChart = new Chart(tax, {
        type: "doughnut",
        data: {
            labels: ["Marketing", "Raffle", "Team", "Liquidity"],
            datasets: [
                {
                    data: [3, 2, 2, 3],
                    backgroundColor: [
                        "rgba(171, 93, 238)",
                        "rgb(218, 165, 32)",
                        "rgba(29, 161, 31)",
                        "rgb(241, 59, 59)",
                    ],
                    borderColor: [
                        "rgba(171, 93, 238)",
                        "rgb(218, 165, 32)",
                        "rgba(29, 161, 31)",
                        "rgb(241, 59, 59)",
                    ],
                    borderWidth: 1,
                },
            ],
        },
    });

});