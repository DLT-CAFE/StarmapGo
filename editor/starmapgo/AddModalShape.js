import * as THREE from 'three';
import { UIDiv, UIPanel, UIRow, UISelect, UISpan, UIText, UIButton, UIHorizontalRule } from '../js/libs/ui.js';

import { AddObjectCommand } from '../js/commands/AddObjectCommand.js';


function AddModalShape(editor) {

    const config = editor.config;
    const strings = editor.strings;

    const container = new UIRow();

    //#region Region for Box Shape
    const boxShape = new UIDiv();
    boxShape.addClass("whiteBackground");
    boxShape.addClass("p-3");
    const boxImage = document.createElement('img');
    boxImage.title = "Box Shape";
    boxImage.src = 'images/addShape/planet2.png';
    boxImage.style.width = "60px";
    boxImage.style.height = "60px";
    boxImage.style.marginBottom = "10px";
    boxShape.dom.appendChild(boxImage);
    boxShape.onClick(function () {

        const geometry = new THREE.BoxGeometry(1, 1, 1, 1, 1, 1);
        const mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial());
        mesh.name = 'Box';

        editor.execute(new AddObjectCommand(editor, mesh));

    });
    container.add(boxShape);
    //#endregion

    //#region Region for Capsule Shape
    const capsuleShape = new UIDiv();
    capsuleShape.addClass("whiteBackground");
    capsuleShape.addClass("p-3");
    const capsuleImage = document.createElement('img');
    capsuleImage.title = "Tube Shape";
    capsuleImage.src = 'images/addShape/planets5.png';
    capsuleImage.style.width = "60px";
    capsuleImage.style.height = "60px";
    boxImage.style.marginBottom = "10px";
    capsuleShape.dom.appendChild(capsuleImage);
    capsuleShape.onClick(function () {
        const path = new THREE.CatmullRomCurve3([
            new THREE.Vector3(2, 2, - 2),
            new THREE.Vector3(2, - 2, - 0.6666666666666667),
            new THREE.Vector3(- 2, - 2, 0.6666666666666667),
            new THREE.Vector3(- 2, 2, 2)
        ]);

        const geometry = new THREE.TubeGeometry(path, 64, 1, 8, false);
        const mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial());
        mesh.name = 'Tube';

        editor.execute(new AddObjectCommand(editor, mesh));

    });
    container.add(capsuleShape);
    //#endregion

    //#region Region for Box Shape
    const circleShape = new UIDiv();
    circleShape.addClass("whiteBackground");
    circleShape.addClass("p-3");
    const circleImage = document.createElement('img');
    circleImage.title = "Circle";
    circleImage.src = 'images/addShape/planets6.png';
    circleImage.style.width = "60px";
    circleImage.style.height = "60px";
    boxImage.style.marginBottom = "10px";
    circleShape.dom.appendChild(circleImage);
    circleShape.onClick(function () {

        const geometry = new THREE.CircleGeometry(1, 8, 0, Math.PI * 2);
        const mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial());
        mesh.name = 'Circle';

        editor.execute(new AddObjectCommand(editor, mesh));

    });
    container.add(circleShape);
    //#endregion
    //#region Region for Box Shape
    const cylinderShape = new UIDiv();
    cylinderShape.addClass("whiteBackground");
    cylinderShape.addClass("p-3");
    const cylinderImage = document.createElement('img');
    cylinderImage.title = "Cylinder Shape";
    cylinderImage.src = 'images/addShape/planets4.png';
    cylinderImage.style.width = "60px";
    cylinderImage.style.height = "60px";
    boxImage.style.marginBottom = "10px";
    cylinderShape.dom.appendChild(cylinderImage);
    cylinderShape.onClick(function () {

        const geometry = new THREE.CylinderGeometry(1, 1, 1, 8, 1, false, 0, Math.PI * 2);
        const mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial());
        mesh.name = 'Cylinder';

        editor.execute(new AddObjectCommand(editor, mesh));

    });
    container.add(cylinderShape);
    //#endregion

    //#region Region for Box Shape
    const sphereShape = new UIDiv();
    sphereShape.addClass("whiteBackground");
    sphereShape.addClass("p-3");
    const sphereImage = document.createElement('img');
    sphereImage.title = "Sphere Shape";
    sphereImage.src = 'images/addShape/planets3.png';
    sphereImage.style.width = "60px";
    sphereImage.style.height = "60px";
    boxImage.style.marginBottom = "10px";
    sphereShape.dom.appendChild(sphereImage);
    sphereShape.onClick(function () {


        const geometry = new THREE.SphereGeometry(1, 32, 16, 0, Math.PI * 2, 0, Math.PI);
        const mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial());
        mesh.name = 'Sphere';

        editor.execute(new AddObjectCommand(editor, mesh));

    });
    container.add(sphereShape);
    //#endregion

    //#region Region for Box Shape
    const octahedronShape = new UIDiv();
    octahedronShape.addClass("whiteBackground");
    octahedronShape.addClass("p-3");
    const octahedronImage = document.createElement('img');
    octahedronImage.title = "Octahedron Shape";
    octahedronImage.src = 'images/addShape/planets1.png';
    octahedronImage.style.width = "60px";
    octahedronImage.style.height = "60px";
    boxImage.style.marginBottom = "10px"; 
    octahedronShape.dom.appendChild(octahedronImage);
    octahedronShape.onClick(function () {

        const geometry = new THREE.OctahedronGeometry(1, 0);
        const mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial());
        mesh.name = 'Octahedron';

        editor.execute(new AddObjectCommand(editor, mesh));

    });
    container.add(octahedronShape);
    //#endregion



    container.add(new UIHorizontalRule());

    //#region Region for Box Shape
    const ambientLight = new UIDiv();
    ambientLight.addClass("whiteBackground");
    const ambientLightButton = new UIButton(strings.getKey('menubar/add/ambientlight'));
    ambientLightButton.setAttributeOfElement("data-augmented-ui", "tl-clip tr-clip bl-clip br-clip both");
    ambientLightButton.addClass("btn-design-a");
    ambientLightButton.onClick(function () {
        const color = 0x222222;
        const light = new THREE.AmbientLight(color);
        light.name = 'AmbientLight';
        editor.execute(new AddObjectCommand(editor, light));

    });
    ambientLight.add(ambientLightButton);
    container.add(ambientLight);
    //#endregion


    //#region Region for Box Shape
    const directionalLight = new UIDiv();
    directionalLight.addClass("whiteBackground");
    const directionalLightButton = new UIButton(strings.getKey('menubar/add/directionallight'));
    directionalLightButton.setAttributeOfElement("data-augmented-ui", "tl-clip tr-clip bl-clip br-clip both");
    directionalLightButton.addClass("btn-design-a");
    directionalLightButton.onClick(function () {
        const color = 0xffffff;
        const intensity = 1;

        const light = new THREE.DirectionalLight(color, intensity);
        light.name = 'DirectionalLight';
        light.target.name = 'DirectionalLight Target';

        light.position.set(5, 10, 7.5);

        editor.execute(new AddObjectCommand(editor, light));

    });
    directionalLight.add(directionalLightButton);
    container.add(directionalLight);
    //#endregion


    //#region Region for Box Shape
    const hemispherelight = new UIDiv();
    hemispherelight.addClass("whiteBackground");
    const hemispherelightButton = new UIButton(strings.getKey('menubar/add/hemispherelight'));
    hemispherelightButton.setAttributeOfElement("data-augmented-ui", "tl-clip tr-clip bl-clip br-clip both");
    hemispherelightButton.addClass("btn-design-a");
    hemispherelightButton.onClick(function () {
        const skyColor = 0x00aaff;
        const groundColor = 0xffaa00;
        const intensity = 1;

        const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
        light.name = 'Hemisphere';
 
        light.position.set(0, 10, 0);

        editor.execute(new AddObjectCommand(editor, light));

    });
    hemispherelight.add(hemispherelightButton);
    container.add(hemispherelight);
    //#endregion


        //#region Region for Box Shape
        const spotlight = new UIDiv();
        spotlight.addClass("whiteBackground");
        const spotlightButton = new UIButton(strings.getKey( 'menubar/add/spotlight' ));
        spotlightButton.setAttributeOfElement("data-augmented-ui", "tl-clip tr-clip bl-clip br-clip both");
        spotlightButton.addClass("btn-design-a");
        spotlightButton.onClick(function () {
            const color = 0xffffff;
            const intensity = 1;
            const distance = 0;
            const angle = Math.PI * 0.1;
            const penumbra = 0;
    
            const light = new THREE.SpotLight( color, intensity, distance, angle, penumbra );
            light.name = 'SpotLight';
            light.target.name = 'SpotLight Target';
    
            light.position.set( 5, 10, 7.5 );
    
            editor.execute( new AddObjectCommand( editor, light ) );
    
        });
        spotlight.add(spotlightButton);
        container.add(spotlight);
        //#endregion


        container.add(new UIHorizontalRule());
       

        const form = document.createElement( 'form' );
        form.style.display = 'none';
        document.body.appendChild( form );
    
        const fileInput = document.createElement( 'input' );
        fileInput.multiple = true;
        fileInput.type = 'file';
        fileInput.addEventListener( 'change', function () {
    
            editor.loader.loadFiles( fileInput.files );
            form.reset();
    
        } );
        form.appendChild( fileInput );
    
        const importModal = new UIDiv();
        spotlight.addClass("whiteBackground");
        const importModalButton = new UIButton(strings.getKey( 'menubar/file/import' ));
        importModalButton.addClass("btn");
        importModalButton.addClass("btn-danger");
   
        importModalButton.onClick( function () {
    
            fileInput.click();
     
        } );
        importModal.add(importModalButton);
        container.add(importModal);

        container.add(new UIHorizontalRule());
    return container;


}


export { AddModalShape };