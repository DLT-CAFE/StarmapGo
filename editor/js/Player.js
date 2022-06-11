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
		const loader = new THREE.CubeTextureLoader();
		const texture = loader.load(skyBoxImageListOnPlay);
		scene.background = texture;

		setTimeout(()=>{
			signals.sceneGraphChanged.dispatch(false);
		},100);
	} );

	signals.stopPlayer.add( function () {
		let scene = editor.scene;
		const loader = new THREE.CubeTextureLoader();
		const texture = loader.load(skyBoxImagesList1);

		scene.background = texture;
	
		setTimeout(()=>{
			signals.sceneGraphChanged.dispatch(true);
		},100)
	} );

	return container;

}

export { Player };
