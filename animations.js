$(document).ready(function () {
	const reset = true;
	let sr = ScrollReveal({
		origin: 'top',
		distance: '80px',
		duration: 2000,
		reset
	});

	sr.reveal('.about_container', {});
	sr.reveal('.about_content > h2', { delay: 200 });
	sr.reveal('.about_content > p', { delay: 200 });
	sr.reveal('.about_image', { delay: 200 });

	sr = ScrollReveal({
		origin: 'left',
		distance: '80px',
		duration: 2000,
		reset
	});

	sr.reveal('#token', {});
	sr.reveal('.chart', { delay: 200 });

	sr.reveal('.timer_container', {});

	sr = ScrollReveal({
		origin: 'left',
		distance: '80px',
		duration: 2000,
		reset
	});

	sr.reveal('#roadmap', {});
	sr.reveal('.phase', { delay: 200 });

	sr.reveal('#team', {});
	sr.reveal('.all_team > div', { delay: 200 });

	sr.reveal('.footer-right', {});
	sr.reveal('.footer-middle', { delay: 200 });
	sr.reveal('.footer-left', { delay: 200 });

});