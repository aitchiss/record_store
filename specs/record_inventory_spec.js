var assert = require('assert')
var RecordInventory = require('../record_inventory.js')
var Record = require('../record.js')

describe('Record Inventory tests', function(){

  var recordInventory 

  beforeEach(function(){
    recordInventory = new RecordInventory
  })

  it('starts with empty inventory', function(){
    assert.strictEqual(0, recordInventory.inventory.length)
  })

  it('can add to inventory', function(){
    var record1 = new Record('Bruce Springsteen', 'Darkness on the Edge of Town', 'rock', 1299)
    recordInventory.add(record1)
    assert.strictEqual(1, recordInventory.inventory.length)
  })

  it('can remove from inventory', function(){
    var record1 = new Record('Bruce Springsteen', 'Darkness on the Edge of Town', 'rock', 1299)
    recordInventory.add(record1)
    recordInventory.remove(record1)
    assert.strictEqual(0, recordInventory.inventory.length)
  })

  it('can filter inventory by genre', function(){
    var record1 = new Record('Bruce Springsteen', 'Darkness on the Edge of Town', 'rock', 1200)
    var record2 = new Record('The Hold Steady', 'Stay Positive', 'rock', 1100)
    var record3 = new Record('Jimmy Eat World', 'Bleed American', 'emo', 1200)
    recordInventory.add(record1)
    recordInventory.add(record2)
    recordInventory.add(record3)
    assert.strictEqual(1, recordInventory.getInventoryByGenre('emo').length)
  })

  it('can print contents', function(){
    var record1 = new Record('Bruce Springsteen', 'Darkness on the Edge of Town', 'rock', 1299)
    var record2 = new Record('The Hold Steady', 'Stay Positive', 'rock', 1199)
    recordInventory.add(record1)
    recordInventory.add(record2)
    var expectedString = "Bruce Springsteen: 'Darkness on the Edge of Town'\nThe Hold Steady: 'Stay Positive'"
    assert.strictEqual(expectedString, recordInventory.print())
  })

  it('can get total value of contents', function(){
    var record1 = new Record('Bruce Springsteen', 'Darkness on the Edge of Town', 'rock', 1200)
    var record2 = new Record('The Hold Steady', 'Stay Positive', 'rock', 1100)
    recordInventory.add(record1)
    recordInventory.add(record2)
    assert.strictEqual(2300, recordInventory.getTotalValue())
  })

  it('can get total value by genre', function(){
    var record1 = new Record('Beastie Boys', 'Hello Nasty', 'Hip Hop', 1000)
    var record2 = new Record('The Clash', 'Give \'em Enough Rope', 'Punk', 500)
    recordInventory.add(record1)
    recordInventory.add(record2)
    assert.strictEqual(500, recordInventory.getTotalValue('Punk'))
  })

  it('can return most valuable record', function(){
    var record1 = new Record('Beastie Boys', 'Hello Nasty', 'Hip Hop', 1000)
    var record2 = new Record('The Clash', 'Give \'em Enough Rope', 'Punk', 500)
    recordInventory.add(record1)
    recordInventory.add(record2)
    assert.strictEqual(record1, recordInventory.getMostValuableRecord())
  })

  it('can sort by value low to high', function(){
    var record1 = new Record('Beastie Boys', 'Hello Nasty', 'Hip Hop', 1000)
    var record2 = new Record('The Clash', 'Give \'em Enough Rope', 'Punk', 500)
    var record3 = new Record('Sleater Kinney', 'Dig Me Out', 'Punk', 999)
    recordInventory.add(record1)
    recordInventory.add(record2)
    recordInventory.add(record3)
    recordInventory.sortByValueLowToHigh()
    assert.strictEqual(record2, recordInventory.inventory[0])
    assert.strictEqual(record1, recordInventory.inventory[2])
  })

  it('can sort by value high to low', function(){
    var record1 = new Record('Beastie Boys', 'Hello Nasty', 'Hip Hop', 1000)
    var record2 = new Record('The Clash', 'Give \'em Enough Rope', 'Punk', 500)
    var record3 = new Record('Sleater Kinney', 'Dig Me Out', 'Punk', 999)
    recordInventory.add(record1)
    recordInventory.add(record2)
    recordInventory.add(record3)
    recordInventory.sortByValueHighToLow()
    assert.strictEqual(record1, recordInventory.inventory[0])
    assert.strictEqual(record2, recordInventory.inventory[2])
  })

  
})