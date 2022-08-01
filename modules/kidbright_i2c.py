from machine import SoftI2C, Pin


def decimal(scl, sda, freq):
    i2c = SoftI2C(scl=Pin(scl), sda=Pin(sda), freq=freq)
    address = i2c.scan()
    i2c.stop()

    return address


def hexadecimal(scl, sda, freq):
    i2c = SoftI2C(scl=Pin(scl), sda=Pin(sda), freq=freq)
    address = i2c.scan()
    i2c.stop()

    address_hex = []
    for d in address:
        address_hex.append(hex(d))

    return address_hex