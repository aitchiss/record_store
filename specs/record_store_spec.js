var assert = require('assert')
var RecordStore = require('../record_store.js')

describe('RecordStore tests', function(){

  var recordStore = new RecordStore('CC Records')

  it('has a name', function(){
    assert.strictEqual('CC Records', recordStore.name)
  })
})