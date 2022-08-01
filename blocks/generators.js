Blockly.Python['dec_i2c_scanner'] = function(block) {
  Blockly.Python.definitions_['import_kidbright_i2c'] = 'import KidBright_I2C as kb_i2c';

  var dropdown_scl = block.getFieldValue('scl');
  var dropdown_sda = block.getFieldValue('sda');
  var value_freq = Blockly.Python.valueToCode(block, 'freq', Blockly.Python.ORDER_ATOMIC);

  var code = `kb_i2c.decimal(${dropdown_scl}, ${dropdown_sda}, ${value_freq})`;

  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['hex_i2c_scanner'] = function(block) {
  Blockly.Python.definitions_['import_kidbright_i2c'] = 'import KidBright_I2C as kb_i2c';

  var dropdown_scl = block.getFieldValue('scl');
  var dropdown_sda = block.getFieldValue('sda');
  var value_freq = Blockly.Python.valueToCode(block, 'freq', Blockly.Python.ORDER_ATOMIC);

  var code = `kb_i2c.hexadecimal(${dropdown_scl}, ${dropdown_sda}, ${value_freq})`;

  return [code, Blockly.Python.ORDER_NONE];
};
