var inicioApp = function ()
{

var informacion = function()
{
	$("#infoPersonal").show("slow");
	$("#curriculum").hide();
	$("#contactar").hide();
	$("#texto").hide();		
}
var curriculum = function ()
{
$("#curriculum").show("slow");
$("#curri").hide("slow");
$("#texto").hide();
}

 var inicio = function()
 {
	$("#texto").show("slow");
	$("#infoPersonal").hide("slow");
}

var Coontactar = function()
{
 $("#contactar").show("slow");
 $("#texto").hide();	
 $("#curriculum").hide();
$("#curri").hide();
$("#infoPersonal").hide();

}
//eventos
$("#btninformacion").on("click",informacion);
$("#btnproyectos").on("click",curriculum);
$("#btninicio").on("click",inicio);
$("#btncontactar").on("click",Coontactar);



}
$(document).on("ready",inicioApp);
