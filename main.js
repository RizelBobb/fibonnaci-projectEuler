var firstnum=0;
var secnum=1;
var  next= 1;
var sum = 0;

function fib(){

  while(next<4000000){
  next=firstnum + secnum;
  firstnum=secnum;
  secnum= next;
    if(next%2===0){
      sum+=next

    }
  } console.log(sum)
}

fib()
