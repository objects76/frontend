
let canvas = document.getElementById('myCanvas');
let ctx = canvas ? canvas.getContext('2d') : null;

class PaletteEntry {
    constructor(r, g, b) {
        this.red = r;
        this.green = g;
        this.blue = b;
    }
};

// http://www.columbia.edu/itc/visualarts/r4110/f2000/week06/06_03_Color_palettes.pdf
win32SystemPalette = {
    name: 'win32SystemPalette',
    clrs: [
        new PaletteEntry(0x00, 0x00, 0x00),
        new PaletteEntry(0x80, 0x00, 0x00),
        new PaletteEntry(0x00, 0x80, 0x00),
        new PaletteEntry(0x80, 0x80, 0x00),
        new PaletteEntry(0x00, 0x00, 0x80),
        new PaletteEntry(0x80, 0x00, 0x80),
        new PaletteEntry(0x00, 0x80, 0x80),
        new PaletteEntry(0xC0, 0xC0, 0xC0),
        new PaletteEntry(0xC0, 0xDC, 0xC0),
        new PaletteEntry(0xA6, 0xCA, 0xF0),
        new PaletteEntry(0x2A, 0x3F, 0xAA),
        new PaletteEntry(0x2A, 0x3F, 0xFF),
        new PaletteEntry(0x2A, 0x5F, 0x00),
        new PaletteEntry(0x2A, 0x5F, 0x55),
        new PaletteEntry(0x2A, 0x5F, 0xAA),
        new PaletteEntry(0x2A, 0x5F, 0xFF),
        new PaletteEntry(0x2A, 0x7F, 0x00),
        new PaletteEntry(0x2A, 0x7F, 0x55),
        new PaletteEntry(0x2A, 0x7F, 0xAA),
        new PaletteEntry(0x2A, 0x7F, 0xFF),
        new PaletteEntry(0x2A, 0x9F, 0x00),
        new PaletteEntry(0x2A, 0x9F, 0x55),
        new PaletteEntry(0x2A, 0x9F, 0xAA),
        new PaletteEntry(0x2A, 0x9F, 0xFF),
        new PaletteEntry(0x2A, 0xBF, 0x00),
        new PaletteEntry(0x2A, 0xBF, 0x55),
        new PaletteEntry(0x2A, 0xBF, 0xAA),
        new PaletteEntry(0x2A, 0xBF, 0xFF),
        new PaletteEntry(0x2A, 0xDF, 0x00),
        new PaletteEntry(0x2A, 0xDF, 0x55),
        new PaletteEntry(0x2A, 0xDF, 0xAA),
        new PaletteEntry(0x2A, 0xDF, 0xFF),
        new PaletteEntry(0x2A, 0xFF, 0x00),
        new PaletteEntry(0x2A, 0xFF, 0x55),
        new PaletteEntry(0x2A, 0xFF, 0xAA),
        new PaletteEntry(0x2A, 0xFF, 0xFF),
        new PaletteEntry(0x55, 0x00, 0x00),
        new PaletteEntry(0x55, 0x00, 0x55),
        new PaletteEntry(0x55, 0x00, 0xAA),
        new PaletteEntry(0x55, 0x00, 0xFF),
        new PaletteEntry(0x55, 0x1F, 0x00),
        new PaletteEntry(0x55, 0x1F, 0x55),
        new PaletteEntry(0x55, 0x1F, 0xAA),
        new PaletteEntry(0x55, 0x1F, 0xFF),
        new PaletteEntry(0x55, 0x3F, 0x00),
        new PaletteEntry(0x55, 0x3F, 0x55),
        new PaletteEntry(0x55, 0x3F, 0xAA),
        new PaletteEntry(0x55, 0x3F, 0xFF),
        new PaletteEntry(0x55, 0x5F, 0x00),
        new PaletteEntry(0x55, 0x5F, 0x55),
        new PaletteEntry(0x55, 0x5F, 0xAA),
        new PaletteEntry(0x55, 0x5F, 0xFF),
        new PaletteEntry(0x55, 0x7F, 0x00),
        new PaletteEntry(0x55, 0x7F, 0x55),
        new PaletteEntry(0x55, 0x7F, 0xAA),
        new PaletteEntry(0x55, 0x7F, 0xFF),
        new PaletteEntry(0x55, 0x9F, 0x00),
        new PaletteEntry(0x55, 0x9F, 0x55),
        new PaletteEntry(0x55, 0x9F, 0xAA),
        new PaletteEntry(0x55, 0x9F, 0xFF),
        new PaletteEntry(0x55, 0xBF, 0x00),
        new PaletteEntry(0x55, 0xBF, 0x55),
        new PaletteEntry(0x55, 0xBF, 0xAA),
        new PaletteEntry(0x55, 0xBF, 0xFF),
        new PaletteEntry(0x55, 0xDF, 0x00),
        new PaletteEntry(0x55, 0xDF, 0x55),
        new PaletteEntry(0x55, 0xDF, 0xAA),
        new PaletteEntry(0x55, 0xDF, 0xFF),
        new PaletteEntry(0x55, 0xFF, 0x00),
        new PaletteEntry(0x55, 0xFF, 0x55),
        new PaletteEntry(0x55, 0xFF, 0xAA),
        new PaletteEntry(0x55, 0xFF, 0xFF),
        new PaletteEntry(0x7F, 0x00, 0x00),
        new PaletteEntry(0x7F, 0x00, 0x55),
        new PaletteEntry(0x7F, 0x00, 0xAA),
        new PaletteEntry(0x7F, 0x00, 0xFF),
        new PaletteEntry(0x7F, 0x1F, 0x00),
        new PaletteEntry(0x7F, 0x1F, 0x55),
        new PaletteEntry(0x7F, 0x1F, 0xAA),
        new PaletteEntry(0x7F, 0x1F, 0xFF),
        new PaletteEntry(0x7F, 0x3F, 0x00),
        new PaletteEntry(0x7F, 0x3F, 0x55),
        new PaletteEntry(0x7F, 0x3F, 0xAA),
        new PaletteEntry(0x7F, 0x3F, 0xFF),
        new PaletteEntry(0x7F, 0x5F, 0x00),
        new PaletteEntry(0x7F, 0x5F, 0x55),
        new PaletteEntry(0x7F, 0x5F, 0xAA),
        new PaletteEntry(0x7F, 0x5F, 0xFF),
        new PaletteEntry(0x7F, 0x7F, 0x00),
        new PaletteEntry(0x7F, 0x7F, 0x55),
        new PaletteEntry(0x7F, 0x7F, 0xAA),
        new PaletteEntry(0x7F, 0x7F, 0xFF),
        new PaletteEntry(0x7F, 0x9F, 0x00),
        new PaletteEntry(0x7F, 0x9F, 0x55),
        new PaletteEntry(0x7F, 0x9F, 0xAA),
        new PaletteEntry(0x7F, 0x9F, 0xFF),
        new PaletteEntry(0x7F, 0xBF, 0x00),
        new PaletteEntry(0x7F, 0xBF, 0x55),
        new PaletteEntry(0x7F, 0xBF, 0xAA),
        new PaletteEntry(0x7F, 0xBF, 0xFF),
        new PaletteEntry(0x7F, 0xDF, 0x00),
        new PaletteEntry(0x7F, 0xDF, 0x55),
        new PaletteEntry(0x7F, 0xDF, 0xAA),
        new PaletteEntry(0x7F, 0xDF, 0xFF),
        new PaletteEntry(0x7F, 0xFF, 0x00),
        new PaletteEntry(0x7F, 0xFF, 0x55),
        new PaletteEntry(0x7F, 0xFF, 0xAA),
        new PaletteEntry(0x7F, 0xFF, 0xFF),
        new PaletteEntry(0xAA, 0x00, 0x00),
        new PaletteEntry(0xAA, 0x00, 0x55),
        new PaletteEntry(0xAA, 0x00, 0xAA),
        new PaletteEntry(0xAA, 0x00, 0xFF),
        new PaletteEntry(0xAA, 0x1F, 0x00),
        new PaletteEntry(0xAA, 0x1F, 0x55),
        new PaletteEntry(0xAA, 0x1F, 0xAA),
        new PaletteEntry(0xAA, 0x1F, 0xFF),
        new PaletteEntry(0xAA, 0x3F, 0x00),
        new PaletteEntry(0xAA, 0x3F, 0x55),
        new PaletteEntry(0xAA, 0x3F, 0xAA),
        new PaletteEntry(0xAA, 0x3F, 0xFF),
        new PaletteEntry(0xAA, 0x5F, 0x00),
        new PaletteEntry(0xAA, 0x5F, 0x55),
        new PaletteEntry(0xAA, 0x5F, 0xAA),
        new PaletteEntry(0xAA, 0x5F, 0xFF),
        new PaletteEntry(0xAA, 0x7F, 0x00),
        new PaletteEntry(0xAA, 0x7F, 0x55),
        new PaletteEntry(0xAA, 0x7F, 0xAA),
        new PaletteEntry(0xAA, 0x7F, 0xFF),
        new PaletteEntry(0xAA, 0x9F, 0x00),
        new PaletteEntry(0xAA, 0x9F, 0x55),
        new PaletteEntry(0xAA, 0x9F, 0xAA),
        new PaletteEntry(0xAA, 0x9F, 0xFF),
        new PaletteEntry(0xAA, 0xBF, 0x00),
        new PaletteEntry(0xAA, 0xBF, 0x55),
        new PaletteEntry(0xAA, 0xBF, 0xAA),
        new PaletteEntry(0xAA, 0xBF, 0xFF),
        new PaletteEntry(0xAA, 0xDF, 0x00),
        new PaletteEntry(0xAA, 0xDF, 0x55),
        new PaletteEntry(0xAA, 0xDF, 0xAA),
        new PaletteEntry(0xAA, 0xDF, 0xFF),
        new PaletteEntry(0xAA, 0xFF, 0x00),
        new PaletteEntry(0xAA, 0xFF, 0x55),
        new PaletteEntry(0xAA, 0xFF, 0xAA),
        new PaletteEntry(0xAA, 0xFF, 0xFF),
        new PaletteEntry(0xD4, 0x00, 0x00),
        new PaletteEntry(0xD4, 0x00, 0x55),
        new PaletteEntry(0xD4, 0x00, 0xAA),
        new PaletteEntry(0xD4, 0x00, 0xFF),
        new PaletteEntry(0xD4, 0x1F, 0x00),
        new PaletteEntry(0xD4, 0x1F, 0x55),
        new PaletteEntry(0xD4, 0x1F, 0xAA),
        new PaletteEntry(0xD4, 0x1F, 0xFF),
        new PaletteEntry(0xD4, 0x3F, 0x00),
        new PaletteEntry(0xD4, 0x3F, 0x55),
        new PaletteEntry(0xD4, 0x3F, 0xAA),
        new PaletteEntry(0xD4, 0x3F, 0xFF),
        new PaletteEntry(0xD4, 0x5F, 0x00),
        new PaletteEntry(0xD4, 0x5F, 0x55),
        new PaletteEntry(0xD4, 0x5F, 0xAA),
        new PaletteEntry(0xD4, 0x5F, 0xFF),
        new PaletteEntry(0xD4, 0x7F, 0x00),
        new PaletteEntry(0xD4, 0x7F, 0x55),
        new PaletteEntry(0xD4, 0x7F, 0xAA),
        new PaletteEntry(0xD4, 0x7F, 0xFF),
        new PaletteEntry(0xD4, 0x9F, 0x00),
        new PaletteEntry(0xD4, 0x9F, 0x55),
        new PaletteEntry(0xD4, 0x9F, 0xAA),
        new PaletteEntry(0xD4, 0x9F, 0xFF),
        new PaletteEntry(0xD4, 0xBF, 0x00),
        new PaletteEntry(0xD4, 0xBF, 0x55),
        new PaletteEntry(0xD4, 0xBF, 0xAA),
        new PaletteEntry(0xD4, 0xBF, 0xFF),
        new PaletteEntry(0xD4, 0xDF, 0x00),
        new PaletteEntry(0xD4, 0xDF, 0x55),
        new PaletteEntry(0xD4, 0xDF, 0xAA),
        new PaletteEntry(0xD4, 0xDF, 0xFF),
        new PaletteEntry(0xD4, 0xFF, 0x00),
        new PaletteEntry(0xD4, 0xFF, 0x55),
        new PaletteEntry(0xD4, 0xFF, 0xAA),
        new PaletteEntry(0xD4, 0xFF, 0xFF),
        new PaletteEntry(0xFF, 0x00, 0x55),
        new PaletteEntry(0xFF, 0x00, 0xAA),
        new PaletteEntry(0xFF, 0x1F, 0x00),
        new PaletteEntry(0xFF, 0x1F, 0x55),
        new PaletteEntry(0xFF, 0x1F, 0xAA),
        new PaletteEntry(0xFF, 0x1F, 0xFF),
        new PaletteEntry(0xFF, 0x3F, 0x00),
        new PaletteEntry(0xFF, 0x3F, 0x55),
        new PaletteEntry(0xFF, 0x3F, 0xAA),
        new PaletteEntry(0xFF, 0x3F, 0xFF),
        new PaletteEntry(0xFF, 0x5F, 0x00),
        new PaletteEntry(0xFF, 0x5F, 0x55),
        new PaletteEntry(0xFF, 0x5F, 0xAA),
        new PaletteEntry(0xFF, 0x5F, 0xFF),
        new PaletteEntry(0xFF, 0x7F, 0x00),
        new PaletteEntry(0xFF, 0x7F, 0x55),
        new PaletteEntry(0xFF, 0x7F, 0xAA),
        new PaletteEntry(0xFF, 0x7F, 0xFF),
        new PaletteEntry(0xFF, 0x9F, 0x00),
        new PaletteEntry(0xFF, 0x9F, 0x55),
        new PaletteEntry(0xFF, 0x9F, 0xAA),
        new PaletteEntry(0xFF, 0x9F, 0xFF),
        new PaletteEntry(0xFF, 0xBF, 0x00),
        new PaletteEntry(0xFF, 0xBF, 0x55),
        new PaletteEntry(0xFF, 0xBF, 0xAA),
        new PaletteEntry(0xFF, 0xBF, 0xFF),
        new PaletteEntry(0xFF, 0xDF, 0x00),
        new PaletteEntry(0xFF, 0xDF, 0x55),
        new PaletteEntry(0xFF, 0xDF, 0xAA),
        new PaletteEntry(0xFF, 0xDF, 0xFF),
        new PaletteEntry(0xFF, 0xFF, 0x55),
        new PaletteEntry(0xFF, 0xFF, 0xAA),
        new PaletteEntry(0xCC, 0xCC, 0xFF),
        new PaletteEntry(0xFF, 0xCC, 0xFF),
        new PaletteEntry(0x33, 0xFF, 0xFF),
        new PaletteEntry(0x66, 0xFF, 0xFF),
        new PaletteEntry(0x99, 0xFF, 0xFF),
        new PaletteEntry(0xCC, 0xFF, 0xFF),
        new PaletteEntry(0x00, 0x7F, 0x00),
        new PaletteEntry(0x00, 0x7F, 0x55),
        new PaletteEntry(0x00, 0x7F, 0xAA),
        new PaletteEntry(0x00, 0x7F, 0xFF),
        new PaletteEntry(0x00, 0x9F, 0x00),
        new PaletteEntry(0x00, 0x9F, 0x55),
        new PaletteEntry(0x00, 0x9F, 0xAA),
        new PaletteEntry(0x00, 0x9F, 0xFF),
        new PaletteEntry(0x00, 0xBF, 0x00),
        new PaletteEntry(0x00, 0xBF, 0x55),
        new PaletteEntry(0x00, 0xBF, 0xAA),
        new PaletteEntry(0x00, 0xBF, 0xFF),
        new PaletteEntry(0x00, 0xDF, 0x00),
        new PaletteEntry(0x00, 0xDF, 0x55),
        new PaletteEntry(0x00, 0xDF, 0xAA),
        new PaletteEntry(0x00, 0xDF, 0xFF),
        new PaletteEntry(0x00, 0xFF, 0x55),
        new PaletteEntry(0x00, 0xFF, 0xAA),
        new PaletteEntry(0x2A, 0x00, 0x00),
        new PaletteEntry(0x2A, 0x00, 0x55),
        new PaletteEntry(0x2A, 0x00, 0xAA),
        new PaletteEntry(0x2A, 0x00, 0xFF),
        new PaletteEntry(0x2A, 0x1F, 0x00),
        new PaletteEntry(0x2A, 0x1F, 0x55),
        new PaletteEntry(0x2A, 0x1F, 0xAA),
        new PaletteEntry(0x2A, 0x1F, 0xFF),
        new PaletteEntry(0x2A, 0x3F, 0x00),
        new PaletteEntry(0x2A, 0x3F, 0x55),
        new PaletteEntry(0xFF, 0xFB, 0xF0),
        new PaletteEntry(0xA0, 0xA0, 0xA4),
        new PaletteEntry(0x80, 0x80, 0x80),
        new PaletteEntry(0xFF, 0x00, 0x00),
        new PaletteEntry(0x00, 0xFF, 0x00),
        new PaletteEntry(0xFF, 0xFF, 0x00),
        new PaletteEntry(0x00, 0x00, 0xFF),
        new PaletteEntry(0xFF, 0x00, 0xFF),
        new PaletteEntry(0x00, 0xFF, 0xFF),
        new PaletteEntry(0xFF, 0xFF, 0xFF),
    ],
};

