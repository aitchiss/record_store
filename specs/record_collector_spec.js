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
    assert.strictEqual(0, recordCollector.collection.getLength())
  })

  it('can buy a record & decrease cash', function(){
    var record = new Record('Beastie Boys', 'Hello Nasty', 'Hip Hop', 1000)
    recordCollector.buy(record)
    assert.strictEqual(2000, recordCollector.cash)
  })

  it('adds to collection by buying record', function(){
    var record = new Record('Beastie Boys', 'Hello Nasty', 'Hip Hop', 1000)
    recordCollector.buy(record)
    assert.strictEqual(1, recordCollector.collection.getLength())
  })

  it('can sell record & increase funds', function(){
    var record = new Record('Beastie Boys', 'Hello Nasty', 'Hip Hop', 1000)
    recordCollector.buy(record)
    recordCollector.sell(record)
    assert.strictEqual(3000, recordCollector.cash)
  })

  it('removes from collection when record sold', function(){
    var record = new Record('Beastie Boys', 'Hello Nasty', 'Hip Hop', 1000)
    recordCollector.buy(record)
    recordCollector.sell(record)
    assert.strictEqual(0, recordCollector.collection.getLength())
  })

  it('can\'t buy record if insufficient cash', function(){
    var expensiveRecord = new Record('The Clash', 'Give \'em Enough Rope', 'Punk', 3100)
    recordCollector.buy(expensiveRecord)
    assert.strictEqual(0, recordCollector.collection.getLength())
    assert.strictEqual(3000, recordCollector.cash)
  })

  it('can get total value of collection', function(){
    var record1 = new Record('Beastie Boys', 'Hello Nasty', 'Hip Hop', 1000)
    var record2 = new Record('The Clash', 'Give \'em Enough Rope', 'Punk', 500)
    recordCollector.buy(record1)
    recordCollector.buy(record2)
    assert.strictEqual(1500, recordCollector.collection.getTotalValue())
  })

  it('can get total value of genre', function(){
    var record1 = new Record('Beastie Boys', 'Hello Nasty', 'Hip Hop', 1000)
    var record2 = new Record('The Clash', 'Give \'em Enough Rope', 'Punk', 500)
    recordCollector.buy(record1)
    recordCollector.buy(record2)
    assert.strictEqual(500, recordCollector.collection.getTotalValue('Punk'))
  })

  it('can get most valuable record', function(){
    var record1 = new Record('Beastie Boys', 'Hello Nasty', 'Hip Hop', 1000)
    var record2 = new Record('The Clash', 'Give \'em Enough Rope', 'Punk', 500)
    recordCollector.buy(record1)
    recordCollector.buy(record2)
    assert.strictEqual(record1, recordCollector.collection.getMostValuableRecord())
  })

})