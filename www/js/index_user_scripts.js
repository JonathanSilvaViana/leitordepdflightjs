/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  .uib_w_5 */
    $(document).on("click", ".uib_w_5", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $(".uib_w_18").modal("toggle");  
         return false;
    });
    
        /* button  lascar */
    $(document).on("click", ".uib_w_20", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $(".uib_w_18").modal("toggle");  
         return false;
    });
    
        /* button  .uib_w_26 */
    $(document).on("click", ".uib_w_26", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_83_4"); 
         return false;
    });
    
        /* button  pagina nova */
    $(document).on("click", ".uib_w_27", function(evt)
    {
         /*global activate_page */
         activate_page("#t"); 
         return false;
    });
    
        /* button  simples */
    $(document).on("click", ".uib_w_37", function(evt)
    {
         /*global activate_page */
         activate_page("#seletor"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
