/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12250, function(sym, e) {
         // reproducir la línea de tiempo en la posición determinada (ms o etiqueta)
         sym.play(1);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'pfizer'
   (function(symbolName) {   
   
   })("pfizer");
   //Edge symbol end:'pfizer'

   //=========================================================
   
   //Edge symbol: 'xynthia'
   (function(symbolName) {   
   
   })("xyntha");
   //Edge symbol end:'xyntha'

   //=========================================================
   
   //Edge symbol: 'benefix'
   (function(symbolName) {   
   
   })("benefix");
   //Edge symbol end:'benefix'

})(jQuery, AdobeEdge, "EDGE-10035970");