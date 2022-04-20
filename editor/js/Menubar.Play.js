import { UIPanel } from './libs/ui.js';

function MenubarPlay(editor) {

	const signals = editor.signals;
	const strings = editor.strings;

	const container = new UIPanel();
	container.setClass('menu');

	let isPlaying = false;

	const title = new UIPanel();
	title.setClass('title');
	const logoImage = document.createElement('img');
	logoImage.title = "File Logo Image";
	logoImage.src = 'images/play-icon.png';
	logoImage.style.width = "30px";
	title.dom.appendChild(logoImage);
	title.onClick(function () {

		if (isPlaying === false) {

		
		
			isPlaying = true;
			title.dom.firstChild.src = "images/stop-icon.jpg";
			signals.startPlayer.dispatch();

		} else {

	
			isPlaying = false;
			title.dom.firstChild.src = "images/play-icon.png";
			signals.stopPlayer.dispatch();

		}

	});
	container.add(title);

	return container;

}

export { MenubarPlay };
