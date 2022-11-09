// Your JS goes here
for(let i = 1; i <= 8; i++){

  if (i % 2 === 0){//even rows
    for (let j = 1; j <= 8; j++){
      if (j % 2 === 1){
        const div = document.createElement('div');
        document.body.append(div);
        div.style.width = "12.5%";
        div.style.float = "left";
        div.style.paddingBottom = "12.5%";
        div.style.background = "black";
        // div.style.borderBottom = "1px solid blue";
      } else{
        const div = document.createElement('div');
        document.body.append(div);
        div.style.width = "12.5%";
        div.style.float = "left";
        div.style.paddingBottom = "12.5%";
        div.style.background = "red";
        // div.style.borderBottom = "1px solid blue";
      }
    }
  } else{
      for (let j = 1; j <= 8; j++){
      if (j % 2 === 1){ //odd rows
        const div = document.createElement('div');
        document.body.append(div);
        div.style.width = "12.5%";
        div.style.float = "left";
        div.style.paddingBottom = "12.5%";
        div.style.background = "red";
        // div.style.borderBottom = "1px solid blue";
        } else{
        const div = document.createElement('div');
        document.body.append(div);
        div.style.width = "12.5%";
        div.style.float = "left";
        div.style.paddingBottom = "12.5%";
        div.style.background = "black";
        // div.style.borderBottom = "1px solid blue";
      }
    }
  }
}