var registro = new Registro;
 
function Registro(){
    
    Registro.prototype.setUser = function (persona){
        personas = persona;
    };
 
    Registro.prototype.getUser = function (){
        return personas;
    };   
    
    Registro.prototype.Formulario = function (){
        
        var component = 'formulario.html';
        
        $.ajax({
            mimeType: 'text/html; charset=utf-8', 
            url: component,
            type: 'GET',
            dataType: "html",
            async: true,
            success: function(data) {
                $('#contenedor').html(data);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert(errorThrown);
            }
        });        
        
    };
 
    var personas;
    
}
 
registro.Formulario();