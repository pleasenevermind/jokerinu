$(document).ready(function () {
	const reset = false;
	let sr = ScrollReveal({
		origin: 'top',
		distance: '80px',
		duration: 2000,
		reset
	});

	sr.reveal('.about_container', {});
	sr.reveal('.about_content > h2', { delay: 200 });
	sr.reveal('.about_content > p', { delay: 200 });
	sr.reveal('.about_content > a', { delay: 200 });
	sr.reveal('.about_image', { delay: 200 });

	sr.reveal('.main > h1', {});
	sr.reveal('.timer_container', { delay: 200 });
	sr.reveal('.timer_container > h2', { delay: 200 });

	sr = ScrollReveal({
		origin: 'left',
		distance: '80px',
		duration: 2000,
		reset
	});

	sr.reveal('#utilities', {});
	sr.reveal('.card', { delay: 200 });
	sr.reveal('.nft > img', { delay: 200 });

	sr.reveal('.prize_pool', {});
	sr.reveal('.raffle', { delay: 200 });

	sr = ScrollReveal({
		origin: 'left',
		distance: '80px',
		duration: 2000,
		reset
	});

	sr.reveal('#tax', {});
	sr.reveal('.tokenomics_content', {});

	sr.reveal('#how_to > h1', {});
	sr.reveal('.raffle_card', { delay: 200 });

	sr = ScrollReveal({
		origin: 'bottom',
		distance: '80px',
		duration: 2000,
		reset
	});

	sr.reveal('.phase', {});

	sr.reveal('#how_work > h1', {});
	sr.reveal('#how_work > p', { delay: 200 });

	sr.reveal('.content_faq > div', { delay: 200 });

	sr.reveal('#team > div > p', {});
	sr.reveal('.all_team', { delay: 200 });
});