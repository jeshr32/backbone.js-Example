PrincipalRest.Collections = PrincipalRest.Collections || {};


PrincipalRest.Collections.UsuariosCollection = Backbone.Collection.extend(
{
    url: "http://localhost:3000/usuario",
    model: PrincipalRest.Models.Usuario
}
);
