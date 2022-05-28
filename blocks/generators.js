Blockly.Python['rfid_read_uid'] = function (block) {
  Blockly.Python.definitions_['import_RFID'] = 'import RFID';

  var code = `RFID.do_read()`;
  return [code, Blockly.Python.ORDER_NONE];
};

