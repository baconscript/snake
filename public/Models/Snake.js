var Backbone = require('backbone')
_ = require("lodash")


var Snake = Backbone.Model.extend({

            props: {
                  score: 'number'
                  x: 'number'
                  y: 'number'
          dir: ["Up","Left","Right","Down"]
          tail: 'array',
          
},
                                  
          moveForward: function(){
              var tail = this.get("tail");
              tail =  _.clone(tail);
              var moveHead =
                                  var oldHead = {x: this.get("x"),
                                                 y: this.get("y")
                                  }
                                  
                                  unshift
                                  
            
                     
          }
          
                                  
          
          
          });

module.exports = {
    
    


Snake:Snake
    
    
    
    
    

};







