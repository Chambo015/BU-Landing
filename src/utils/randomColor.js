/* const generateRandomLightColor = () => {
    var letters = 'BCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}
 */


const generateRandomLightColor = () => {
    var color = 'rgb' + `(${getRandomIntInclusive(110, 200)},${getRandomIntInclusive(110, 205)},${getRandomIntInclusive(110, 200)}`;
    return color;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

export {
    generateRandomLightColor
}