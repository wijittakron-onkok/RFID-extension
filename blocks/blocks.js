Blockly.defineBlocksWithJsonArray([
  {
    "type": "kb_i2c_scanner_decimal",
    "message0": "Decimal scl: %1 sda: %2 freq: %3",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "scl",
        "options": [
          ["SCL0", 22],
          ["SCL1", 5]
        ]
      },
      {
        "type": "field_dropdown",
        "name": "sda",
        "options": [
          ["SDA0", 21],
          ["SDA1", 4]
        ]
      },
      {
        "type": "input_value",
        "name": "freq",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#985BA5",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "kb_i2c_scanner_hexadecimal",
    "message0": "Hexadecimal scl: %1 sda: %2 freq: %3",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "scl",
        "options": [
          ["SCL0", 22],
          ["SCL1", 5]
        ]
      },
      {
        "type": "field_dropdown",
        "name": "sda",
        "options": [
          ["SDA0", 21],
          ["SDA1", 4]
        ]
      },
      {
        "type": "input_value",
        "name": "freq",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#985BA5",
    "tooltip": "",
    "helpUrl": ""
  }
]);