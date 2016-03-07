// Dependencies:
var labelable = require('./index.js');

var a = labelable({
    'type': 'element',
    'tagName': 'div'
});

var b = labelable({
    'type': 'element',
    'tagName': 'input'
});

var c = labelable({
    'type': 'element',
    'tagName': 'input',
    'properties': {
        'type': 'hidden'
    }
});

// Yields:
console.log('txt', ['a: ' + a, 'b: ' + b, 'c: ' + c].join('\n'));
