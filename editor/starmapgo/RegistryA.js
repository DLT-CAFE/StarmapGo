
import * as THREE from 'three';
import { UIDiv, UIPanel, UIRow, UISelect, UISpan, UIText, UIButton, UICheckbox, UIHorizontalRule, UIInput, UILegend, UITextArea, UIFieldSet } from '../js/libs/ui.js';
function RegistryA(editor) {

    let labelSpan = "col-sm-5";
    let controlSpan = "col-sm-7";

    

    let registryMainDiv = new UIDiv();

    registryMainDiv.addClass("row");
    registryMainDiv.addClass("p-3");
    //#region Single Input Field
    //Span element => Label
    let verseNameSpan = new UIDiv();
    verseNameSpan.addClass("control-label");
    verseNameSpan.addClass(labelSpan);
    verseNameSpan.addClass("mb-1");
    verseNameSpan.addClass("white-font");
    verseNameSpan.setTextContent("Versa Name");

    // Input Field
    let inputDiv = new UIDiv();
    inputDiv.addClass(controlSpan);
    inputDiv.addClass("mb-1");
    let verseNameInput = new UIInput(null);
    verseNameInput.addClass("form-control");
    verseNameInput.setId("versaName");
    verseNameInput.setAttributeOfElement("placeholder", "Add Text");
    inputDiv.add(verseNameInput);
    registryMainDiv.add(verseNameSpan);
    registryMainDiv.add(inputDiv);
    //#endregion


    //#region Single Input Field
    //Span element => Label
    let descriptionSpan = new UIDiv();
    descriptionSpan.addClass("control-label");
    descriptionSpan.addClass(labelSpan);
    descriptionSpan.addClass("mb-1");
    descriptionSpan.addClass("white-font");
    descriptionSpan.setTextContent("Description");

    // Input Field
    let descriptionDiv = new UIDiv();
    descriptionDiv.addClass(controlSpan);
    descriptionDiv.addClass("mb-1");
    let descriptionInput = new UITextArea();
    descriptionInput.addClass("form-control");
    descriptionInput.setId("description");
    descriptionInput.setAttributeOfElement("placeholder", "Add Text");
    descriptionDiv.add(descriptionInput);
    registryMainDiv.add(descriptionSpan);
    registryMainDiv.add(descriptionDiv);
    //#endregion


    //#region Single Input Field
    //Span element => Label
    let metaPagesSpan = new UIDiv();
    metaPagesSpan.addClass("control-label");
    metaPagesSpan.addClass(labelSpan);
    metaPagesSpan.addClass("mb-1");
    metaPagesSpan.addClass("white-font");
    metaPagesSpan.setTextContent("MatePages Ref");

    // Input Field
    let metaPagesDiv = new UIDiv();
    metaPagesDiv.addClass(controlSpan);
    metaPagesDiv.addClass("mb-1");
    let metaPagesDivInput = new UIInput(null);
    metaPagesDivInput.addClass("form-control");
    metaPagesDivInput.setId("MatePages");
    metaPagesDivInput.setAttributeOfElement("placeholder", "Add Text");
    metaPagesDiv.add(metaPagesDivInput);


    registryMainDiv.add(metaPagesSpan);
    registryMainDiv.add(metaPagesDiv);
    //#endregion


    //#region Single Input Field
    //Span element => Label
    let domainSpan = new UIDiv();
    domainSpan.addClass("control-label");
    domainSpan.addClass(labelSpan);
    domainSpan.addClass("mb-1");
    domainSpan.addClass("white-font");
    domainSpan.setTextContent("Domain www");

    // Input Field
    let domainDiv = new UIDiv();
    domainDiv.addClass(controlSpan);
    domainDiv.addClass("mb-1");
    let domainInput = new UIInput(null);
    domainInput.addClass("form-control");
    domainInput.setId("domain");
    domainInput.setAttributeOfElement("placeholder", "Add Text");
    domainDiv.add(domainInput);


    registryMainDiv.add(domainSpan);
    registryMainDiv.add(domainDiv);
    //#endregion


    //#region Single Input Field
    //Span element => Label
    let domain1Span = new UIDiv();
    domain1Span.addClass("control-label");
    domain1Span.addClass(labelSpan);
    domain1Span.addClass("mb-1");
    domain1Span.addClass("white-font");
    domain1Span.setTextContent("Domain .ETH");

    // Input Field
    let domainDiv1 = new UIDiv();
    domainDiv1.addClass(controlSpan);
    domainDiv1.addClass("mb-1");
    let domainInput1 = new UIInput(null);
    domainInput1.addClass("form-control");
    domainInput1.setId("domain1");
    domainInput1.setAttributeOfElement("placeholder", "Add Text");
    domainDiv1.add(domainInput1);


    registryMainDiv.add(domain1Span);
    registryMainDiv.add(domainDiv1);
    //#endregion


    //#region Single Input Field
    //Span element => Label
    let sectorSpan = new UIDiv();
    sectorSpan.addClass("control-label");
    sectorSpan.addClass(labelSpan);
    sectorSpan.addClass("mb-1");
    sectorSpan.addClass("white-font");
    sectorSpan.setTextContent("Sector");

    // Input Field
    let sectorDiv = new UIDiv();
    sectorDiv.addClass(controlSpan);
    sectorDiv.addClass("mb-1");
    let sectorSelect = new UISelect();
    let sectorOption = {
        "Finance": "Finance", "Social": "Social", "Game": "Game", "ManuFacturing": "ManuFacturing",
        "Govt": "Govt", "HealthCare": "HealthCare", "Entertainment": "Entertainment", "Media": "Media", "Other": "Other"
    };
    sectorSelect.setOptions(sectorOption);
    sectorSelect.addClass("form-control");
    sectorSelect.setId("sector");
    sectorSelect.setAttributeOfElement("placeholder", "Add Text");
    sectorDiv.add(sectorSelect);


    registryMainDiv.add(sectorSpan);
    registryMainDiv.add(sectorDiv);
    //#endregion


    //#region Region for Verse Type FieldSet
    let verTypeDiv = new UIDiv();
    verTypeDiv.addClass("mb-1");

    let verTypeField = new UIFieldSet();
    verTypeField.addClass("borderno");

    verTypeField.addClass("row");
    let vertypeLegend = new UILegend();
    vertypeLegend.setTextContent("Verse Type");
    vertypeLegend.addClass("mb-0");
    verTypeDiv.addClass("white-font");
    vertypeLegend.addClass("font-size-1rem");
    verTypeField.add(vertypeLegend);

    //verTypeField.add(new UIHorizontalRule());

    let verseTypeCheckName = ["Galaxy", "Land", "Digital Twins", "Star", "Venue", "Game", "World", "Luminal Space", "Other"];
    for (let i = 0; i < verseTypeCheckName.length; i++) {
        let checkboxDiv = new UIDiv();
        checkboxDiv.addClass("col-sm-6");
        checkboxDiv.add(new UICheckbox(false).setMarginRight('2px'));
        checkboxDiv.add(new UIText(verseTypeCheckName[i]).addClass("white-font"));
        verTypeField.add(checkboxDiv);
    }
    verTypeDiv.add(verTypeField);
    registryMainDiv.add(verTypeDiv);

    //#endregion



    //#region Region for Reality FieldSet
    let realityDiv = new UIDiv();
     realityDiv.addClass("mb-1");
    let realityField = new UIFieldSet();
    realityField.addClass("borderno");

    realityField.addClass("row");
    let realityLegend = new UILegend();
    realityLegend.setTextContent("Reality");
    realityLegend.addClass("mb-0");
    realityLegend.addClass("white-font");
    realityLegend.addClass("font-size-1rem");
    realityField.add(realityLegend);

  //  realityField.add(new UIHorizontalRule());

    let verseTypeCheckName1 = ["2D", "3D", "AR", "VR", "XR"];
    for (let i = 0; i < verseTypeCheckName1.length; i++) {
        let checkboxDiv = new UIDiv();
        checkboxDiv.addClass("col-sm-4");
        checkboxDiv.add(new UICheckbox(false).setMarginRight('2px'));
        checkboxDiv.add(new UIText(verseTypeCheckName1[i]).addClass("white-font"));
        realityField.add(checkboxDiv);
    }
    realityDiv.add(realityField);
    registryMainDiv.add(realityDiv);

    //#endregion


    //#region Region for Fidelity FieldSet
    let fidelityDiv = new UIDiv();
  fidelityDiv.addClass("mb-1");
    let fidelityField = new UIFieldSet();
    fidelityField.addClass("borderno");

    fidelityField.addClass("row");
    let fidelityLegend = new UILegend();
    fidelityLegend.setTextContent("Fidelity");
    fidelityLegend.addClass("mb-0");
    fidelityLegend.addClass("white-font");
    fidelityLegend.addClass("font-size-1rem");
    fidelityField.add(fidelityLegend);

   // fidelityField.add(new UIHorizontalRule());

    let verseTypeCheckName2 = ["Voxel", "Low-Fi", "Hi-Fi"];
    for (let i = 0; i < verseTypeCheckName2.length; i++) {
        let checkboxDiv = new UIDiv();
        checkboxDiv.addClass("col-sm-4");
        checkboxDiv.add(new UICheckbox(false).setMarginRight('2px'));
        checkboxDiv.add(new UIText(verseTypeCheckName2[i]).addClass("white-font"));
        fidelityField.add(checkboxDiv);
    }
    fidelityDiv.add(fidelityField);
    registryMainDiv.add(fidelityDiv);

    //#endregion



    //#region Region for Fidelity FieldSet
    let fidelityDiv1 = new UIDiv();
    fidelityDiv1.addClass("mb-1"); 
    let fidelityField1 = new UIFieldSet();
    fidelityField1.addClass("borderno");

    fidelityField1.addClass("row");
    let fidelityLegend1 = new UILegend();
    fidelityLegend1.setTextContent("Fidelity");
    fidelityLegend1.addClass("mb-0");
    fidelityLegend1.addClass("white-font");
    fidelityLegend1.addClass("font-size-1rem");
    fidelityField1.add(fidelityLegend1);

   // fidelityField1.add(new UIHorizontalRule());

    let verseTypeCheckName3 = ["Mobile", "Deskstop", "Console"];
    for (let i = 0; i < verseTypeCheckName2.length; i++) {
        let checkboxDiv = new UIDiv();
        checkboxDiv.addClass("col-sm-4");
        checkboxDiv.add(new UICheckbox(false).setMarginRight('2px'));
        checkboxDiv.add(new UIText(verseTypeCheckName3[i]).addClass("white-font"));
        fidelityField1.add(checkboxDiv);
    }
    fidelityDiv1.add(fidelityField1);
    registryMainDiv.add(fidelityDiv1);

    //#endregion


    //Span element => Label
    let dateSpan = new UIDiv();
    dateSpan.addClass("control-label");
    dateSpan.addClass(labelSpan);
    dateSpan.addClass("mb-1");
    dateSpan.addClass("white-font");
    dateSpan.setTextContent("Genesis Date");

    // Input Field
    let dateDiv = new UIDiv();
    dateDiv.addClass(controlSpan);
    dateDiv.addClass("mb-1");
    let dateInput = new UIInput(null);
    dateInput.addClass("form-control");
    dateInput.setId("versaName");
    dateInput.setAttributeOfElement("placeholder", "Add Text");
    dateDiv.add(dateInput);
    registryMainDiv.add(dateSpan);
    registryMainDiv.add(dateDiv);
    //#endregion


      //Span element => Label
      let createSpan = new UIDiv();
      createSpan.addClass("control-label");
      createSpan.addClass(labelSpan);
      createSpan.addClass("mb-1");
      createSpan.addClass("white-font");
      createSpan.setTextContent("Creator");
  
      // Input Field
      let createDiv = new UIDiv();
      createDiv.addClass(controlSpan);
      createDiv.addClass("mb-1");
      let createInput = new UIInput(null);
      createInput.addClass("form-control");
      createInput.setId("versaName");
      createInput.setAttributeOfElement("placeholder", "Add Text");
      createDiv.add(createInput);
      registryMainDiv.add(createSpan);
      registryMainDiv.add(createDiv);
      //#endregion









    return registryMainDiv;

}

export { RegistryA };

{/* <div class="form-group">
    <label class="control-label col-sm-2" for="email">Email:</label>

    VerName
    Description
    <div class="col-sm-10">
        <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
    </div>
</div> */}