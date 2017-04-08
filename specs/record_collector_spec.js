var assert = require('assert')
var RecordCollector = require('../record_collector.js')

describe('Record Collector tests', function(){

  var recordCollector = new RecordCollector(30)

  it('starts with 30 pounds cash', function(){
    assert.strictEqual(30, recordCollector.cash)
  })

})