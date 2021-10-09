const randomValue = (start, end, step) => {
  return Math.floor(Math.random() * (end + 1 - start))
} 

var Ghost = function() {
  const color = ["white", "yellow", "purple", "red"];
  this.color = color[randomValue(0, 3)];
};

