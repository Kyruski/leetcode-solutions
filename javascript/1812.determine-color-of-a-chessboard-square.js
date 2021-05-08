/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
  return (coordinates.charCodeAt(0) % 2 === 1) ? Number(coordinates[1]) % 2 === 0 : Number(coordinates[1]) % 2 === 1;
};

var squareIsWhite = function(coordinates) {
  return (coordinates.charCodeAt(0) % 2 === 0) === return (coordinates.charCodeAt(0) % 2 === 0) === (Number(coordinates[1]) % 2 === 1);;
};