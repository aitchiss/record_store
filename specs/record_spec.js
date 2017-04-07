var assert = require('assert')
var Record = require('../record.js')

describe('Record tests', function(){

  var record = new Record('David Bowie', 'Hunky Dory', 'rock', 999)

  it('has an artist', function(){
    assert.strictEqual('David Bowie', record.artist)
  })

  it('has a title', function(){
    assert.strictEqual('Hunky Dory', record.title)
  })

  it('has a genre', function(){
    assert.strictEqual('rock', record.genre)
  })

  it('has a price', function(){
    assert.strictEqual(999, record.price)
  })
})