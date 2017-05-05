 /* Magic Mirror
  * Module: MMM-M
  *
  * By John Wade
  * MIT Licensed.
  */
 Module.register("MMM-NightLight", {

     // Module config defaults.
     defaults: {
         //color: #fff
     },

     // Define required scripts.
     getScripts: function() {
         return ["moment.js"];
     },

     getStyles: function() {
         return ["MMM-NightLight.css"];
     },

     // Define start sequence.
     start: function() {
         Log.info("Starting module: " + this.name);

         // Set locale.
         moment.locale(config.language);
         this.today = "";
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
