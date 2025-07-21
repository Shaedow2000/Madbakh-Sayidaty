let navigationBar = document.getElementById('navigation') as HTMLElement;
let upBtn = document.getElementById('up') as HTMLElement;

let navFixing = (): void => {
	// fix the navigation bar to the top of the screen and make it take the entire page width	
	
	if ( scrollY >= 180 ) {
		navigationBar.style.width = '100%';
		navigationBar.style.position = 'fixed';
	} else {
		navigationBar.style.width = '85%';
		navigationBar.style.position = 'static';
	}
}

let upButton = (): void => {
	// show the up button when it gets to 500 pixels in the Y axis	
	
	if ( scrollY >= 500 ) {
		upBtn.style.right = '10px';
	} else {
		upBtn.style.right = '-100px';
	}
}

let goUp = () => {
	// when the go up button is clicked make the page go to the top
	
}

window.addEventListener('scroll', () => {
	navFixing();
	upButton();
});

