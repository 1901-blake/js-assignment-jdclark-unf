/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  switch (shape) {
    case 'Square':
      // For a square, the number of lines and characters per line are equal
      for (let i = 0; i < height; i++) {
        let line = '';
        for (let j = 0; j < height; j++) {
          line += character;
        }
        console.log(`${line}`);
      }
      break;
    
    case 'Triangle':
      // For a (right isosceles) triangle, characters per line are equal to the number 
      // lines printed so far
      for (let i = 0; i < height; i++) {
        let line = '';
        for (let j = 0; j <= i; j++) {
          line += character;
        }
        console.log(`${line}`);
      }
      break;

    case 'Diamond':
      // Diamonds are tricky, and need to be drawn as two triangles sharing a
      // common horizontal axis (the center line of the diamond)
      // Unfortunately, this only works for odd-numbered height values
      
      // Upper triangle
      for (let i = 1; i < height; i += 2) {
        let line = '';

        for (let j = 0; j < (height - i - 1) / 2; j++) {
          line += ' ';
        }
        for (let j = 0; j < i; j++) {
          line += character;
        }
        console.log(`${line}`);
      }
      // Lower triangle
      for (let i = height; i > 0; i -= 2) {
        let line = '';

        for (let j = 0; j < (height - 1 - i) / 2; j++) {
          line += ' ';
        }
        for (let j = 0; j < i; j++) {
          line += character;
        }
        console.log(`${line}`);
      }
      break;
  
    default:
      break;
  }
}

console.log(`\nA square of height 4, made from '#'s:\n`);
printShape('Square', 4, '#');
console.log(`\nA triangle of height 5, made from '@'s:\n`);
printShape('Triangle', 5, '@');
console.log(`\nA diamond of height 7, made from '&'s:\n`);
printShape('Diamond', 7, '&');