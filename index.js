#!/usr/bin/env node

import * as path         from 'path';
import { fileURLToPath } from 'url';
import { execFile }      from 'child_process';

const __dirname = path.dirname( fileURLToPath( import.meta.url ) );
const json      = path.resolve( __dirname, '.htmlhintrc.json' );
const htmlhint  = path.resolve( __dirname, 'node_modules/.bin/htmlhint' );

const execFunct = ( name, args = {} ) => {

	execFile( 
		name,
		args,
		( error, stdout, stderr ) => {

			// if ( error ) {

			// 	console.error(  `error: ${error.message}` );
			
			// }

			if ( stdout ) {

				console.log( stdout );
			
			}

			if ( stderr ) {

				console.log( stderr );
			
			}
		
		}, 
	);

};

execFunct( htmlhint, [ '-c', json ] );

