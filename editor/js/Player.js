import { UIPanel } from './libs/ui.js';
import { APP } from './libs/app.js';
import * as THREE from 'three';
import { skyBoxImagesList,skyBoxImagesList1,skyBoxImageListOnPlay } from './StarMap-Constant.js';
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
	//	scene.visible =false; // if we want to make the scene hide once the player is clicked than we can do this.
		
		const loader = new THREE.CubeTextureLoader();
		const texture = loader.load(skyBoxImageListOnPlay);
		texture.mapping = THREE.CubeRefractionMapping;
		scene.background = texture;

		setTimeout(()=>{
			signals.sceneGraphChanged.dispatch(false);
		},100);
	} );

	signals.stopPlayer.add( function () {
		let scene = editor.scene;
	//	scene.visible =true; // if we want to be scene visible when the player is stopped make this true.
		const loader = new THREE.CubeTextureLoader();
		const texture = loader.load(skyBoxImagesList);
		texture.mapping = THREE.CubeRefractionMapping;
		scene.background = texture;
	
		setTimeout(()=>{
			signals.sceneGraphChanged.dispatch(true);
		},100)
	} );

	return container;

}

export { Player };
