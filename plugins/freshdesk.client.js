function initFreshChat() {
	window.fcWidget.init({
		token: 'ae5e6563-149c-4b98-bfd2-8516059accd7',
		host: 'https://wchat.freshchat.com',
	})
}
function initialize(i, t) {
	let e
	i.getElementById(t) ? initFreshChat() : (((e = i.createElement('script')).id = t), (e.async = !0), (e.src = 'https://wchat.freshchat.com/js/widget.js'), (e.onload = initFreshChat), i.head.appendChild(e))
}
function initiateCall() {
	initialize(document, 'freshchat-js-sdk')
}
window.addEventListener ? window.addEventListener('load', initiateCall, !1) : window.attachEvent('load', initiateCall, !1)

let scrollPosition = window.scrollY
const logoContainer = document.getElementsByClassName('main-header')

window.addEventListener('scroll', function () {
	scrollPosition = window.scrollY

	if (scrollPosition >= 30) {
		logoContainer.classList.add('c-logo--scrolled')
	} else {
		logoContainer.classList.remove('c-logo--scrolled')
	}
})
