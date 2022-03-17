$(document).ready(function () {
    $("body").removeClass("preload");

    // main chart
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

// count down
(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    // milliseconds since Jan 1, 1970, 00:00:00.000 GMT
    const countDown = new Date(Date.UTC(2022, 02, 30, 21, 0, 0)).getTime();
    const x = setInterval(function () {
        const now = new Date().getTime();
        const distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(
            distance / day
        );
        document.getElementById("hours").innerText = Math.floor(
            (distance % day) / hour
        );
        document.getElementById("minutes").innerText = Math.floor(
            (distance % hour) / minute
        );
        document.getElementById("seconds").innerText = Math.floor(
            (distance % minute) / second
        );

        //Show live when countdown finish
        if (distance < 0) {
            // document.getElementById("headline").innerText = "We are live!";
            document.getElementById("headline").style.display = "none";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "none";
            clearInterval(x);
        }
        //seconds
    }, 0);

    const y = setInterval(function () {
        document.getElementById("prize_money").innerText =
            "$" + Math.floor(Math.random() * 500000) + 1;
    }, 1000 * 1);

    // const z = setInterval(function () {
    //     $("#raffle-red div").attr('data-before', Math.floor(Math.random() * 5000) + 1);
    // }, 1000 * 1);
})();