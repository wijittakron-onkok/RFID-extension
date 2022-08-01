Blockly.JavaScript['kb_i2c_decimal'] = function(block) {
  Blockly.Python.definitions_['import_kidbright_i2c'] = 'import kidbright_i2c as kb_i2c';

  var dropdown_scl = block.getFieldValue('scl');
  var dropdown_sda = block.getFieldValue('sda');
  var number_freq = block.getFieldValue('freq');

  var code = `kb_i2c.decimal(${dropdown_scl}, ${dropdown_sda}, ${number_freq})`;

  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.JavaScript['kb_i2c_hexadecimal'] = function(block) {
  Blockly.Python.definitions_['import_kidbright_i2c'] = 'import kidbright_i2c as kb_i2c';

  var dropdown_scl = block.getFieldValue('scl');
  var dropdown_sda = block.getFieldValue('sda');
  var number_freq = block.getFieldValue('freq');

  var code = `kb_i2c.hexadecimal(${dropdown_scl}, ${dropdown_sda}, ${number_freq})`;

  return [code, Blockly.Python.ORDER_NONE];
};