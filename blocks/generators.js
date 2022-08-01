Blockly.JavaScript['kb_i2c_decimal'] = function (block) {
  Blockly.Python.definitions_['import_kidbright_i2c'] = 'import kidbright_i2c as kb_i2c';

  var dropdown_scl = block.getFieldValue('scl');
  var dropdown_sda = block.getFieldValue('sda');
  var number_freq = Blockly.Python.valueToCode(block, 'freq', Blockly.Python.ORDER_NONE);

  var code = `kb_i2c`;

  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.JavaScript['kb_i2c_hexadecimal'] = function (block) {
  Blockly.Python.definitions_['import_kidbright_i2c'] = 'import kidbright_i2c as kb_i2c';

  var dropdown_scl = block.getFieldValue('scl');
  var dropdown_sda = block.getFieldValue('sda');
  var number_freq = Blockly.Python.valueToCode(block, 'freq', Blockly.Python.ORDER_NONE);

  var code = `kb_i2c`;

  return [code, Blockly.Python.ORDER_NONE];
};