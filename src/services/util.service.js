'use strict';

angular.module('quickfit')

.factory('Util', Util);

Util.$inject = [];
function Util() {

  const service = {
    convertColors
  };
  return service;


  function convertColors(colorString, baseColor, length) {
    let rgbIndex, baseColorArr, rgbArr, newColor, colorsArr = [];
    if (colorString === 'green') rgbIndex = 1;
    else if (colorString === 'blue') rgbIndex = 2;
    for (let i=0; i<length; i++) {
      baseColorArr = baseColor.split(/[()]/);
      // console.log(baseColorArr);
      rgbArr = baseColorArr[1].split(',');
      rgbArr[rgbIndex] -= 15 * (i+1);
      colorsArr.push(`rgb(${rgbArr.join(',')})`);
    }
    return colorsArr;
  }
}