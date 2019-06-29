function area (altura, largura) {
    const area = altura * largura;
    if (area > 20) {
        console.log(`Acima do valor permitido ${area}m`);
    }
    return area; 
}

console.log(area(2));
console.log(area());
console.log(area(2, 3));
console.log(area(5, 5));

function doNothing() {
    return;
}

console.log (doNothing() === undefined);