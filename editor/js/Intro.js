//this module will function as editor/starmapgo.html preloader. Consisting of 2-3 step modal, animated logo
//sequence, page will have audio. buttons onhover state will trigger audio,  all transitions animations 
//(button appear, modal sequence, and final transition should be a slow gracefull fade  
import { UIPanel, UIBreak, UIRow, UIColor, UISelect, UIText, UINumber, UIDiv, UIButton, } from './libs/ui.js';



function Intro(editor) {


	

	const container = new UIPanel();
	const signals = editor.signals;
	container.setId('intro-overlay');
	container.setBorderTop('0');
	container.setPaddingTop('20px');
	container.setOpacity('100%')



	const mainDiv = new UIDiv();
	mainDiv.addClass("popUpMainDiv");

	//#region section for the first popup  modal
	let textArea = new UIDiv();
	textArea.addClass("step1-content");
	textArea.setTextContent("LOGO TYPE LOTTIE ANIMATIONS");

	let step1Button = new UIButton();
	step1Button.setTextContent("Start");
	step1Button.addClass("step1-startButton");
	mainDiv.add(textArea);
	mainDiv.add(step1Button);
	container.add(mainDiv);
	//#endregion

	//#region section for the second popup modal
	let textArea1 = new UIDiv();
	textArea1.addClass("step2-content");
	textArea1.setTextContent("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.");

	let step2Button = new UIButton();
	step2Button.setTextContent("Continue");
	step2Button.addClass("step2-startButton");
	//#endregion

	//#region section for the Third popup modal
	let textArea2 = new UIDiv();
	textArea2.addClass("step2-content");
	textArea2.setTextContent("Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec");

	let step3Button = new UIButton();
	step3Button.setTextContent("Launch");
	step3Button.addClass("step3-startButton");
	//#endregion




	//#region Click event for the first popup modal button
	step1Button.onClick(function () {
		var child = mainDiv.dom.lastElementChild;
		while (child) {
			mainDiv.dom.removeChild(child);
			child = mainDiv.dom.lastElementChild;
		}

		mainDiv.add(textArea1);
		mainDiv.add(step2Button);
	});
	//#endregion

	//#region Click event for the Second popup modal button
	step2Button.onClick(function () {
		var child = mainDiv.dom.lastElementChild;
		while (child) {
			mainDiv.dom.removeChild(child);
			child = mainDiv.dom.lastElementChild;
		}


		mainDiv.add(textArea2);
		mainDiv.add(step3Button);
	});
	//#endregion


	//#region Click event for the Third popup modal button
	step3Button.onClick(function () {
		var child = container.dom.lastElementChild;
		while (child) {
			container.dom.removeChild(child);
			child = container.dom.lastElementChild;
		}
		
		let element = document.getElementById("intro-overlay");
		element.remove();

		signals.initializeStarMapGo.dispatch();

	});
	//#endregion






	//	container.add( new MenubarFile( editor ) ); 
	//	container.add( new MenubarEdit( editor ) );
	//	container.add( new MenubarAdd( editor ) );
	//	container.add( new MenubarPlay( editor ) );




	return container;

}

export { Intro };
