Blockly.defineBlocksWithJsonArray([
  {
    "type": "dec_i2c_scanner",
    "message0": "Address I2C Decimal scl_pin: %1 sda_pin: %2 frequency: %3 Scan",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "scl",
        "options": [
          ["SCL0", "22"],
          ["SCL1", "5"]
        ]
      },
      {
        "type": "field_dropdown",
        "name": "sda",
        "options": [
          ["SDA0", "21"],
          ["SDA1", "4"]
        ]
      },
      {
        "type": "input_value",
        "name": "freq",
        "check": "Number"
      },
    ],
    "output": "Number",
    "colour": "#8D44AD",
    "tooltip": "Get address i2c decimal number from kid_bright v1.3 type array.",
    "helpUrl": ""
  },
  {
    "type": "hex_i2c_scanner",
    "message0": "Address I2C Hexadecimal scl_pin: %1 sda_pin: %2 frequency: %3 Scan",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "scl",
        "options": [
          ["SCL0", "22"],
          ["SCL1", "5"]
        ]
      },
      {
        "type": "field_dropdown",
        "name": "sda",
        "options": [
          ["SDA0", "21"],
          ["SDA1", "4"]
        ]
      },
      {
        "type": "input_value",
        "name": "freq",
        "check": "Number"
      },
    ],
    "output": "Number",
    "colour": "#8D44AD",
    "tooltip": "Get address i2c hexadecimal number from kid_bright v1.3 type array.",
    "helpUrl": ""
  }
]);
