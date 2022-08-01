({
  name: "I2C Scanner",
  description: "KidBright V1.3 I2C Scanner",
  author: "WIJITTAKRON",
  category: "Other",
  version: "1.0.0",
  icon: "/static/icon.png",
  color: "#8D44AC",
  blocks: [
    {
      xml: `
              <block type="kb_i2c_decimal">
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
              <block type="kb_i2c_hexadecimal">
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