//callback function example from line no 50..

const animal = new Object;
  animal.name = "golden retiver";
  animal.age = "7 months";
  animal.location = "alaska";

console.log(animal);



// metgod 2

const parent = {
  grandparent  : "P bodra",
  area : "ranchi",
  pincode : "865216",
}
console.log(parent);


//method3

function hotel(waiter1,waiter2){
  this.waiter1 = waiter1;
  this.waiter2 = waiter2;
}

const serve = new hotel(servetea, servecoffee);
console.log(serve);

//method4

const grandparent = {
  name:"shyamlal",
  location:"ranchi",
  area:"westsinghbhum",
  pincode:"835216",
}
const parent = Object.create(grandparent);
  parent.name = "sameer";
  parent.location="bangalore";
  parent.area="ks";
  parent.pincode ="560111";

  const father = Object.create(parent);
  father.name = "rahul";
  father.location="chennai";
  father.area="bennerghata";
  father.pincode ="560781";

  console.log(father.__proto__.area);




// callback function..

  function demo(sameer){
    sameer(28);
  }
  function democallback(bodra){
    bodra(7)
    //console.log("hello", bodra);
  }
  function democallback2(a);
    console.log("hello",a);
  demo(democallback2);

// example 2 call back function

function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  myDisplayer(sum);
}

myCalculator(5, 5);


//



function myFirst() {
  myFirst();
   // console.log("Hello");
 }
 
 function mySecond() {
   console.log("Goodbye");
 }
 
 //myFirst();
 mySecond();
 
 
 
 
 function demo(sameer){
     sameer(28);
   }
   function democallback(bodra){
     bodra(7)
     console.log("hello", bodra);
   }
   function democallback2(a){
 
     console.log("hello",a);
   }
     
   demo(democallback2);
 
 
 
 
 function demo(rambo){
   rambo(52);
 }
 function democallback(b){
   console.log("heloo", b);
 }
 demo(democallback);
