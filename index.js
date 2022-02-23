let canvas = document.querySelector('#canvas'),
    startButton = document.querySelector('.start'),
    ctx = canvas.getContext('2d'),
    arr = [],
    n = 40, m = 40, timer 

canvas.addEventListener('click', (event) => {
    let x = event.offsetX,
        y = event.offsetY
        x = Math.floor(x / 10)
        y = Math.floor(y / 10)
        arr[y][x] = 1
        drawField()
})

const createField = () => {
    for ( let i = 0; i < m; i++) {
        arr[i] = []
        for (let j = 0; j < n; j++) {
            arr[i][j] = 0
        }
    }
}
createField()

const drawField = () => {
    ctx.clearRect(0, 0, 400, 400)
    for ( let i = 0; i < 40; i++) {
        for (let j = 0; j < 40; j++) {
            if (arr[i][j] == 1) {
                ctx.fillStyle = "orange";
                ctx.fillRect(j * 10, i * 10, 10, 10)
            }
        }
    }
}

const startLife = () => {
   let arr2 = [] 
   for ( let i = 0; i < 40; i++) {
    arr2[i] = []
    for (let j = 0; j < 40; j++) {
        let neighboringFledgling = 0
        if (arr[fpm(i) - 1][j] == 1) neighboringFledgling++;
			if (arr[i][fpp(j) + 1] == 1) neighboringFledgling++;
			if (arr[fpp(i) + 1][j] == 1) neighboringFledgling++;
			if (arr[i][fpm(j) - 1] == 1) neighboringFledgling++;
			if (arr[fpm(i) - 1][fpp(j) + 1] == 1) neighboringFledgling++;
			if (arr[fpp(i) + 1][fpp(j) + 1] == 1) neighboringFledgling++;
			if (arr[fpp(i) + 1][fpm(j) - 1] == 1) neighboringFledgling++;
			if (arr[fpm(i) - 1][fpm(j) - 1] == 1) neighboringFledgling++;
			(neighboringFledgling == 2 || neighboringFledgling == 3) ? arr2[i][j] = 1 : arr2[i][j] == 0;
       }
    }
    arr = arr2
    drawField()
    timer = setTimeout(startLife, 300)
}

const fpm = (i) =>{
	if( i == 0) return 40;
	else return i;
}

const fpp = (i) => {
	if(i == 39) return -1;
	else return i;
}

startButton.addEventListener('click',  startLife)