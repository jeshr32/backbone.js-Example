var miRouter
var usuarios
var panelView

window.PrincipalRest = {
 Models: {},
 Collections: {},
 Views: {},
 Routers: {},
 init: function () {
   'use strict';

 }
};

$(document).ready(function(){
  PrincipalRest.init();
  miRouter = new PrincipalRest.Routers.Enrutador;
  Backbone.history.start();

});

//crea la tabla
function onChangePanels(model, collection){
$("#listado").html("<table border='1' ><tr><td>Id</td><td>Nombre</td><td>Apellido</td><td>Usuario</td><td>Password</td></tr>");
//paneles.each(pintaPanel);
var usuarioView = new PrincipalRest.Views.UsuarioView({el:$("#listado table"), collection:collection});
}


//busca los datos al server
function actualizaPaneles(){
   usuarios.fetch({
        success: function(){

        }
   });
}
