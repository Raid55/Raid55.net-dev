function generateGame(h,w,b){
  let gameArr = [];
  for(let i = 0; i < (h * w); i++){
    gameArr.push(0)
  }

  while(b > 0){
    let random = Math.floor(Math.random() * (h * w + 1));
    if(gameArr[random] === "*"){
      continue;
    }else{
      gameArr[random] = "*";
      b--;
    }
  }

  gameArr = gameArr.reduce((accu,el,indx) => {
    if(el === "*"){
      accu.push("*");
      return accu;
    }else{
      let tempNum = el;
      for(let i = 0; i < 8; i++){
        switch(i) {
          case 0:
            if(gameArr[indx - 1] === "*"){
              tempNum++;
            }
            break;
          case 1:
            if(gameArr[indx - (w + 1)] === "*"){
              tempNum++;
            }
            break;
          case 2:
            if(gameArr[indx - w] === "*"){
              tempNum++;
            }
            break;
          case 3:
            if(gameArr[indx - (w - 1)] === "*"){
              tempNum++;
            }
            break;
          case 4:
            if(gameArr[indx + 1] === "*"){
              tempNum++;
            }
            break;
          case 5:
            if(gameArr[indx + (w - 1)] === "*"){
              tempNum++;
            }
            break;
          case 6:
            if(gameArr[indx + w] === "*"){
              tempNum++;
            }
            break;
          case 7:
            if(gameArr[indx + (w + 1)] === "*"){
              tempNum++;
            }
            break;
        }
      }
      accu.push(tempNum);
      return accu;
    }
  },[])

  let pattern = new RegExp("(.{"+w+"})", "g")

  return gameArr.join("").replace(pattern, "1$1\n")
}

console.log(generateGame(16,30,99));
