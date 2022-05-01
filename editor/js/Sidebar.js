import { UITabbedPanel, UISpan, UIDiv, UIButton, UIHorizontalRule, UIText, UIIcon } from './libs/ui.js';

import { SidebarScene } from './Sidebar.Scene.js';
import { SidebarProperties } from './Sidebar.Properties.js';
import { SidebarScript } from './Sidebar.Script.js';
import { SidebarAnimation } from './Sidebar.Animation.js';
import { SidebarProject } from './Sidebar.Project.js';
import { SidebarSettings } from './Sidebar.Settings.js';
import { SidebarEntity } from './Sidebar.Entity.js';

function Sidebar(editor) {
	const signals = editor.signals;
	const strings = editor.strings;

	const toggleSec = new UIDiv();
	toggleSec.setId("toggleButton");
	const toggleButton = new UIButton();
	toggleButton.addClass("btn1");
	toggleButton.addClass("btn");
	toggleButton.addClass("btn-primary");
	const toggleIcon = new UIIcon();
	toggleIcon.addClass("bi");
	toggleIcon.addClass("bi-bar-chart-steps");
	toggleButton.add(toggleIcon);


	toggleSec.add(toggleButton);
	toggleSec.addClass("toggleButton1");



	const sideMain = new UIDiv();
	sideMain.add(toggleSec);
	sideMain.setId("sidebar1");
	sideMain.addClass("sideBarMainShow");
	const sidebarTitle = new UIDiv();
	sidebarTitle.setId("sidebarTitle");

	const titleText = new UIText("Title");
	titleText.addClass("sidebarTitleSection");
	sidebarTitle.add(titleText);




	const titleDescription = new UIText("Tab Description Text");
	titleDescription.addClass("titleDescription")
	sidebarTitle.add(titleDescription);

	const titleDescription1 = new UIText("Lore Ipsum");
	titleDescription1.addClass("titleDescription")
	sidebarTitle.add(titleDescription1);





	const container = new UITabbedPanel();
	//container.setId( 'sidebar' );
	//container.add(togggleButton);
	const scene = new UISpan().add(
		new SidebarScene(editor),
		new SidebarProperties(editor),
		new SidebarAnimation(editor),
		new SidebarScript(editor)
	);
	const project = new SidebarProject(editor);
	const settings = new SidebarSettings(editor);

	container.addTab('entity', strings.getKey('sidebar/entity'), settings,"tabsSetting");
	container.addTab('scene', strings.getKey('sidebar/scene'), scene,"tabsSetting");
	container.addTab('project', strings.getKey('sidebar/project'), project,"tabsSetting");
	container.addTab('settings', strings.getKey('sidebar/settings'), settings,"tabsSetting");


	
	
	container.select('scene');

	


	let sideBarBottom = new UIDiv();
	//sideBarBottom.setId("sidebarTitle");
	sideBarBottom.addClass("bottomSection");
	
	sideBarBottom.addClass("d-flex");
	sideBarBottom.addClass("justify-content-around");

	let saveButton = new UIButton();
	saveButton.addClass("btn-light");
	saveButton.addClass("btn");
	saveButton.addClass("btn-md");
	saveButton.setTextContent("Save");

	let submitButton = new UIButton();
	submitButton.addClass("btn-primary");
	submitButton.addClass("btn");
	submitButton.addClass("btn-md");
	submitButton.setTextContent("Submit");

	sideBarBottom.add(saveButton);

	sideBarBottom.add(submitButton);

	sideMain.add(sidebarTitle);
	sideMain.add(container);
	sideMain.add(sideBarBottom);



	let sideBarShow = true;

	toggleButton.onClick(function () {

		if (sideBarShow) {

			sideBarShow = false;
			sideMain.setClass("sideBarMainHide");
		}
		else {
			sideBarShow = true;
			sideMain.setClass("sideBarMainShow");

		}


	});




	return sideMain;

}

export { Sidebar };
