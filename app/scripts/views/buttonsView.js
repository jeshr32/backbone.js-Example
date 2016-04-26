PrincipalRest.Views = PrincipalRest.Views || {};


PrincipalRest.Views.ButtonView = Backbone.View.extend({
    template: JST['app/scripts/templates/buttons_template.ejs'],
    events: {
        'click #sForm' : "form",
        'click #del_button' : "delete",
        'click #set_button' : "update"
    },
    initialize: function(){
        this.render();
    },
    render : function(){
      $(this.$el).html(this.template);
      return this;
    },
    form : function(){
      miRouter.navigate("form", {trigger: true, replace : true});
    },
    delete : function(){
      var id = $(".panel_seleccionado").data("id");
      if(id != undefined){
          usuarios.get(id).destroy(
              {   wait : true,
                  success: function(model, response, options) {
                      console.log("Usuario eliminado: " + response.result);
                  },
                  error: function(model, xhr, options) {
                      console.log('An error occured while saving the data...');
                      console.debug(xhr);
                  }
              }
          );
      }
    },
    update : function(){
      var id = $(".panel_seleccionado").data("id");

      if(id != undefined){
      miRouter.navigate("form/"+id, {trigger: true, replace : true});
    }
    }


});
