import { UITabbedPanel, UISpan, UIDiv, UIButton, UIHorizontalRule, UIText, UIIcon,BootstrapModal } from './libs/ui.js';

import { SidebarScene } from './Sidebar.Scene.js';
import { SidebarProperties } from './Sidebar.Properties.js';
import { SidebarScript } from './Sidebar.Script.js';
import { SidebarAnimation } from './Sidebar.Animation.js';
import { SidebarProject } from './Sidebar.Project.js';
import { SidebarSettings } from './Sidebar.Settings.js';
import { SidebarEntity } from './Sidebar.Entity.js';
import { AddModalShape } from './../starmapgo/AddModalShape.js';
import { RegistryA } from './../starmapgo/RegistryA.js';
import { RegistryB } from './../starmapgo/RegistryB.js';
import { GeoData } from './../starmapgo/GeoData.js';


function Sidebar(editor) {
	const signals = editor.signals;
	const strings = editor.strings;
	const sideMainSection = new UIDiv();
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

	//Copy this line and add it to the place where we need to add data-augmented-ui.
	//(nameOfDiv).setAttributeOfElement("data-augmented-ui", "tl-clip br-clip both") which is sideMain for this case.
	//sideMain.setAttributeOfElement("data-augmented-ui", "tl-clip br-clip both");
	//#endregion


	//sideMain.add(toggleSec);
	sideMain.setId("sidebar1");
	sideMain.addClass("sideBarMainShow");
	sideMain.setAttributeOfElement("data-augmented-ui", "tl-clip tr-clip bl-clip  br-clip bl-clip both");
	const sidebarTitle = new UIDiv();
	sidebarTitle.setId("sidebarTitle");

	let title = strings.getKey('sidebar/scene').toUpperCase();
	const titleText = new UIText(title);
	titleText.addClass("sidebarTitleSection");
	titleText.setId("sidebarTitleText");
	sidebarTitle.add(titleText);




	const titleDescription = new UIText("Description");
	titleDescription.addClass("titleDescription")
	sidebarTitle.add(titleDescription);

	const titleDescription1 = new UIText(`Selected Tab is ${title}`);
	titleDescription1.addClass("titleDescription")
	titleDescription1.setId("sidebarTitleDescription")
	sidebarTitle.add(titleDescription1);





	const container = new UITabbedPanel();
	container.setId('sidebarTabMain');
	//container.add(togggleButton);
	const scene = new UISpan().add(
		new SidebarScene(editor),
		new SidebarProperties(editor),
		new SidebarAnimation(editor),
		new SidebarScript(editor)
	);
	const project = new SidebarProject(editor);
	const settings = new SidebarSettings(editor);

	const addShape = new AddModalShape(editor);
	const registryA = new RegistryA(editor);
	const geoData = new GeoData(editor);
	const registryB = new RegistryB(editor);
	container.addTab('registryA', strings.getKey('sidebar/registryA'), registryA, "tabsSetting");
	container.addTab('registryB', strings.getKey('sidebar/registryB'), registryB, "tabsSetting");
	//container.addTab('entity', strings.getKey('sidebar/entity'), settings,"tabsSetting");
	container.addTab('scene', strings.getKey('sidebar/scene'), scene, "tabsSetting");
	container.addTab('geoData', strings.getKey('sidebar/geoData'), geoData, "tabsSetting");
	container.addTab('project', strings.getKey('sidebar/project'), project, "tabsSetting");
	container.addTab('settings', strings.getKey('sidebar/settings'), settings, "tabsSetting");
	// container.addTab('addShape', strings.getKey('sidebar/properties/addShape'), addShape,"tabsSetting");



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



	sideMain.add(sidebarTitle);
	sideMain.add(container);

	let bootstrapConfig = {
		bootstrapModalPopUpId: "submit-popUp",
		modalPopUpClassList: ["submitButtonPopUp"],
		augmentedUiClass: "tl-clip br-clip both",
		modalDailogClassList: [],
		modalContentClassList: ["step1-content", "p-5", "pb-3","my-augborder" ],

		modalBodyClassList: ["display-6" ],
		modalBodyContent: "Data Submitted Successfully",
		modalFooterClassList: ["border-0", "justify-content-center", "p-0"],
		modalFooterButtonClassList: ["step1-startButton"],
		modalFooterButtonId: "submit-popButton",
		//nextPopUpId: "second-PopModal",
		footerButtonText: "Close"
	}

	let bootstrapModal = new BootstrapModal(bootstrapConfig);
	document.body.appendChild(bootstrapModal['dom'].dom);


	let sideBarShow = true;
	toggleButton.onClick(function () {
		if (sideBarShow) {
			sideBarShow = false;
			sideMain.setClass("sideBarMainHide");
			toggleSec.removeClass("toggleButtonMove");
			toggleSec.addClass("toggleButtonMoveBackWard");
		}
		else {
			sideBarShow = true;
			sideMain.setClass("sideBarMainShow");
			toggleSec.addClass("toggleButtonMove");
			toggleSec.removeClass("toggleButtonMoveBackWard");
	
		}
	});


	submitButton.onClick(function () {
		
			
			//#region Showing the First Bootstrap Modal on the Start
			var myModal = new bootstrap.Modal(document.getElementById('submit-popUp'), {
				keyboard: false
			})
			myModal.show();
		
	
	});



	sideBarBottom.add(submitButton);
	sideMain.add(sideBarBottom);
	sideMainSection.add(toggleSec);
	sideMainSection.add(sideMain);

	return sideMainSection;

}

export { Sidebar };
