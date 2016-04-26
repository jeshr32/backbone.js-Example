PrincipalRest.Routers = PrincipalRest.Routers || {};


var formView
PrincipalRest.Routers.Enrutador = Backbone.Router.extend({
    routes:{
        ""                  : "index",
        "form"              : "formIng",
        "form/:_id"          : "formAct"
    },
    initialize: function(){
        console.log("Aplicando enrutador");
    },
    index: onInit,
    formIng: onForm,
    formAct: onUpdate

 });


function onInit(){

    usuarios = new PrincipalRest.Collections.UsuariosCollection([]);
    actualizaPaneles();
    usuarios.on({"add":onChangePanels, "remove":onChangePanels});
    wait: true,
    $("#sForm").removeAttr("hidden");
    $("#del_button").removeAttr("hidden");
    $("#set_button").removeAttr("hidden");
    if(formView) formView.undelegateEvents();

}

function onForm(){

      formView = new PrincipalRest.Views.FormView({el:$('#listado')});
      $("#sForm").attr("hidden", "true");
      $("#del_button").attr("hidden", "true");
      $("#set_button").attr("hidden", "true");
}

function onUpdate(_id){
      actualizaPaneles();
      formView = new PrincipalRest.Views.FormView({el:$('#listado'),id:_id,collection:usuarios});

      $("#sForm").attr("hidden", "true");
      $("#del_button").attr("hidden", "true");
      $("#set_button").attr("hidden", "true");

}
