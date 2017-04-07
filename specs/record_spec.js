var assert = require('assert')
var Record = require('../record.js')

describe('Record tests', function(){

  var record = new Record('David Bowie', 'Hunky Dory')

  it('has an artist', function(){
    assert.strictEqual('David Bowie', record.artist)
  })

  it('has a title', function(){
    assert.strictEqual('Hunky Dory', record.title)
  })
})