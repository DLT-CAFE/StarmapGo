import { UIPanel } from './libs/ui.js';
import { APP } from './libs/app.js';
import * as THREE from 'three';
function Player( editor ) {

	const signals = editor.signals;

	const container = new UIPanel();
	container.setId( 'player' );
	container.setPosition( 'absolute' );
	container.setDisplay( 'none' );

	//

	const player = new APP.Player();
	container.dom.appendChild( player.dom );

	window.addEventListener( 'resize', function () {

		player.setSize( container.dom.clientWidth, container.dom.clientHeight );

	} );

	signals.windowResize.add( function () {

		player.setSize( container.dom.clientWidth, container.dom.clientHeight );

	} );

	signals.startPlayer.add( function () {



		let scene = editor.scene;
		const loader = new THREE.CubeTextureLoader();
		const texture = loader.load([
		  './images/viewport/image1.jpg',
		  './images/viewport/image2.jpg',
		  './images/viewport/image3.jpg',
		  './images/viewport/image4.jpg',
		  './images/viewport/image5.jpg',
		  './images/viewport/image6.jpg',
		]);
		scene.background = texture;
		
	//	player.setScene(scene);
	//	player.setSize( container.dom.clientWidth, container.dom.clientHeight );
	
	//	player.play();

	} );

	signals.stopPlayer.add( function () {

		container.setDisplay( 'none' );

	//	player.stop();
		player.dispose();


	} );

	return container;

}

export { Player };
