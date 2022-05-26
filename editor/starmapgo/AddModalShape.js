import * as THREE from 'three';
import { UIDiv, UIPanel, UIRow, UISelect, UISpan, UIText } from '../js/libs/ui.js';

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
    boxImage.src = 'images/addShape/box.png';
    boxImage.style.width = "60px";
    boxImage.style.height = "60px";
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
        capsuleImage.title = "Capsule Shape";
        capsuleImage.src = 'images/addShape/capsule.png';
        capsuleImage.style.width = "60px";
        capsuleImage.style.height = "60px";
        capsuleShape.dom.appendChild(capsuleImage);
        capsuleShape.onClick(function () {
    
            const geometry = new THREE.BoxGeometry(1, 1, 1, 1, 1, 1);
            const mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial());
            mesh.name = 'Box';
    
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
    circleImage.src = 'images/addShape/circle.png';
    circleImage.style.width = "60px";
    circleImage.style.height = "60px";
    circleShape.dom.appendChild(circleImage);
    circleShape.onClick(function () {

        const geometry = new THREE.CircleGeometry( 1, 8, 0, Math.PI * 2 );
		const mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
		mesh.name = 'Circle';

		editor.execute( new AddObjectCommand( editor, mesh ) );

    });
    container.add(circleShape);
    //#endregion
        //#region Region for Box Shape
        const cylinderShape = new UIDiv();
        cylinderShape.addClass("whiteBackground");
        cylinderShape.addClass("p-3");
        const cylinderImage = document.createElement('img');
        cylinderImage.title = "Cylinder Shape";
        cylinderImage.src = 'images/addShape/cylinder.png';
        cylinderImage.style.width = "60px";
        cylinderImage.style.height = "60px";
        cylinderShape.dom.appendChild(cylinderImage);
        cylinderShape.onClick(function () {
    
            const geometry = new THREE.CylinderGeometry( 1, 1, 1, 8, 1, false, 0, Math.PI * 2 );
            const mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
            mesh.name = 'Cylinder';
    
            editor.execute( new AddObjectCommand( editor, mesh ) );
    
        });
        container.add(cylinderShape);
        //#endregion

            //#region Region for Box Shape
    const sphereShape = new UIDiv();
    sphereShape.addClass("whiteBackground");
    sphereShape.addClass("p-3");
    const sphereImage = document.createElement('img');
    sphereImage.title = "Sphere Shape";
    sphereImage.src = 'images/addShape/sphere.png';
    sphereImage.style.width = "60px";
    sphereImage.style.height = "60px";
    sphereShape.dom.appendChild(sphereImage);
    sphereShape.onClick(function () {

   
		const geometry = new THREE.SphereGeometry( 1, 32, 16, 0, Math.PI * 2, 0, Math.PI );
		const mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
		mesh.name = 'Sphere';

		editor.execute( new AddObjectCommand( editor, mesh ) );

    });
    container.add(sphereShape);
    //#endregion

        //#region Region for Box Shape
        const octahedronShape = new UIDiv();
        octahedronShape.addClass("whiteBackground");
        octahedronShape.addClass("p-3");
        const octahedronImage = document.createElement('img');
        octahedronImage.title = "Octahedron Shape";
        octahedronImage.src = 'images/addShape/octahedron.png';
        octahedronImage.style.width = "60px";
        octahedronImage.style.height = "60px";
        octahedronShape.dom.appendChild(octahedronImage);
        octahedronShape.onClick(function () {
    
            const geometry = new THREE.OctahedronGeometry( 1, 0 );
            const mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
            mesh.name = 'Octahedron';
    
            editor.execute( new AddObjectCommand( editor, mesh ) );
    
        });
        container.add(octahedronShape);
        //#endregion



    return container;


}


export { AddModalShape };