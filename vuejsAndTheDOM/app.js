//by instantiating a new vue instance, vue takes the html code
// - specified in el - and creates a template based on that code, 
// stores it internally, and uses the template to create the "real" 
// html code that is rendered to the DOM. At runtime we won't see 
// the vue commands inside our html - if inspecting our element
//  for example, we won't see vue syntax/curly braces
new Vue({
  el: '#app',
  data: {
    title: 'Hello World!',
    link: 'http://google.com'
  },
  methods: {
    sayHello: function(){
      return this.title; 
      //if we want to use a method with the same curly brace syntax 
      //in the template, we need to return something that can be converted 
      //to a string/is a string - for example, return title will not work, 
      //but return this.title will
    }
  }
});