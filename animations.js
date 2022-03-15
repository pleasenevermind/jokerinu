$(document).ready(function () {
	const reset = false;
	const duration = 600;
	let sr = ScrollReveal({
		origin: 'top',
		distance: '80px',
		duration,
		reset
	});

	sr.reveal('.about_container', {});
	sr.reveal('.about_content > h2', { delay: 200 });
	sr.reveal('.about_content > p', { delay: 200 });
	sr.reveal('.about_content > a', { delay: 200 });
	sr.reveal('.about_image', { delay: 200 });

	sr.reveal('.main > h1', {});
	sr.reveal('.timer_container', { delay: 200 });

	sr = ScrollReveal({
		origin: 'left',
		distance: '80px',
		duration,
		reset
	});

	sr.reveal('.prize_pool', {});
	sr.reveal('.raffle', { delay: 200 });

	sr = ScrollReveal({
		origin: 'left',
		distance: '80px',
		duration,
		reset
	});

	sr.reveal('#how_to > h1', {});
	sr.reveal('.raffle_card', { delay: 200 });

	sr = ScrollReveal({
		origin: 'bottom',
		distance: '80px',
		duration,
		reset
	});

	sr.reveal('.phase', {});

	sr.reveal('#how_work > h1', {});
	sr.reveal('#how_work > p', { delay: 200 });
});