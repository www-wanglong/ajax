const fp = require('lodash/fp')

const f = fp.flowRight(fp.replace(/\s+/g, '_'), fp.toLower)

// words wild wed => W. W. W
// console.log(f('hello  word'))

const f1 = fp.flowRight(fp.join('. '), fp.map(fp.flowRight(fp.toUpper, fp.first)), fp.split(/\s+/g))
console.log(f1('words wild wed'))