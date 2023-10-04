const input = "3\n0 0\n0 3\n4 0\n";
//const input = "5\n3.56 17\n-5.1 36.3\n0.0002 -2\n5 5\n5 5\n-9.01 -17.7\n";

//codigo hackerrank
const linhas = input.trim().split("\n")
const n = parseFloat(linhas[0], 10)

const coordenadas = [];
for (let i = 1; i < linhas.length; i++) {
    const coord = linhas[i].split(" ");
    coordenadas.push({
        x: parseFloat(coord[0], 10),
        y: parseFloat(coord[1], 10)
    })
}
let maiorDistancia = 0
for (let i = 0; i < coordenadas.length; i++) {
    for (let j = 0; j < coordenadas.length; j++) {
        let distancia = calcularDistancia(coordenadas[i].x, coordenadas[j].x, coordenadas[i].y, coordenadas[j].y)
        if (distancia > maiorDistancia) {
            maiorDistancia = distancia
        }
    }
}
console.log(maiorDistancia)
function calcularDistancia(x1, x2, y1, y2) {
    return Math.sqrt(((x1 - x2) ** 2) + ((y1 - y2) ** 2))
}