websafeColors = {
    name: 'websafeColors',
    clrs: [
        new PaletteEntry(0, 0, 0), // 	black
        new PaletteEntry(0, 0, 51), // 	 
        new PaletteEntry(0, 0, 102), // 	 
        new PaletteEntry(0, 0, 153), // 	 
        new PaletteEntry(0, 0, 204), // 	 
        new PaletteEntry(0, 0, 255), // 	blue
        new PaletteEntry(0, 51, 0), // 	 
        new PaletteEntry(0, 51, 51), // 	 
        new PaletteEntry(0, 51, 102), // 	 
        new PaletteEntry(0, 51, 153), // 	 
        new PaletteEntry(0, 51, 204), // 	 
        new PaletteEntry(0, 51, 255), // 	 
        new PaletteEntry(0, 102, 0), // 	 
        new PaletteEntry(0, 102, 51), // 	 
        new PaletteEntry(0, 102, 102), // 	 
        new PaletteEntry(0, 102, 153), // 	 
        new PaletteEntry(0, 102, 204), // 	 
        new PaletteEntry(0, 102, 255), // 	 
        new PaletteEntry(0, 153, 0), // 	 
        new PaletteEntry(0, 153, 51), // 	 
        new PaletteEntry(0, 153, 102), // 	 
        new PaletteEntry(0, 153, 153), // 	 
        new PaletteEntry(0, 153, 204), // 	 
        new PaletteEntry(0, 153, 255), // 	 
        new PaletteEntry(0, 204, 0), // 	 
        new PaletteEntry(0, 204, 51), // 	 
        new PaletteEntry(0, 204, 102), // 	 
        new PaletteEntry(0, 204, 153), // 	 
        new PaletteEntry(0, 204, 204), // 	 
        new PaletteEntry(0, 204, 255), // 	 
        new PaletteEntry(0, 255, 0), // 	lime
        new PaletteEntry(0, 255, 51), // 	 
        new PaletteEntry(0, 255, 102), // 	 
        new PaletteEntry(0, 255, 153), // 	 
        new PaletteEntry(0, 255, 204), // 	 
        new PaletteEntry(0, 255, 255), // 	cyan / aqua
        new PaletteEntry(51, 0, 0), // 	 
        new PaletteEntry(51, 0, 51), // 	 
        new PaletteEntry(51, 0, 102), // 	 
        new PaletteEntry(51, 0, 153), // 	 
        new PaletteEntry(51, 0, 204), // 	 
        new PaletteEntry(51, 0, 255), // 	 
        new PaletteEntry(51, 51, 0), // 	 
        new PaletteEntry(51, 51, 51), // 	 
        new PaletteEntry(51, 51, 102), // 	 
        new PaletteEntry(51, 51, 153), // 	 
        new PaletteEntry(51, 51, 204), // 	 
        new PaletteEntry(51, 51, 255), // 	 
        new PaletteEntry(51, 102, 0), // 	 
        new PaletteEntry(51, 102, 51), // 	 
        new PaletteEntry(51, 102, 102), // 	 
        new PaletteEntry(51, 102, 153), // 	 
        new PaletteEntry(51, 102, 204), // 	 
        new PaletteEntry(51, 102, 255), // 	 
        new PaletteEntry(51, 153, 0), // 	 
        new PaletteEntry(51, 153, 51), // 	 
        new PaletteEntry(51, 153, 102), // 	 
        new PaletteEntry(51, 153, 153), // 	 
        new PaletteEntry(51, 153, 204), // 	 
        new PaletteEntry(51, 153, 255), // 	 
        new PaletteEntry(51, 204, 0), // 	 
        new PaletteEntry(51, 204, 51), // 	 
        new PaletteEntry(51, 204, 102), // 	 
        new PaletteEntry(51, 204, 153), // 	 
        new PaletteEntry(51, 204, 204), // 	 
        new PaletteEntry(51, 204, 255), // 	 
        new PaletteEntry(51, 255, 0), // 	 
        new PaletteEntry(51, 255, 51), // 	 
        new PaletteEntry(51, 255, 102), // 	 
        new PaletteEntry(51, 255, 153), // 	 
        new PaletteEntry(51, 255, 204), // 	 
        new PaletteEntry(51, 255, 255), // 	 
        new PaletteEntry(102, 0, 0), // 	 
        new PaletteEntry(102, 0, 51), // 	 
        new PaletteEntry(102, 0, 102), // 	 
        new PaletteEntry(102, 0, 153), // 	 
        new PaletteEntry(102, 0, 204), // 	 
        new PaletteEntry(102, 0, 255), // 	 
        new PaletteEntry(102, 51, 0), // 	 
        new PaletteEntry(102, 51, 51), // 	 
        new PaletteEntry(102, 51, 102), // 	 
        new PaletteEntry(102, 51, 153), // 	 
        new PaletteEntry(102, 51, 204), // 	 
        new PaletteEntry(102, 51, 255), // 	 
        new PaletteEntry(102, 102, 0), // 	 
        new PaletteEntry(102, 102, 51), // 	 
        new PaletteEntry(102, 102, 102), // 	 
        new PaletteEntry(102, 102, 153), // 	 
        new PaletteEntry(102, 102, 204), // 	 
        new PaletteEntry(102, 102, 255), // 	 
        new PaletteEntry(102, 153, 0), // 	 
        new PaletteEntry(102, 153, 51), // 	 
        new PaletteEntry(102, 153, 102), // 	 
        new PaletteEntry(102, 153, 153), // 	 
        new PaletteEntry(102, 153, 204), // 	 
        new PaletteEntry(102, 153, 255), // 	 
        new PaletteEntry(102, 204, 0), // 	 
        new PaletteEntry(102, 204, 51), // 	 
        new PaletteEntry(102, 204, 102), // 	 
        new PaletteEntry(102, 204, 153), // 	 
        new PaletteEntry(102, 204, 204), // 	 
        new PaletteEntry(102, 204, 255), // 	 
        new PaletteEntry(102, 255, 0), // 	 
        new PaletteEntry(102, 255, 51), // 	 
        new PaletteEntry(102, 255, 102), // 	 
        new PaletteEntry(102, 255, 153), // 	 
        new PaletteEntry(102, 255, 204), // 	 
        new PaletteEntry(102, 255, 255), // 	 
        new PaletteEntry(153, 0, 0), // 	 
        new PaletteEntry(153, 0, 51), // 	 
        new PaletteEntry(153, 0, 102), // 	 
        new PaletteEntry(153, 0, 153), // 	 
        new PaletteEntry(153, 0, 204), // 	 
        new PaletteEntry(153, 0, 255), // 	 
        new PaletteEntry(153, 51, 0), // 	 
        new PaletteEntry(153, 51, 51), // 	 
        new PaletteEntry(153, 51, 102), // 	 
        new PaletteEntry(153, 51, 153), // 	 
        new PaletteEntry(153, 51, 204), // 	 
        new PaletteEntry(153, 51, 255), // 	 
        new PaletteEntry(153, 102, 0), // 	 
        new PaletteEntry(153, 102, 51), // 	 
        new PaletteEntry(153, 102, 102), // 	 
        new PaletteEntry(153, 102, 153), // 	 
        new PaletteEntry(153, 102, 204), // 	 
        new PaletteEntry(153, 102, 255), // 	 
        new PaletteEntry(153, 153, 0), // 	 
        new PaletteEntry(153, 153, 51), // 	 
        new PaletteEntry(153, 153, 102), // 	 
        new PaletteEntry(153, 153, 153), // 	 
        new PaletteEntry(153, 153, 204), // 	 
        new PaletteEntry(153, 153, 255), // 	 
        new PaletteEntry(153, 204, 0), // 	 
        new PaletteEntry(153, 204, 51), // 	 
        new PaletteEntry(153, 204, 102), // 	 
        new PaletteEntry(153, 204, 153), // 	 
        new PaletteEntry(153, 204, 204), // 	 
        new PaletteEntry(153, 204, 255), // 	 
        new PaletteEntry(153, 255, 0), // 	 
        new PaletteEntry(153, 255, 51), // 	 
        new PaletteEntry(153, 255, 102), // 	 
        new PaletteEntry(153, 255, 153), // 	 
        new PaletteEntry(153, 255, 204), // 	 
        new PaletteEntry(153, 255, 255), // 	 
        new PaletteEntry(204, 0, 0), // 	 
        new PaletteEntry(204, 0, 51), // 	 
        new PaletteEntry(204, 0, 102), // 	 
        new PaletteEntry(204, 0, 153), // 	 
        new PaletteEntry(204, 0, 204), // 	 
        new PaletteEntry(204, 0, 255), // 	 
        new PaletteEntry(204, 51, 0), // 	 
        new PaletteEntry(204, 51, 51), // 	 
        new PaletteEntry(204, 51, 102), // 	 
        new PaletteEntry(204, 51, 153), // 	 
        new PaletteEntry(204, 51, 204), // 	 
        new PaletteEntry(204, 51, 255), // 	 
        new PaletteEntry(204, 102, 0), // 	 
        new PaletteEntry(204, 102, 51), // 	 
        new PaletteEntry(204, 102, 102), // 	 
        new PaletteEntry(204, 102, 153), // 	 
        new PaletteEntry(204, 102, 204), // 	 
        new PaletteEntry(204, 102, 255), // 	 
        new PaletteEntry(204, 153, 0), // 	 
        new PaletteEntry(204, 153, 51), // 	 
        new PaletteEntry(204, 153, 102), // 	 
        new PaletteEntry(204, 153, 153), // 	 
        new PaletteEntry(204, 153, 204), // 	 
        new PaletteEntry(204, 153, 255), // 	 
        new PaletteEntry(204, 204, 0), // 	 
        new PaletteEntry(204, 204, 51), // 	 
        new PaletteEntry(204, 204, 102), // 	 
        new PaletteEntry(204, 204, 153), // 	 
        new PaletteEntry(204, 204, 204), // 	 
        new PaletteEntry(204, 204, 255), // 	 
        new PaletteEntry(204, 255, 0), // 	 
        new PaletteEntry(204, 255, 51), // 	 
        new PaletteEntry(204, 255, 102), // 	 
        new PaletteEntry(204, 255, 153), // 	 
        new PaletteEntry(204, 255, 204), // 	 
        new PaletteEntry(204, 255, 255), // 	 
        new PaletteEntry(255, 0, 0), // 	red
        new PaletteEntry(255, 0, 51), // 	 
        new PaletteEntry(255, 0, 102), // 	 
        new PaletteEntry(255, 0, 153), // 	 
        new PaletteEntry(255, 0, 204), // 	 
        new PaletteEntry(255, 0, 255), // 	fuchsia / magenta
        new PaletteEntry(255, 51, 0), // 	 
        new PaletteEntry(255, 51, 51), // 	 
        new PaletteEntry(255, 51, 102), // 	 
        new PaletteEntry(255, 51, 153), // 	 
        new PaletteEntry(255, 51, 204), // 	 
        new PaletteEntry(255, 51, 255), // 	 
        new PaletteEntry(255, 102, 0), // 	 
        new PaletteEntry(255, 102, 51), // 	 
        new PaletteEntry(255, 102, 102), // 	 
        new PaletteEntry(255, 102, 153), // 	 
        new PaletteEntry(255, 102, 204), // 	 
        new PaletteEntry(255, 102, 255), // 	 
        new PaletteEntry(255, 153, 0), // 	 
        new PaletteEntry(255, 153, 51), // 	 
        new PaletteEntry(255, 153, 102), // 	 
        new PaletteEntry(255, 153, 153), // 	 
        new PaletteEntry(255, 153, 204), // 	 
        new PaletteEntry(255, 153, 255), // 	 
        new PaletteEntry(255, 204, 0), // 	 
        new PaletteEntry(255, 204, 51), // 	 
        new PaletteEntry(255, 204, 102), // 	 
        new PaletteEntry(255, 204, 153), // 	 
        new PaletteEntry(255, 204, 204), // 	 
        new PaletteEntry(255, 204, 255), // 	 
        new PaletteEntry(255, 255, 0), // 	yellow
        new PaletteEntry(255, 255, 51), // 	 
        new PaletteEntry(255, 255, 102), // 	 
        new PaletteEntry(255, 255, 153), // 	 
        new PaletteEntry(255, 255, 204), // 	 
        new PaletteEntry(255, 255, 255), // 	white
    ]
};

