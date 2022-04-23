console.group('cuadrado')

const ladoCuadrado = 2
console.log('cuanto mide mi lado cuadrado: ' + ladoCuadrado + ' cm')

const perimetroCuadrado = ladoCuadrado * 4
console.log('Preimetro cuadrado: ' + perimetroCuadrado + ' cm')

const areaCuadrado = ladoCuadrado * ladoCuadrado
console.log('Area cuadrado: ' + areaCuadrado + ' cm^2')

console.groupEnd()



console.group('triangule')

const ladoTriangulo1 = 2
const ladoTriangulo2 = 2
const baseTriangulo = 2
const alturaTriangulo = 5.5

console.log('lados del triangulo: ' + ladoTriangulo1 + 'cm ' + ladoTriangulo2 + 'cm ' + baseTriangulo + 'cm')

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
console.log('perimetro triangulo: ' + perimetroTriangulo + ' cm')

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2
console.log('area triangulo: ' + areaCuadrado + ' cm^2')

console.groupEnd()



console.group('circulo')

const radioCirculo = 2
const PI = Math.PI
console.log('Radio de circulo: ' + radioCirculo + 'cm')

const diametroCirculo = radioCirculo * 2
console.log('diametro circulo: ' + diametroCirculo + ' cm')

const perimetroCirculo = diametroCirculo * PI
console.log('Perimetro circulo: ' + perimetroCirculo + ' cm')

const areaCirculo = (radioCirculo * radioCirculo) * PI
console.log('Area circulo: ' + areaCirculo + ' cm^2')

console.groupEnd()