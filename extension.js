({
    name: "RFID", // Category Name
    description: "RFID reader 13.56MHz (MFRC522) SPI; SET Pin => SDA=SDA1, SCK=SLC1, MOSI=Pin18, MISO=Pin19",
    author: "WIJITTAKRON",
    category: "Sensors",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#3498DB", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        "rfid_is_detected",
        "rfid_read_uid"
    ]
});