macSystemPalette = {
    name: 'macSystemPalette',
    clrs: [
        new PaletteEntry(0xff, 0xff, 0xff),
        new PaletteEntry(0xff, 0xff, 0xcc),
        new PaletteEntry(0xff, 0xff, 0x99),
        new PaletteEntry(0xff, 0xff, 0x66),
        new PaletteEntry(0xff, 0xff, 0x33),
        new PaletteEntry(0xff, 0xff, 0x00),
        new PaletteEntry(0xff, 0xcc, 0xff),
        new PaletteEntry(0xff, 0xcc, 0xcc),
        new PaletteEntry(0xff, 0xcc, 0x99),
        new PaletteEntry(0xff, 0xcc, 0x66),
        new PaletteEntry(0xff, 0xcc, 0x33),
        new PaletteEntry(0xff, 0xcc, 0x00),
        new PaletteEntry(0xff, 0x99, 0xff),
        new PaletteEntry(0xff, 0x99, 0xcc),
        new PaletteEntry(0xff, 0x99, 0x99),
        new PaletteEntry(0xff, 0x99, 0x66),
        new PaletteEntry(0xff, 0x99, 0x33),
        new PaletteEntry(0xff, 0x99, 0x00),
        new PaletteEntry(0xff, 0x66, 0xff),
        new PaletteEntry(0xff, 0x66, 0xcc),
        new PaletteEntry(0xff, 0x66, 0x99),
        new PaletteEntry(0xff, 0x66, 0x66),
        new PaletteEntry(0xff, 0x66, 0x33),
        new PaletteEntry(0xff, 0x66, 0x00),
        new PaletteEntry(0xff, 0x33, 0xff),
        new PaletteEntry(0xff, 0x33, 0xcc),
        new PaletteEntry(0xff, 0x33, 0x99),
        new PaletteEntry(0xff, 0x33, 0x66),
        new PaletteEntry(0xff, 0x33, 0x33),
        new PaletteEntry(0xff, 0x33, 0x00),
        new PaletteEntry(0xff, 0x00, 0xff),
        new PaletteEntry(0xff, 0x00, 0xcc),
        new PaletteEntry(0xff, 0x00, 0x99),
        new PaletteEntry(0xff, 0x00, 0x66),
        new PaletteEntry(0xff, 0x00, 0x33),
        new PaletteEntry(0xff, 0x00, 0x00),
        new PaletteEntry(0xcc, 0xff, 0xff),
        new PaletteEntry(0xcc, 0xff, 0xcc),
        new PaletteEntry(0xcc, 0xff, 0x99),
        new PaletteEntry(0xcc, 0xff, 0x66),
        new PaletteEntry(0xcc, 0xff, 0x33),
        new PaletteEntry(0xcc, 0xff, 0x00),
        new PaletteEntry(0xcc, 0xcc, 0xff),
        new PaletteEntry(0xcc, 0xcc, 0xcc),
        new PaletteEntry(0xcc, 0xcc, 0x99),
        new PaletteEntry(0xcc, 0xcc, 0x66),
        new PaletteEntry(0xcc, 0xcc, 0x33),
        new PaletteEntry(0xcc, 0xcc, 0x00),
        new PaletteEntry(0xcc, 0x99, 0xff),
        new PaletteEntry(0xcc, 0x99, 0xcc),
        new PaletteEntry(0xcc, 0x99, 0x99),
        new PaletteEntry(0xcc, 0x99, 0x66),
        new PaletteEntry(0xcc, 0x99, 0x33),
        new PaletteEntry(0xcc, 0x99, 0x00),
        new PaletteEntry(0xcc, 0x66, 0xff),
        new PaletteEntry(0xcc, 0x66, 0xcc),
        new PaletteEntry(0xcc, 0x66, 0x99),
        new PaletteEntry(0xcc, 0x66, 0x66),
        new PaletteEntry(0xcc, 0x66, 0x33),
        new PaletteEntry(0xcc, 0x66, 0x00),
        new PaletteEntry(0xcc, 0x33, 0xff),
        new PaletteEntry(0xcc, 0x33, 0xcc),
        new PaletteEntry(0xcc, 0x33, 0x99),
        new PaletteEntry(0xcc, 0x33, 0x66),
        new PaletteEntry(0xcc, 0x33, 0x33),
        new PaletteEntry(0xcc, 0x33, 0x00),
        new PaletteEntry(0xcc, 0x00, 0xff),
        new PaletteEntry(0xcc, 0x00, 0xcc),
        new PaletteEntry(0xcc, 0x00, 0x99),
        new PaletteEntry(0xcc, 0x00, 0x66),
        new PaletteEntry(0xcc, 0x00, 0x33),
        new PaletteEntry(0xcc, 0x00, 0x00),
        new PaletteEntry(0x99, 0xff, 0xff),
        new PaletteEntry(0x99, 0xff, 0xcc),
        new PaletteEntry(0x99, 0xff, 0x99),
        new PaletteEntry(0x99, 0xff, 0x66),
        new PaletteEntry(0x99, 0xff, 0x33),
        new PaletteEntry(0x99, 0xff, 0x00),
        new PaletteEntry(0x99, 0xcc, 0xff),
        new PaletteEntry(0x99, 0xcc, 0xcc),
        new PaletteEntry(0x99, 0xcc, 0x99),
        new PaletteEntry(0x99, 0xcc, 0x66),
        new PaletteEntry(0x99, 0xcc, 0x33),
        new PaletteEntry(0x99, 0xcc, 0x00),
        new PaletteEntry(0x99, 0x99, 0xff),
        new PaletteEntry(0x99, 0x99, 0xcc),
        new PaletteEntry(0x99, 0x99, 0x99),
        new PaletteEntry(0x99, 0x99, 0x66),
        new PaletteEntry(0x99, 0x99, 0x33),
        new PaletteEntry(0x99, 0x99, 0x00),
        new PaletteEntry(0x99, 0x66, 0xff),
        new PaletteEntry(0x99, 0x66, 0xcc),
        new PaletteEntry(0x99, 0x66, 0x99),
        new PaletteEntry(0x99, 0x66, 0x66),
        new PaletteEntry(0x99, 0x66, 0x33),
        new PaletteEntry(0x99, 0x66, 0x00),
        new PaletteEntry(0x99, 0x33, 0xff),
        new PaletteEntry(0x99, 0x33, 0xcc),
        new PaletteEntry(0x99, 0x33, 0x99),
        new PaletteEntry(0x99, 0x33, 0x66),
        new PaletteEntry(0x99, 0x33, 0x33),
        new PaletteEntry(0x99, 0x33, 0x00),
        new PaletteEntry(0x99, 0x00, 0xff),
        new PaletteEntry(0x99, 0x00, 0xcc),
        new PaletteEntry(0x99, 0x00, 0x99),
        new PaletteEntry(0x99, 0x00, 0x66),
        new PaletteEntry(0x99, 0x00, 0x33),
        new PaletteEntry(0x99, 0x00, 0x00),
        new PaletteEntry(0x66, 0xff, 0xff),
        new PaletteEntry(0x66, 0xff, 0xcc),
        new PaletteEntry(0x66, 0xff, 0x99),
        new PaletteEntry(0x66, 0xff, 0x66),
        new PaletteEntry(0x66, 0xff, 0x33),
        new PaletteEntry(0x66, 0xff, 0x00),
        new PaletteEntry(0x66, 0xcc, 0xff),
        new PaletteEntry(0x66, 0xcc, 0xcc),
        new PaletteEntry(0x66, 0xcc, 0x99),
        new PaletteEntry(0x66, 0xcc, 0x66),
        new PaletteEntry(0x66, 0xcc, 0x33),
        new PaletteEntry(0x66, 0xcc, 0x00),
        new PaletteEntry(0x66, 0x99, 0xff),
        new PaletteEntry(0x66, 0x99, 0xcc),
        new PaletteEntry(0x66, 0x99, 0x99),
        new PaletteEntry(0x66, 0x99, 0x66),
        new PaletteEntry(0x66, 0x99, 0x33),
        new PaletteEntry(0x66, 0x99, 0x00),
        new PaletteEntry(0x66, 0x66, 0xff),
        new PaletteEntry(0x66, 0x66, 0xcc),
        new PaletteEntry(0x66, 0x66, 0x99),
        new PaletteEntry(0x66, 0x66, 0x66),
        new PaletteEntry(0x66, 0x66, 0x33),
        new PaletteEntry(0x66, 0x66, 0x00),
        new PaletteEntry(0x66, 0x33, 0xff),
        new PaletteEntry(0x66, 0x33, 0xcc),
        new PaletteEntry(0x66, 0x33, 0x99),
        new PaletteEntry(0x66, 0x33, 0x66),
        new PaletteEntry(0x66, 0x33, 0x33),
        new PaletteEntry(0x66, 0x33, 0x00),
        new PaletteEntry(0x66, 0x00, 0xff),
        new PaletteEntry(0x66, 0x00, 0xcc),
        new PaletteEntry(0x66, 0x00, 0x99),
        new PaletteEntry(0x66, 0x00, 0x66),
        new PaletteEntry(0x66, 0x00, 0x33),
        new PaletteEntry(0x66, 0x00, 0x00),
        new PaletteEntry(0x33, 0xff, 0xff),
        new PaletteEntry(0x33, 0xff, 0xcc),
        new PaletteEntry(0x33, 0xff, 0x99),
        new PaletteEntry(0x33, 0xff, 0x66),
        new PaletteEntry(0x33, 0xff, 0x33),
        new PaletteEntry(0x33, 0xff, 0x00),
        new PaletteEntry(0x33, 0xcc, 0xff),
        new PaletteEntry(0x33, 0xcc, 0xcc),
        new PaletteEntry(0x33, 0xcc, 0x99),
        new PaletteEntry(0x33, 0xcc, 0x66),
        new PaletteEntry(0x33, 0xcc, 0x33),
        new PaletteEntry(0x33, 0xcc, 0x00),
        new PaletteEntry(0x33, 0x99, 0xff),
        new PaletteEntry(0x33, 0x99, 0xcc),
        new PaletteEntry(0x33, 0x99, 0x99),
        new PaletteEntry(0x33, 0x99, 0x66),
        new PaletteEntry(0x33, 0x99, 0x33),
        new PaletteEntry(0x33, 0x99, 0x00),
        new PaletteEntry(0x33, 0x66, 0xff),
        new PaletteEntry(0x33, 0x66, 0xcc),
        new PaletteEntry(0x33, 0x66, 0x99),
        new PaletteEntry(0x33, 0x66, 0x66),
        new PaletteEntry(0x33, 0x66, 0x33),
        new PaletteEntry(0x33, 0x66, 0x00),
        new PaletteEntry(0x33, 0x33, 0xff),
        new PaletteEntry(0x33, 0x33, 0xcc),
        new PaletteEntry(0x33, 0x33, 0x99),
        new PaletteEntry(0x33, 0x33, 0x66),
        new PaletteEntry(0x33, 0x33, 0x33),
        new PaletteEntry(0x33, 0x33, 0x00),
        new PaletteEntry(0x33, 0x00, 0xff),
        new PaletteEntry(0x33, 0x00, 0xcc),
        new PaletteEntry(0x33, 0x00, 0x99),
        new PaletteEntry(0x33, 0x00, 0x66),
        new PaletteEntry(0x33, 0x00, 0x33),
        new PaletteEntry(0x33, 0x00, 0x00),
        new PaletteEntry(0x00, 0xff, 0xff),
        new PaletteEntry(0x00, 0xff, 0xcc),
        new PaletteEntry(0x00, 0xff, 0x99),
        new PaletteEntry(0x00, 0xff, 0x66),
        new PaletteEntry(0x00, 0xff, 0x33),
        new PaletteEntry(0x00, 0xff, 0x00),
        new PaletteEntry(0x00, 0xcc, 0xff),
        new PaletteEntry(0x00, 0xcc, 0xcc),
        new PaletteEntry(0x00, 0xcc, 0x99),
        new PaletteEntry(0x00, 0xcc, 0x66),
        new PaletteEntry(0x00, 0xcc, 0x33),
        new PaletteEntry(0x00, 0xcc, 0x00),
        new PaletteEntry(0x00, 0x99, 0xff),
        new PaletteEntry(0x00, 0x99, 0xcc),
        new PaletteEntry(0x00, 0x99, 0x99),
        new PaletteEntry(0x00, 0x99, 0x66),
        new PaletteEntry(0x00, 0x99, 0x33),
        new PaletteEntry(0x00, 0x99, 0x00),
        new PaletteEntry(0x00, 0x66, 0xff),
        new PaletteEntry(0x00, 0x66, 0xcc),
        new PaletteEntry(0x00, 0x66, 0x99),
        new PaletteEntry(0x00, 0x66, 0x66),
        new PaletteEntry(0x00, 0x66, 0x33),
        new PaletteEntry(0x00, 0x66, 0x00),
        new PaletteEntry(0x00, 0x33, 0xff),
        new PaletteEntry(0x00, 0x33, 0xcc),
        new PaletteEntry(0x00, 0x33, 0x99),
        new PaletteEntry(0x00, 0x33, 0x66),
        new PaletteEntry(0x00, 0x33, 0x33),
        new PaletteEntry(0x00, 0x33, 0x00),
        new PaletteEntry(0x00, 0x00, 0xff),
        new PaletteEntry(0x00, 0x00, 0xcc),
        new PaletteEntry(0x00, 0x00, 0x99),
        new PaletteEntry(0x00, 0x00, 0x66),
        new PaletteEntry(0x00, 0x00, 0x33),
        new PaletteEntry(0xee, 0x00, 0x00),
        new PaletteEntry(0xdd, 0x00, 0x00),
        new PaletteEntry(0xbb, 0x00, 0x00),
        new PaletteEntry(0xaa, 0x00, 0x00),
        new PaletteEntry(0x88, 0x00, 0x00),
        new PaletteEntry(0x77, 0x00, 0x00),
        new PaletteEntry(0x55, 0x00, 0x00),
        new PaletteEntry(0x44, 0x00, 0x00),
        new PaletteEntry(0x22, 0x00, 0x00),
        new PaletteEntry(0x11, 0x00, 0x00),
        new PaletteEntry(0x00, 0xee, 0x00),
        new PaletteEntry(0x00, 0xdd, 0x00),
        new PaletteEntry(0x00, 0xbb, 0x00),
        new PaletteEntry(0x00, 0xaa, 0x00),
        new PaletteEntry(0x00, 0x88, 0x00),
        new PaletteEntry(0x00, 0x77, 0x00),
        new PaletteEntry(0x00, 0x55, 0x00),
        new PaletteEntry(0x00, 0x44, 0x00),
        new PaletteEntry(0x00, 0x22, 0x00),
        new PaletteEntry(0x00, 0x11, 0x00),
        new PaletteEntry(0x00, 0x00, 0xee),
        new PaletteEntry(0x00, 0x00, 0xdd),
        new PaletteEntry(0x00, 0x00, 0xbb),
        new PaletteEntry(0x00, 0x00, 0xaa),
        new PaletteEntry(0x00, 0x00, 0x88),
        new PaletteEntry(0x00, 0x00, 0x77),
        new PaletteEntry(0x00, 0x00, 0x55),
        new PaletteEntry(0x00, 0x00, 0x44),
        new PaletteEntry(0x00, 0x00, 0x22),
        new PaletteEntry(0x00, 0x00, 0x11),
        new PaletteEntry(0xee, 0xee, 0xee),
        new PaletteEntry(0xdd, 0xdd, 0xdd),
        new PaletteEntry(0xbb, 0xbb, 0xbb),
        new PaletteEntry(0xaa, 0xaa, 0xaa),
        new PaletteEntry(0x88, 0x88, 0x88),
        new PaletteEntry(0x77, 0x77, 0x77),
        new PaletteEntry(0x55, 0x55, 0x55),
        new PaletteEntry(0x44, 0x44, 0x44),
        new PaletteEntry(0x22, 0x22, 0x22),
        new PaletteEntry(0x11, 0x11, 0x11),
        new PaletteEntry(0x00, 0x00, 0x00),
    ],
};

