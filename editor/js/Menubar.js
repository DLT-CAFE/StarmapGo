import { UIDiv, UIPanel } from './libs/ui.js';

import { MenubarAdd } from './Menubar.Add.js';
import { MenubarEdit } from './Menubar.Edit.js';
import { MenubarFile } from './Menubar.File.js';
//import { MenubarExamples } from './Menubar.Examples.js';
//import { MenubarView } from './Menubar.View.js';
//import { MenubarHelp } from './Menubar.Help.js';
import { MenubarPlay } from './Menubar.Play.js';
//import { MenubarStatus } from './Menubar.Status.js';

function Menubar(editor) {
	const signals = editor.signals;
	const strings = editor.strings;
	const container = new UIPanel();
	container.setId('menubar');

	container.setInnerHTML('');
	container.setClass("topNavbar");

	//#region  Create Logo Section at the Top Bar now.
	let columnLeft = new UIDiv();
	columnLeft.addClass("column");
	columnLeft.addClass("left");

	let leftContainer = new  UIDiv();
	leftContainer.addClass("logo-container");
	let leftLogo = new  UIDiv();
	leftLogo.addClass("logo");
	const logoImage = document.createElement('img');
	logoImage.title = "Logo Image";
	logoImage.src = 'images/starmapGoLogo.png';
	logoImage.style.width = "200px";
	leftLogo.dom.appendChild(logoImage);
	leftContainer.add(leftLogo);
	columnLeft.add(leftContainer);
	container.add(columnLeft);
	//#endregion

	//#region  for File/Edit and Play
	const menuOption = new UIDiv();
	menuOption.addClass("middle");
	menuOption.addClass("column");
	//menuOption.add(new MenubarFile(editor));
	//menuOption.add(new MenubarEdit(editor));
	//container.add( new MenubarAdd( editor ) ); 

	const forwardMainDiv = new UIDiv();
	forwardMainDiv.addClass("forward-content");
	const forwardImage = new UIDiv();
	forwardImage.addClass("forward-image");
	const forwardlogoImage = document.createElement('img');
	forwardlogoImage.title = "Undo";
	forwardlogoImage.src = 'images/backward.png';
	forwardlogoImage.style.width = "30px";
	forwardImage.dom.appendChild(forwardlogoImage);
	forwardMainDiv.add(forwardImage);

	forwardMainDiv.onClick( function () {
		editor.undo();

	});

	menuOption.add(forwardMainDiv);








	menuOption.add(new MenubarPlay(editor));


	const BackMainDiv = new UIDiv();
	BackMainDiv.addClass("backward-content");
	const BackImage = new UIDiv();
	BackImage.addClass("backward-image");
	const BacklogoImage = document.createElement('img');
	BacklogoImage.title = "Redo";
	BacklogoImage.src = 'images/forward.png';
	BacklogoImage.style.width = "30px";
	BackImage.dom.appendChild(BacklogoImage);
	BackMainDiv.add(BackImage);

	BackMainDiv.onClick( function () {
		editor.redo();

	});
	menuOption.add(BackMainDiv);
	//container.add( new MenubarExamples( editor ) );
	//container.add( new MenubarView( editor ) );
	//container.add( new MenubarHelp( editor ) );
	//container.add( new MenubarStatus( editor ) );
	container.add(menuOption);
	//#endregion

	//#region for To Show User Current Date.
	const dateDiv = new UIDiv();
	dateDiv.addClass("topNavbar-date");
	dateDiv.addClass("right");
	dateDiv.addClass("column");
	let currentDate = new Date();
	dateDiv.setInnerHTML( currentDate.toLocaleTimeString());
	container.add(dateDiv);
	//#endregion 



	return container;

}

export { Menubar };
