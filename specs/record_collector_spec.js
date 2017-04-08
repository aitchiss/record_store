var assert = require('assert')
var RecordCollector = require('../record_collector.js')
var Record = require('../record.js')

describe('Record Collector tests', function(){

  var recordCollector

  beforeEach(function(){
    recordCollector = new RecordCollector(3000)
  })

  it('starts with 30 pounds cash', function(){
    assert.strictEqual(3000, recordCollector.cash)
  })

  it('starts with an empty collection', function(){
    assert.strictEqual(0, recordCollector.collection.length)
  })

  it('can buy a record & decrease cash', function(){
    var record = new Record('Beastie Boys', 'Hello Nasty', 'Hip Hop', 1000)
    recordCollector.buy(record)
    assert.strictEqual(2000, recordCollector.cash)
  })

  it('adds to collection by buying record', function(){
    var record = new Record('Beastie Boys', 'Hello Nasty', 'Hip Hop', 1000)
    recordCollector.buy(record)
    assert.strictEqual(1, recordCollector.collection.length)
  })

})