/*
auto getMac256Colors()
{
	std::vector<PALETTEENTRY> clrs;
	// [0,215)
	uint32_t x = 0;
	for (; x < 215; ++x)
	{
		// Component-based colors, with RGB values in the range 0...5,
		// stored in reverse order (i.e. color #0 is white, (1.0, 1.0, 1.0)).
		// Note that x == 215 would normally produce black, (0.0, 0.0, 0.0),
		// but the palette deliberately puts that at the end.
		auto red = double(5 - (x / 36)) / 5.0 * 255;
		auto green = double(5 - (x / 6 % 6)) / 5.0 * 255;
		auto blue = double(5 - (x % 6)) / 5.0 * 255;
		clrs.emplace_back(PALETTEENTRY{ (uint8_t)red, (uint8_t)green , (uint8_t)blue, 0 });
	}

	for (; x < 255; ++x)
	{
		// Extra shades of "primary" colors: red, green, blue, and grey.
		// 215, 224 : 0 red spread.
		// 225, 234 : 1 green spread.
		// 235, 244 : 2 blue spread
		// 245, 254 : gray spread.
		const uint8_t values[] = { 0xee, 0xdd, 0xbb, 0xaa, 0x88, 0x77, 0x55, 0x44, 0x22, 0x11 };
		int idx = (x - 215) % 10;
		int row = (x - 215) / 10;
		switch (row) {
		case 0:
			clrs.emplace_back(PALETTEENTRY{ values[idx] , 0, 0, 0 });
			break;
		case 1:
			clrs.emplace_back(PALETTEENTRY{ 0, values[idx] , 0, 0 });
			break;
		case 2:
			clrs.emplace_back(PALETTEENTRY{ 0, 0, values[idx], 0 });
			break;
		case 3:
			clrs.emplace_back(PALETTEENTRY{ values[idx], values[idx], values[idx], 0 });
			break;
		default:
			assert(false);
			break;
		}
	}

	clrs.emplace_back(PALETTEENTRY{ 0, 0, 0 });
	return clrs;
}
*/


