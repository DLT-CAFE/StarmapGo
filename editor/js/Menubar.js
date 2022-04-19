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
	const logoImage = document.createElement('img');
	logoImage.title = "Logo Image";
	logoImage.src = 'images/starmapGoLogo.png';
	logoImage.style.width = "200px";
	container.dom.appendChild(logoImage);
	//#endregion

	//#region  for File/Edit and Play
	const menuOption = new UIDiv();
	menuOption.add(new MenubarFile(editor));
	menuOption.add(new MenubarEdit(editor));
	//container.add( new MenubarAdd( editor ) ); 
	menuOption.add(new MenubarPlay(editor));
	//container.add( new MenubarExamples( editor ) );
	//container.add( new MenubarView( editor ) );
	//container.add( new MenubarHelp( editor ) );
	//container.add( new MenubarStatus( editor ) );
	container.add(menuOption);
	//#endregion

	//#region for To Show User Current Date.
	const dateDiv = new UIDiv();
	dateDiv.setClass("topNavbar-date");
	let currentDate = new Date();
	dateDiv.setInnerHTML( currentDate.toTimeString() + " <br/>" + currentDate.toLocaleDateString() );
	container.add(dateDiv);
	//#endregion 



	return container;

}

export { Menubar };
