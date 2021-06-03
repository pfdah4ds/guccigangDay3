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
bhan = ['ligma','sugma','fugma',['Jan','Feb','Mar']];

console.log(bhan);
console.log(bhan[2]);
console.log(bhan[3]);
console.log(bhan[3][0]);
console.log(bhan[3][1]);

const array_3d =[
    ['a','b','c'],
    ['d','e','f'],
    [['g','h','i'],['j','k','l']]
];

console.log(array_3d[0][0]);
console.log(array_3d[1][2]);
console.log(array_3d[2][0][0]);


//array method
anime = ['naruto','hxh'];
console.log(anime);

anime.push('JJK');
anime.push('Monster');
anime.push('Deathnote');
console.log(anime);

lls = anime.pop()
console.log('Popped',lls);
console.log(anime);

anime.unshift('Moriarty');
console.log(anime);

anime.shift();
console.log(anime);

//slice 
let array = [0,1,2,3,4,5,6,7,8];

console.log(array.slice(0,3));
console.log(array.slice(3));
console.log(array.slice(4,6));
console.log(array.slice(-3));

console.log(array);

//splice 
let array2 = [0,1,2,3,4,5,6];
console.log(array2);
console.log(array2.splice(0,3));
console.log(array2);

//index of:
let array3 = ['a','b','c',3,'e']
console.log(`Index of e:${array3.indexOf('e')}`);
console.log(`Index of e:${array3.indexOf('g')}`);


//includes
if (array3.includes('44')){
    console.log('Wooe')
}
else{
    console.log('boo');
}
if('Nepal'.includes('al')){
    console.log('hehe');
}
else{
    console.log('bebe');
}

