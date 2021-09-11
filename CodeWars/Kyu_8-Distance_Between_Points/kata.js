/*
This series of katas will introduce you to basics of doing geometry with computers.
Point objects have x and y attributes (X and Y in C#) attributes.
Write a function calculating distance between Point a and Point b.
Tests round answers to 6 decimal places.

Sample Tests:
describe("Solution", function(){
  it("should pass these sample tests", function(){
    Test.assertApproxEquals(distanceBetweenPoints(new Point(3, 3), new Point(3, 3)), 0);
    Test.assertApproxEquals(distanceBetweenPoints(new Point(1, 6), new Point(4, 2)), 5);
    Test.assertApproxEquals(distanceBetweenPoints(new Point(-10.2, 12.5), new Point(0.3, 14.7)).toFixed(6), 10.728001);
  });
});
*/

/*
  * Solution 1 - My Solution
  * A direct application for the distance between 2 points rule 
  * Assuming the argumenst a & b are objects
  * Each argument contains two keys: [x, y]
*/
function distanceBetweenPoints(a, b) {
  return Math.sqrt(
    Math.pow((a.x- b.x), 2)
    + Math.pow((a.y - b.y), 2)
  )
}

/*
  * Solution 2 - Inspired by other Code wars users solutions
  * Users = ["andorey", ]
*/
function distanceBetweenPoints({x: x1, y: y1}, {x: x2, y: y2}) {
  return Math.hypot(x1 - x2, y1 - y2);
}