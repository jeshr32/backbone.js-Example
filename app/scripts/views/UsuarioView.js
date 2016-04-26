PrincipalRest.Views = PrincipalRest.Views || {};

var buttonView;
//view de collection
PrincipalRest.Views.UsuarioView = Backbone.View.extend({
  events: {
		'click' : "_click"
  },
    initialize: function () {
        this.render();
    },
     render: function(){
      var el = $(this.el);
       this.collection.each(function(model){
            var template = JST['app/scripts/templates/boton_template.ejs'];
            var html = template(model.toJSON());
            el.append(html);
       });
       if(buttonView != undefined){
        buttonView.undelegateEvents();
       }
       buttonView = new PrincipalRest.Views.ButtonView({el:$("#mini_form")});


    },
    _click:function(e){
        e.preventDefault();
        var _id = $(e.target).data("id");
        var item = this.collection.get(_id);
        if(item != undefined){
            if($(e.target.parentElement).hasClass("panel_seleccionado")){
                $.seleccionado = undefined;
                $(e.target.parentElement).removeClass("panel_seleccionado");
            }else{
                $(e.target.parentElement).addClass("panel_seleccionado");
                if($.seleccionado != undefined){
                    $.seleccionado.removeClass("panel_seleccionado");
                }
                $.seleccionado = $(e.target.parentElement);


            }
        }
    }

});
