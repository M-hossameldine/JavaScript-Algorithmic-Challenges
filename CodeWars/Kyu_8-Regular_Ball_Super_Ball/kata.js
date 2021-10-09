var Ball = function(ballType) {
  this.ballType = (ballType === "super") ? "super": "regular";  
};

// Solution by other code wariors
var Ball = function(ballType = "regular") {
  this.ball = ballType;
};

// solution by other code wriours 
var Ball = function(ballType) {
  this.ballType = ballType || "regular";  
};
