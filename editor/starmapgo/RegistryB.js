
import * as THREE from 'three';
import { UIDiv, UIPanel, UIRow, UISelect, UISpan, UIText, UIButton, UICheckbox, UIHorizontalRule, UIInput, UILegend, UITextArea, UIFieldSet } from '../js/libs/ui.js';
function RegistryB(editor) {

    let labelSpan = "col-sm-5";
    let controlSpan = "col-sm-7";



    let registryMainDiv = new UIDiv();

    registryMainDiv.addClass("row");
    registryMainDiv.addClass("p-3");


    //#region Region for Organization Type FieldSet
    let orgType = new UIDiv();
    orgType.addClass("mb-1");
    orgType.addClass("white-font");

    let orgField = new UIFieldSet();
    orgField.addClass("border");

    orgField.addClass("row");
    let orgLegend = new UILegend();
    orgLegend.setTextContent("Organization Type");
    orgLegend.addClass("mb-0");

    orgLegend.addClass("font-size-1rem");
    orgField.add(orgLegend);

    //verTypeField.add(new UIHorizontalRule());

    let organizationTypes = ["DOA",  "Private", "Decentralized", "Hybrid","Centralized Public"];
    for (let i = 0; i < organizationTypes.length; i++) {
        let checkboxDiv = new UIDiv();
        checkboxDiv.addClass("col-sm-6");
        checkboxDiv.add(new UICheckbox(false).setMarginRight('2px'));
        checkboxDiv.add(new UIText(organizationTypes[i]).addClass("white-font"));
        orgField.add(checkboxDiv);
    }
    orgType.add(orgField);
    registryMainDiv.add(orgType);

    //#endregion


    //#region Region for Organization Type FieldSet
    let consensesDiv = new UIDiv();
    consensesDiv.addClass("mb-1");
    consensesDiv.addClass("white-font");

    let consensesField = new UIFieldSet();
    consensesField.addClass("border");

    consensesField.addClass("row");
    let consensesLegend = new UILegend();
    consensesLegend.setTextContent("Consenses");
    consensesLegend.addClass("mb-0");

    consensesLegend.addClass("font-size-1rem");
    consensesField.add(consensesLegend);

    //verTypeField.add(new UIHorizontalRule());

    let consensesList = ["POS", "POW", "BFT", "POA", "DPOS", "DAG", "POB"];
    for (let i = 0; i < consensesList.length; i++) {
        let checkboxDiv = new UIDiv();
        checkboxDiv.addClass("col-sm-6");
        checkboxDiv.add(new UICheckbox(false).setMarginRight('2px'));
        checkboxDiv.add(new UIText(consensesList[i]).addClass("white-font"));
        consensesField.add(checkboxDiv);
    }
    consensesDiv.add(consensesField);
    registryMainDiv.add(consensesDiv);

    //#endregion

    //#region Single Input Field
    //Span element => Label
    let votingDiv = new UIDiv();
    votingDiv.addClass("control-label");
    votingDiv.addClass(labelSpan);
    votingDiv.addClass("mb-1");
    votingDiv.addClass("white-font");
    votingDiv.setTextContent("Voting");

    // Input Field
    let votingFieldDiv = new UIDiv();
    votingFieldDiv.addClass(controlSpan);
    votingFieldDiv.addClass("mb-1");
    let voteSelect = new UISelect();
    let sectorOption = {
        "Wallet": "Wallet",
        "SSI": "SSI",
        "HYBRID": "HYBRID",
        "Open ID": "Open Id",
        "Social Platfrom": "Social Platfrom",
        "SAML": "SAML"
    };
    voteSelect.setOptions(sectorOption);
    voteSelect.addClass("form-control");
    voteSelect.setId("sector");
    voteSelect.setAttributeOfElement("placeholder", "Add Text");
    votingFieldDiv.add(voteSelect);


    registryMainDiv.add(votingDiv);
    registryMainDiv.add(votingFieldDiv);
    //#endregion


    //#region Region for Organization Type FieldSet
    let accessDiv = new UIDiv();
    accessDiv.addClass("mb-1");
    accessDiv.addClass("white-font");

    let accessField = new UIFieldSet();
    accessField.addClass("border");

    accessField.addClass("row");
    let accessLegend = new UILegend();
    accessLegend.setTextContent("Access");
    accessLegend.addClass("mb-0");

    accessLegend.addClass("font-size-1rem");
    accessField.add(accessLegend);

    //verTypeField.add(new UIHorizontalRule());

    let accessList = ["Open", "Permissioned"];
    for (let i = 0; i < accessList.length; i++) {
        let checkboxDiv = new UIDiv();
        checkboxDiv.addClass("col-sm-6");
        checkboxDiv.add(new UICheckbox(false).setMarginRight('2px'));
        checkboxDiv.add(new UIText(accessList[i]).addClass("white-font"));
        accessField.add(checkboxDiv);
    }
    accessDiv.add(accessField);
    registryMainDiv.add(accessDiv);

    //#endregion


    //#region Region for Organization Type FieldSet
    let walletDiv = new UIDiv();
    walletDiv.addClass("mb-1");
    walletDiv.addClass("white-font");

    let walletField = new UIFieldSet();
    walletField.addClass("border");

    walletField.addClass("row");
    let walletLegend = new UILegend();
    walletLegend.setTextContent("Wallet");
    walletLegend.addClass("mb-0");

    walletLegend.addClass("font-size-1rem");
    walletField.add(walletLegend);

    //verTypeField.add(new UIHorizontalRule());

    let walletList = ["Open", "Permissioned"];
    for (let i = 0; i < walletList.length; i++) {
        let checkboxDiv = new UIDiv();
        checkboxDiv.addClass("col-sm-6");
        checkboxDiv.add(new UICheckbox(false).setMarginRight('2px'));
        checkboxDiv.add(new UIText(walletList[i]).addClass("white-font"));
        walletField.add(checkboxDiv);
    }
    walletDiv.add(walletField);
    registryMainDiv.add(walletDiv);

    //#endregion



    //#region Single Input Field
    //Span element => Label
    let avatarDiv = new UIDiv();
    avatarDiv.addClass("control-label");
    avatarDiv.addClass(labelSpan);
    avatarDiv.addClass("mb-1");
    avatarDiv.addClass("white-font");
    avatarDiv.setTextContent("avatar");

    // Input Field
    let avatarFieldDiv = new UIDiv();
    avatarFieldDiv.addClass(controlSpan);
    avatarFieldDiv.addClass("mb-1");
    let avatorSelect = new UISelect();
    let avatorOption = {
        "Wallet": "Wallet",
        "SSI": "SSI",
        "HYBRID": "HYBRID",
        "Open ID": "Open Id",
        "Social Platfrom": "Social Platfrom",
        "SAML": "SAML"
    };
    avatorSelect.setOptions(avatorOption);
    avatorSelect.addClass("form-control");
    avatorSelect.setId("sector");
    avatorSelect.setAttributeOfElement("placeholder", "Add Text");
    avatarFieldDiv.add(avatorSelect);


    registryMainDiv.add(avatarDiv);
    registryMainDiv.add(avatarFieldDiv);
    //#endregion



    //#region Region for Organization Type FieldSet
    let commerceDiv = new UIDiv();
    commerceDiv.addClass("mb-1");
    commerceDiv.addClass("white-font");

    let commerceField = new UIFieldSet();
    commerceField.addClass("border");

    commerceField.addClass("row");
    let commerceLegend = new UILegend();
    commerceLegend.setTextContent("Commerce");
    commerceLegend.addClass("mb-0");

    commerceLegend.addClass("font-size-1rem");
    commerceField.add(commerceLegend);

    //verTypeField.add(new UIHorizontalRule());

    let commerceList = [ "Crypto Token","Fiat","NA","Crypto Currency",];
    for (let i = 0; i < commerceList.length; i++) {
        let checkboxDiv = new UIDiv();
        checkboxDiv.addClass("col-sm-6");
        checkboxDiv.add(new UICheckbox(false).setMarginRight('2px'));
        checkboxDiv.add(new UIText(commerceList[i]).addClass("white-font"));
        commerceField.add(checkboxDiv);
    }
    commerceDiv.add(commerceField);
    registryMainDiv.add(commerceDiv);

    //#endregion


        //#region Single Input Field
    //Span element => Label
    let tokenSpan = new UIDiv();
    tokenSpan.addClass("control-label");
    tokenSpan.addClass(labelSpan);
    tokenSpan.addClass("mb-1");
    tokenSpan.addClass("white-font");
    tokenSpan.setTextContent("Token Supply");

    // Input Field
    let inputDiv = new UIDiv();
    inputDiv.addClass(controlSpan);
    inputDiv.addClass("mb-1");
    let tokenInput = new UIInput(null);
    tokenInput.addClass("form-control");
    tokenInput.setId("versaName");
    tokenInput.setAttributeOfElement("placeholder", "Add Text");
    inputDiv.add(tokenInput);
    registryMainDiv.add(tokenSpan);
    registryMainDiv.add(inputDiv);
    //#endregion


           //#region Single Input Field
    //Span element => Label
    let ticketSpan = new UIDiv();
    ticketSpan.addClass("control-label");
    ticketSpan.addClass(labelSpan);
    ticketSpan.addClass("mb-1");
    ticketSpan.addClass("white-font");
    ticketSpan.setTextContent("Ticket Supply");

    // Input Field
    let ticketDiv = new UIDiv();
    ticketDiv.addClass(controlSpan);
    ticketDiv.addClass("mb-1");
    let ticketInput = new UIInput(null);
    ticketInput.addClass("form-control");
    ticketInput.setId("versaName");
    ticketInput.setAttributeOfElement("placeholder", "Add Text");
    ticketDiv.add(ticketInput);
    registryMainDiv.add(ticketSpan);
    registryMainDiv.add(ticketDiv);
    //#endregion

        //Span element => Label
        let tokenUiSpan = new UIDiv();
        tokenUiSpan.addClass("control-label");
        tokenUiSpan.addClass(labelSpan);
        tokenUiSpan.addClass("mb-1");
        tokenUiSpan.addClass("white-font");
        tokenUiSpan.setTextContent("Token Utility");
    
        // Input Field
        let tokenUiDiv = new UIDiv();
        tokenUiDiv.addClass(controlSpan);
        tokenUiDiv.addClass("mb-1");
        let tokenUiInput = new UIInput(null);
        tokenUiInput.addClass("form-control");
        tokenUiInput.setId("versaName");
        tokenUiInput.setAttributeOfElement("placeholder", "Add Text");
        tokenUiDiv.add(tokenUiInput);
        registryMainDiv.add(tokenUiSpan);
        registryMainDiv.add(tokenUiDiv);
        //#endregion


            //#region Region for Organization Type FieldSet
    let stakingDiv = new UIDiv();
    stakingDiv.addClass("mb-1");
    stakingDiv.addClass("white-font");

    let stakingField = new UIFieldSet();
    stakingField.addClass("border");

    stakingField.addClass("row");
    let stakingLegend = new UILegend();
    stakingLegend.setTextContent("Staking");
    stakingLegend.addClass("mb-0");

    stakingLegend.addClass("font-size-1rem");
    stakingField.add(stakingLegend);

    //verTypeField.add(new UIHorizontalRule());

    let stakingList = ["YeS","No"];
    for (let i = 0; i < stakingList.length; i++) {
        let checkboxDiv = new UIDiv();
        checkboxDiv.addClass("col-sm-6");
        checkboxDiv.add(new UICheckbox(false).setMarginRight('2px'));
        checkboxDiv.add(new UIText(stakingList[i]).addClass("white-font"));
        stakingField.add(checkboxDiv);
    }
    stakingDiv.add(stakingField);
    registryMainDiv.add(stakingDiv);

    //#endregion











    return registryMainDiv;

}

export { RegistryB };

{/* <div class="form-group">
    <label class="control-label col-sm-2" for="email">Email:</label>

    VerName
    Description
    <div class="col-sm-10">
        <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
    </div>
</div> */}