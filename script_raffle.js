$(document).ready(function () {
    $("body").removeClass("preload");

    // count down
    (function () {
        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        // milliseconds since Jan 1, 1970, 00:00:00.000 GMT
        // const countDown = new Date(Date.UTC(2022, 02, 30, 21, 0, 0)).getTime();
        // const x = setInterval(function () {
        //     const now = new Date().getTime();
        //     const distance = countDown - now;

        //     document.getElementById("days").innerText = Math.floor(
        //         distance / day
        //     );
        //     document.getElementById("hours").innerText = Math.floor(
        //         (distance % day) / hour
        //     );
        //     document.getElementById("minutes").innerText = Math.floor(
        //         (distance % hour) / minute
        //     );
        //     document.getElementById("seconds").innerText = Math.floor(
        //         (distance % minute) / second
        //     );

        //     //Show live when countdown finish
        //     if (distance < 0) {
        //         // document.getElementById("headline").innerText = "We are live!";
        //         document.getElementById("headline").style.display = "none";
        //         document.getElementById("countdown").style.display = "none";
        //         document.getElementById("content").style.display = "none";
        //         clearInterval(x);
        //     }
        //     //seconds
        // }, 0);

        const y = setInterval(function () {
            document.getElementById("prize_money").innerText = "$12,400"
            // "$" + Math.floor(Math.random() * 500000) + 1;
        }, 1000 * 1);

        // var first = document.querySelector('#raffle-red-first div');
        // var sec = document.querySelector('#raffle-red-second div');
        // var third = document.querySelector('#raffle-red-third div');
        // const z = setInterval(function () {
        //     first.setAttribute('data-value', "#" + Math.floor(Math.random() * 100) + 1);
        //     sec.setAttribute('data-value', "#" + Math.floor(Math.random() * 100) + 1);
        //     third.setAttribute('data-value', "#" + Math.floor(Math.random() * 100) + 1);
        // }, 1000 * 1);
    })();
});