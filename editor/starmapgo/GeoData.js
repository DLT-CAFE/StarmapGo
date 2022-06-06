
import * as THREE from 'three';
import { UIDiv, UIPanel, UIRow, UISelect, UISpan, UIText, UIButton, UICheckbox, UIHorizontalRule, UIInput, UILegend, UITextArea, UIFieldSet } from '../js/libs/ui.js';
function GeoData(editor) {

    let labelSpan = "col-sm-5";
    let controlSpan = "col-sm-7";



    let registryMainDiv = new UIDiv();

    registryMainDiv.addClass("row");
    registryMainDiv.addClass("p-3");

    //#region Single Input Field
    //Span element => Label
    let regionDiv = new UIDiv();
    regionDiv.addClass("control-label");
    regionDiv.addClass(labelSpan);
    regionDiv.addClass("mb-1");
    regionDiv.addClass("white-font");
    regionDiv.setTextContent("Choose Region");

    // Input Field
    let regionFieldDiv = new UIDiv();
    regionFieldDiv.addClass(controlSpan);
    regionFieldDiv.addClass("mb-1");
    let regionSelect = new UISelect();
    let regionOption = {
        "Wallet": "Wallet",
    };
    regionSelect.setOptions(regionOption);
    regionSelect.addClass("form-control");
    regionSelect.setId("sector");
    regionSelect.setAttributeOfElement("placeholder", "Add Text");
    regionFieldDiv.add(regionSelect);


    registryMainDiv.add(regionDiv);
    registryMainDiv.add(regionFieldDiv);
    //#endregion



    //#region Single Input Field
    //Span element => Label
    let sectorDiv = new UIDiv();
    sectorDiv.addClass("control-label");
    sectorDiv.addClass(labelSpan);
    sectorDiv.addClass("mb-1");
    sectorDiv.addClass("white-font");
    sectorDiv.setTextContent("Choose Sector");

    // Input Field
    let sectorFieldDiv = new UIDiv();
    sectorFieldDiv.addClass(controlSpan);
    sectorFieldDiv.addClass("mb-1");
    let sectorSelect = new UISelect();
    let sectorOption = {
        "Wallet": "Wallet",
    };
    sectorSelect.setOptions(sectorOption);
    sectorSelect.addClass("form-control");
    sectorSelect.setId("sector");
    sectorSelect.setAttributeOfElement("placeholder", "Add Text");
    sectorFieldDiv.add(sectorSelect);


    registryMainDiv.add(sectorDiv);
    registryMainDiv.add(sectorFieldDiv);
    //#endregion


    //#region Single Input Field
    //Span element => Label
    let corSpan = new UIDiv();
    corSpan.addClass("control-label");
    corSpan.addClass(labelSpan);
    corSpan.addClass("mb-1");
    corSpan.addClass("white-font");
    corSpan.setTextContent("Choose Coordinates");

    // Input Field
    let corDiv = new UIDiv();
    corDiv.addClass(controlSpan);
    corDiv.addClass("mb-1");
    const button = new UIButton( 'GO' );
    button.addClass("btn");
    button.addClass("btn-primary");
    corDiv.add(button);

    registryMainDiv.add(corSpan);
    registryMainDiv.add(corDiv);
    //#endregion


    //#region Single Input Field
    //Span element => Label
    let mgeoSpan = new UIDiv();
    mgeoSpan.addClass("control-label");
    mgeoSpan.addClass(labelSpan);
    mgeoSpan.addClass("mb-1");
    mgeoSpan.addClass("white-font");
    mgeoSpan.setTextContent("MGeo Coordinates");

    // Input Field
    let mgeoDiv = new UIDiv();
    mgeoDiv.addClass(controlSpan);
    mgeoDiv.addClass("mb-1");
    let mgeoInput = new UIInput(null);
    mgeoInput.addClass("form-control");
    mgeoInput.setId("versaName");
    mgeoInput.setAttributeOfElement("placeholder", "Add Text");
    mgeoDiv.add(mgeoInput);
    registryMainDiv.add(mgeoSpan);
    registryMainDiv.add(mgeoDiv);
    //#endregion


    //#region Single Input Field
    //Span element => Label
    let noOfCtSpan = new UIDiv();
    noOfCtSpan.addClass("control-label");
    noOfCtSpan.addClass(labelSpan);
    noOfCtSpan.addClass("mb-1");
    noOfCtSpan.addClass("white-font");
    noOfCtSpan.setTextContent("Number Of Citizen");

    // Input Field
    let noOfCtDiv = new UIDiv();
    noOfCtDiv.addClass(controlSpan);
    noOfCtDiv.addClass("mb-1");
    let noOfCtInput = new UIInput(null);
    noOfCtInput.addClass("form-control");
    noOfCtInput.setId("versaName");
    noOfCtInput.setAttributeOfElement("placeholder", "Add Text");
    noOfCtDiv.add(noOfCtInput);
    registryMainDiv.add(noOfCtSpan);
    registryMainDiv.add(noOfCtDiv);
    //#endregion


    //#region Single Input Field
    //Span element => Label
    let tLDSpan = new UIDiv();
    tLDSpan.addClass("control-label");
    tLDSpan.addClass(labelSpan);
    tLDSpan.addClass("mb-1");
    tLDSpan.addClass("white-font");
    tLDSpan.setTextContent("Total Land Area");

    // Input Field
    let tLDDiv = new UIDiv();
    tLDDiv.addClass(controlSpan);
    tLDDiv.addClass("mb-1");
    let tLDInput = new UIInput(null);
    tLDInput.addClass("form-control");
    tLDInput.setId("versaName");
    tLDInput.setAttributeOfElement("placeholder", "Add Text");
    tLDDiv.add(tLDInput);
    registryMainDiv.add(tLDSpan);
    registryMainDiv.add(tLDDiv);
    //#endregion


        //#region Single Input Field
    //Span element => Label
    let noOfLPSpan = new UIDiv();
    noOfLPSpan.addClass("control-label");
    noOfLPSpan.addClass(labelSpan);
    noOfLPSpan.addClass("mb-1");
    noOfLPSpan.addClass("white-font");
    noOfLPSpan.setTextContent("No Of Land Parcel");

    // Input Field
    let noOfLPDiv = new UIDiv();
    noOfLPDiv.addClass(controlSpan);
    noOfLPDiv.addClass("mb-1");
    let noOfLPInput = new UIInput(null);
    noOfLPInput.addClass("form-control");
    noOfLPInput.setId("versaName");
    noOfLPInput.setAttributeOfElement("placeholder", "Add Text");
    noOfLPDiv.add(noOfLPInput);
    registryMainDiv.add(noOfLPSpan);
    registryMainDiv.add(noOfLPDiv);
    //#endregion


     //#region Single Input Field
    //Span element => Label
    let mapCorDiv = new UIDiv();
    mapCorDiv.addClass("control-label");
    mapCorDiv.addClass(labelSpan);
    mapCorDiv.addClass("mb-1");
    mapCorDiv.addClass("white-font");
    mapCorDiv.setTextContent("Transport System");

    // Input Field
    let mapCorFieldDiv = new UIDiv();
    mapCorFieldDiv.addClass(controlSpan);
    mapCorFieldDiv.addClass("mb-1");
    let mapCorSelect = new UISelect();
    let mapCorOption = {
        "Wallet": "Wallet",
    };
    mapCorSelect.setOptions(mapCorOption);
    mapCorSelect.addClass("form-control");
    mapCorSelect.setId("sector");
    mapCorSelect.setAttributeOfElement("placeholder", "Add Text");
    mapCorFieldDiv.add(mapCorSelect);


    registryMainDiv.add(mapCorDiv);
    registryMainDiv.add(mapCorFieldDiv);
    //#endregion

















    return registryMainDiv;

}

export { GeoData };