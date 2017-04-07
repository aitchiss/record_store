var assert = require('assert')
var Record = require('../record.js')

describe('Record tests', function(){

  var record = new Record("David Bowie")

  it('has an artist', function(){
    assert.strictEqual('David Bowie', record.artist)
  })
})