// https://www.w3schools.com/jsref/event_onchange.asp
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
function on_palette_type(obj) {
    palette = null;
    switch (obj.value) {
        case 'win32SystemPalette':
            palette = win32SystemPalette;
            break;
        case 'websafeColors':
            palette = websafeColors;
            break;
        case 'macSystemPalette':
            palette = macSystemPalette;
            break;
    }
    drawPalette(10, 10, 32, 32, palette);
}


// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
function drawPalette(initx, y, width, height, colors) {
    if (!ctx) return;

    // clear old stuf
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (!colors) return;

    ctx.font = "20px malgun gothic"; //폰트의 크기, 글꼴체 지정      
    ctx.fillStyle = "rgba(0,0,0,1)"; //색상지정
    ctx.fillText(`${colors.name}, cnt=${colors.clrs.length}`, initx, y + 10);

    y += 25;
    initx += 25;

    x = initx;
    i = 0;
    for (c of colors.clrs) {
        //console.log(`r=${c.red}, g=${c.green}, b=${c.blue}, `);
        ctx.fillStyle = `rgb(${c.red}, ${c.green}, ${c.blue})`;
        ctx.fillRect(x, y, 30, 30);
        x += 32;
        if ((++i % 16) == 0) {
            x = initx;
            y += 32;
        }
    }
}

// initial action.
function resize() {
    if (!canvas) return;
    let parent = canvas.parentElement;
    canvas.width = parent.clientWidth;
    canvas.height = parent.clientHeight;
    on_palette_type( document.querySelector('#palette_type') );
}
window.addEventListener('load', resize);
window.addEventListener("resize", resize, false);