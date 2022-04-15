//this module will function as editor/starmapgo.html preloader. Consisting of 2-3 step modal, animated logo
//sequence, page will have audio. buttons onhover state will trigger audio,  all transitions animations 
//(button appear, modal sequence, and final transition should be a slow gracefull fade  
import { UIPanel, UIBreak, UIRow, UIColor, UISelect, UIText, UINumber, } from './libs/ui.js';



function Intro( editor ) {

	const container = new UIPanel();
	container.setId( 'intro-overlay' );
	container.setBorderTop( '0' );
	container.setPaddingTop( '20px' );
	container.setOpacity('50%')

	container.setInnerHTML ('')
//	container.add( new MenubarFile( editor ) );
//	container.add( new MenubarEdit( editor ) );
//	container.add( new MenubarAdd( editor ) );
//	container.add( new MenubarPlay( editor ) );


	return container;

}

export { Intro };
