// В алгоритме предусмотрена мутация исходного массива данных. 
// Для корректного отслеживания, что корабли все зафиксированы.
// Если необходимо это избежать, можно сделать полную копию исходного массива.

let field = [
  [1, 1, 0, 1, 0, 0, 1, 1, 1, 1],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
];

function countShips(field) { 
  let count = 0;
  let shipDir = null;
  for (let i in field) {
    for (let j in field[i]) {
      if (field[i][j]) {        
        count++;
        shipDir = checkShip(i, j, field);        
        if (!shipDir) {          
          field[i][j] = 0;
        } else {          
          seekShip(shipDir, i, j, field);
          shipDir = null;
        }        
      }
    }
  }
  return count;
}

// Проверка, что корабль многопалубный
function checkShip(i, j, field) {
  let result = null;
  if (field[+i-1] && field[+i-1][j]) {
    result = 'idec';    
  } 
  if (field[i][+j+1]) {
    result = 'jinc';
  } 
  if (field[+i+1] && field[+i+1][j]) {
    result = 'iinc';
  } 
  if (field[i][+j-1]) {
    result = 'jdec';
  }    
  return result;
}

// Поиск и очистка корабля
function seekShip(direction, i, j, field) { 
  while (field[i][j]) {
    switch (direction) {
      case 'idec':
        field[i][j] = 0;
        i = +i-1;        
        break;                      
      case 'jinc':        
        field[i][j] = 0;
        j = +j+1;
        break;                       
      case 'iinc':
        field[i][j] = 0;
        i = +i+1;        
        break;               
      case 'jdec':
        field[i][j] = 0;
        j = +j-1;        
        break;
    }   
  }
}

console.log(countShips(field));



