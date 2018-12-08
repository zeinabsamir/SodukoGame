window.onload = function() {
  inputArray = document.getElementsByClassName("table")[0].getElementsByTagName('input');
  var images = ['images/happy.png','images/sad.png'];
  // function focusInput() {
  //     var j = 0;
  //     while(j<16) {
  //         if(inputArray[j].value == "") {
  //             currentCell = inputArray[j];
  //             break;
  //         }
  //     }
  //     currentCell.focus();
  // }
  //     focusInput();

  //Creat random number

  function randomNumber() {
    var count = 0;
    array = [];
    while (count < 4) {
      var rand = Math.ceil(Math.random() * 10);
      if (array.indexOf(rand) == -1 && rand <= 4) {
        array.push(rand);
        count++;
      }
    }

    var i = 0;
    arrayInput = [];
    while (i < 4) {
      var random = Math.ceil(Math.random() * 10);
      if (arrayInput.indexOf(random) == -1 && rand < 16) {
        arrayInput.push(random);
        i++;
      }
    }
    for (i = 0; i < array.length; i++) {
      inputArray[arrayInput[i]].value = array[i];
      inputArray[arrayInput[i]].setAttribute("readonly", "true");
    }
  }

  document.getElementsByTagName("body")[0].onclick = function(e) {
    inputArray[0].focus();
    e.preventDefault();

  };

  randomNumber();

  for (i = 0; i < inputArray.length; i++) {
    inputArray[i].addEventListener("keypress", function(evt) {
      if (evt.which < 48 || evt.which > 57 || evt.key > 4 || evt.key < 1  ) {
        console.log(evt);
        evt.preventDefault();
      }
     
    });
  }

  for (var j = 0; j < inputArray.length; j++) {
    inputArray[j].addEventListener("keypress", function(evt) {
      if (this.value.length > 0 ) {
        console.log(evt);
        evt.preventDefault();
      }
     
    });
  }

  currentRow = 0;
  currentCell = 0;

  function ChangeCurrentCell() {
    tableRow = document.getElementsByTagName("tr")[currentRow];
    tableCell = tableRow.getElementsByTagName("input")[currentCell];
    tableCell.focus();
  }
  ChangeCurrentCell();
  for (var i = 0; i < inputArray.length; i++) {
    inputArray[i].addEventListener("keydown", function(e) {
      if (e.keyCode == 37) {
        if (currentCell == 0) {
          return false;
        } else {
          currentCell--;
          ChangeCurrentCell();
          // alert( "left pressed " );
          return false;
        }
      }
      if (e.keyCode == 38) {
        if (currentRow == 0) {
          return false;
        } else {
          currentRow--;
          ChangeCurrentCell();
          // alert( "up pressed " );
          return false;
        }
      }
      if (e.keyCode == 39) {
        if (currentCell == 3) {
          return false;
        } else {
          currentCell++;
          ChangeCurrentCell();
          //  alert( "right pressed " );
          return false;
        }
      }
      if (e.keyCode == 40) {
        if (currentRow == 3) {
          return false;
        } else {
          currentRow++;
          ChangeCurrentCell();
          //  alert( "down pressed " );
          return false;
        }
      }
    });
  }
  
  var check="true";
  function test(matrix) {
      
      first:  for(var i = 0;i<matrix.length; i++) {
          var unique=[];
         for(var j=0;j < matrix.length;j++) {
              if(unique.indexOf(matrix[i][j])==-1 && matrix[i][j]!="") {
                  unique.push(matrix[i][j]);
              } else {
                  check="false";
                  break first;
              }
          }
      }

      second:  for(var i = 0;i<matrix.length; i++) {
        var unique=[];
        for(var j=0;j < matrix.length;j++) {
            if(unique.indexOf(matrix[j][i])==-1 && matrix[i][j]!="") {
                unique.push(matrix[j][i]);
            } else {
                check="false";
                break second;
            }
        }
    }

      return check;
  }

  function solvedMatrix() {
    
     var  matrix,
        holder = [],
        i, j, k, z;
    for (i = 0; i < 16; i++) {
      //get the form values
      holder[i] = inputArray[i].value;
      matrix = [];
      k = -1;
      // from 1 dimensional to matrix
      for (j = 0; j < holder.length; j++) {
        if (j % 4 === 0) {
          k++;
          matrix[k] = [];        
        }
        matrix[k].push(holder[j]);
      }
    }
      return matrix;
   } 
 var  z = false;
 function checkComplete(matrix) {
     
first: for (i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[i].length; j++) {      
          if(matrix[i][j] != "") {
             z = true;
          } else {
            z= false;
            break first;
          }
               
        }
      }
      return z;
    }
 
  
 var checktimeing =  setInterval(function(){
    
      var matrix = solvedMatrix(); 
      flag =checkComplete(matrix);
    if(flag) {
      console.log(matrix);
      var check = test(matrix);
      clearInterval(checktimeing); 
        clearTimeout(timeing);
      if(check=="true") {
          showMessage(check);
      } else {
        showMessage(check);
      }
   }
   add();
   if(minutes==1 && seconds==59) {
    clearInterval(checktimeing); 
   }
   if(minutes==1 && seconds==50) {
    
    h1.style.color="red"
    div.style.border = "thick solid red"
}
 },1000); 

  
 


  var timeing =setTimeout(function() {
   matrix = solvedMatrix(); 
   test(matrix); 
   console.log(matrix);
    
   if(check=="true") {
    showMessage(check);
   } else {
    showMessage(check);
   }
  }, 120000);


 var  seconds = 0;
   var  minutes = 0;

  h1 = document.getElementById('time');
  div = document.getElementById('timer');
   function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
      }

     h1.innerText = (minutes > 9 ? minutes : "0" + minutes) + ":" + (seconds > 9 ? seconds : "0" + seconds); 

    }
    function showMessage(check) {
      var div = document.getElementById('message');
      var msg = document.getElementById('msg');
      var img = document.getElementsByTagName('img')[0]
         div.style.display="block";
         if(check=="true") {
             msg.innerText="Congeratulation, you win"
             img.src=images[0];

         } else {
          msg.innerText="Sorry, you lost"
          img.src=images[1];
         }
    }
  var yesButton = document.querySelector('#yesBtn');
  var noButton =  document.querySelector('#noBtn');

  yesButton.addEventListener('click',function(){
    location.reload();
  })

  noButton.addEventListener('click',function(){
     window.close();
  })

};
