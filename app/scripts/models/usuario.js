PrincipalRest.Models = PrincipalRest.Models || {};

PrincipalRest.Models.Usuario = Backbone.Model.extend(
    {
        idAttribute: "_id",
        urlRoot : "http://localhost:3000/usuario",
        defaults: {
            nombre: "",
            apellido: "",
            usuario:"",
            password:"",
        },

        initialize: function(attr){
            /*this.on('change:nombre', onChangePanels,this);
            console.log("Creando un nuevo usuario con nombre: " + this.get("nombre"));*/

        }
    }
);
