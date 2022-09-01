export function setUpFadeInUpAnima(targets) {
	const options = {
		root: null,
		rootMargin: "-10% 0px",
		threshold: 0,
	};
	const observer = new IntersectionObserver(intersectionChecker, options);

	targets.forEach((target) => {
		observer.observe(target);
	});
}

function intersectionChecker(items) {
	items.forEach((element) => {
		element.isIntersecting ? appear(element) : null;
	});
}

function appear(element) {
	element.target.classList.add('fade-in-up_visible')
}
