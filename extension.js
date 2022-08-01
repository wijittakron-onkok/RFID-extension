({
  name: "I2C Scanner",
  description: "KidBright V1.3 I2C Scanner",
  author: "WIJITTAKRON",
  category: "Other",
  version: "1.0.0",
  icon: "/static/icon.png",
  color: "#985BA5",
  blocks: [
    {
      xml: `
              <block type="kb_i2c_scanner_decimal">
                  <value name="freq">
                      <shadow type="math_number">
                          <field name="NUM">100000</field>
                      </shadow>
                  </value>
              </block>
            `
    },
    {
      xml: `
              <block type="kb_i2c_scanner_hexadecimal">
                  <value name="freq">
                      <shadow type="math_number">
                          <field name="NUM">100000</field>
                      </shadow>
                  </value>
              </block>
            `
    }
  ]
});