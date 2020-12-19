/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

var $open = true;

+( function() {
  console.log('Página Festival de música');
} )();

document.getElementById("abrir").onclick=abrirmenu;

function abrirmenu(){
  if ($open){
  document.getElementById("open_close").style.display = "inline";
  $open = !$open;
  console.log("Abrir menú");
  }else{
    document.getElementById("open_close").style.display = "none";
    $open = !$open;
    console.log("cerrar menú");
  }
}