({
  name: "I2C Scanner",
  description: "KidBright V1.3 I2C Scanner",
  author: "WIJITTAKRON",
  category: "Other",
  version: "1.0.0",
  icon: "/static/icon.png",
  color: "#8D44AD",
  blocks: [
    {
      xml: `
              <block type="dec_i2c_scanner">
                  <field name="scl">22</field>
                  <field name="sda">21</field>
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
              <block type="hex_i2c_scanner">
                  <field name="scl">22</field>
                  <field name="sda">21</field>
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
