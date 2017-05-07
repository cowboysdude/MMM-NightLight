  /* Magic Mirror
  * Module: MMM-NightLight
  *
  * By John Wade
  * MIT Licensed.
  */
 Module.register("MMM-NightLight", {
     
     getStyles: function() {
         return ["MMM-NightLight.css"];
     },

     // Define start sequence.
     start: function() {
         Log.info("Starting: " + this.name);
         this.loaded = true;
     },

     getDom: function() {
     	
         var wrapper = document.createElement("div");
         
         wrapper.style.maxWidth = this.config.maxWidth;

         var NightLight = document.createElement("div");
         NightLight.classList.add("veil");
         NightLight.innerHTML = '';
         wrapper.appendChild(NightLight);
				 
         return wrapper;
     },

 });
