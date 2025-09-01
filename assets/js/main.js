(function () {
	var toggle = document.querySelector('.nav__toggle');
	var menu = document.getElementById('menu');
	if (toggle && menu) {
		toggle.addEventListener('click', function () {
			var expanded = toggle.getAttribute('aria-expanded') === 'true';
			toggle.setAttribute('aria-expanded', String(!expanded));
			menu.setAttribute('aria-expanded', String(!expanded));
		});
	}

	var year = document.getElementById('year');
	if (year) {
		year.textContent = String(new Date().getFullYear());
	}

	// Smooth scroll for same-page anchors
	document.addEventListener('click', function (e) {
		var target = e.target;
		if (target && target.matches('a[href^="#"]')) {
			var href = target.getAttribute('href');
			if (href && href.length > 1) {
				e.preventDefault();
				var el = document.querySelector(href);
				if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
			}
		}
	}, false);
})();



