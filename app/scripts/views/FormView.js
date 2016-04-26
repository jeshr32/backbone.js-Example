PrincipalRest.Views = PrincipalRest.Views || {};


//view de formulario
PrincipalRest.Views.FormView = Backbone.View.extend({
    events :
    {
      "click #add_button" : "agregar",
      "click #close_form_btn" : "cerrar"

    },
    template: JST['app/scripts/templates/formulario_template.ejs'],

    initialize: function () {
        this.render();
	  },
    render:function () {
      if(this.collection){
        var item = this.collection.get(this.id);

      }else{
        var model = new PrincipalRest.Models.Usuario({});
        var item = model;
      }
      var template = this.template;
      var html = template(item.toJSON());
      $(this.$el).html(html);
      return this;
    },
     agregar : function(e){

      e.preventDefault();

      var nombre = $("#nombre_set").val();
      var apellido = $("#apellido_set").val();
      var usuario = $("#usuario_set").val();
      var password = $("#password_set").val();

      if (this.collection){
        var id = this.id;
        var item = this.collection.get(id);
              item.set("nombre", nombre);
              item.set("apellido", apellido);
              item.set("usuario", usuario);
              item.set("password", password);

              item.save({}, {
                  success: function(model, response, options) {
                      console.log(response);
                      miRouter.navigate("", {trigger: true, replace : true});

                  },
                  error: function(model, xhr, options) {
                      console.log('An error occured while saving the data...');
                  }
        });
      }else{
        var usuario = new PrincipalRest.Models.Usuario({nombre: nombre,apellido: apellido,usuario: usuario,password: password });
        usuario.save({},
        {
          wait: true,
            success: function(model, response, options){
              miRouter.navigate("", {trigger: true, replace : true});
            },
            error: function(model, xhr, options){
                console.debug(model);
                console.debug(xhr);
            }

        }
        );
      }



    },
      cerrar : function(){
      miRouter.navigate("", {trigger: true, replace : true});

   }

});
