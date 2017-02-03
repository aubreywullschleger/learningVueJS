//use for each instance of vue
new Vue({ //the following properties are reserved property names for vuejs
  el: '#app',//the element that this vue instance controls, same selectors as css as string
  data: { //store all data for this vue instance, properties can be called whatever you want. 
    title: 'Hello World!'
  },
  methods: {
    changeTitle: function(event){
    //here 'this' is refering to the data object and we will not write data.property, vue proxies all our data properties to the top of this specific vue instance behind the scenes
    this.title = event.target.value;
    }
  }  
});