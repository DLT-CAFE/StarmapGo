import { UITabbedPanel } from './libs/ui.js';

import { SidebarObject } from './Sidebar.Object.js';
import { SidebarGeometry } from './Sidebar.Geometry.js';
import { SidebarMaterial } from './Sidebar.Material.js';
import {AddModalShape} from './../starmapgo/AddModalShape.js';

function SidebarProperties( editor ) {

	const strings = editor.strings;

	const container = new UITabbedPanel();
	container.setId( 'properties' );

	container.addTab( 'object', strings.getKey( 'sidebar/properties/object' ), new SidebarObject( editor ) );
	container.addTab( 'geometry', strings.getKey( 'sidebar/properties/geometry' ), new SidebarGeometry( editor ) );
	container.addTab( 'material', strings.getKey( 'sidebar/properties/material' ), new SidebarMaterial( editor ) );

	container.addTab( 'addModal', strings.getKey( 'sidebar/properties/addShape' ), new AddModalShape( editor ) );
	container.select( 'addModal' );

	return container;

}

export { SidebarProperties };
