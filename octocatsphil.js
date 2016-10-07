//Write your constructor function below.
//You should have 2 instance variables and 1 instance function included.

function Octocats(n,a) {

  this.name = n;
  this.arms = a;

  this.slap = function(){
    for(var i=0; i<this.arms; i++){
      console.log("SLAP!")
    }
  };
}

//Write your 3 new octocat objects below here.
var phil = new Octocat("Phil",100);
var erik = new Octocat("Euler",.5);
var natalie = new Octocat("Natalie",22);

natalie.slap();
