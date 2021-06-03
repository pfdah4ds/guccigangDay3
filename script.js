//Switch statement
day = 'Paturday'
switch(day){
    case 'Sunday':
        console.log('Mauja hi mauja');
        break;
    case 'Monday','Saturday':
        console.log('Commit Bad');
        break;
    case 'Paturday':
        console.log('Vomit Mad');
        break;    
    default:
        console.log('Bitch WTF');
        break;    
}
//Function with function keyword

//No argument no return
function printHello(){
    console.log('Hello ducks!');
}
printHello();
printHello();
printHello();
printHello();

//Argument Return

function haha(a,b){
    return a+b;
}
console.log(haha(4,6));
console.log(haha(6,5));
console.log(haha(8,6));

//Yes Argument No Return

function haha2(a,b){
    console.log(`The sum is ${a+b}`);
}

haha2(4,5);
haha2(5,6);
haha2(0,1);


//No argument return
console.log(getPI());
function getPI(){
    return 3.14;
}
l = getPI();
console.log(l);
console.log(getPI());
console.log(getPI());


//Function expression
const quadrilateraleqn = function(a,b,c,x){
    return a*x*x+b*x+c;
};
console.log(quadrilateraleqn(2,3,4,6));

//arrow function
const sumwithArr = (a,b) =>{
    console.log('Blip',a+b);
}
a = 44;
b = 66;
sumwithArr(a,b);

//ShorterArrow function
const sumwithArr2 = (a,b) => a+b;
console.log(sumwithArr2(b,a));


//passing function as variable
function duitafunction(func1,func2){
    let a = 22;
    let b = 33;
    console.log('Flip',func1(a,b));
    func2(a,b);
}
duitafunction(sumwithArr2,sumwithArr);


//Arrays