// if(true){
//     var x = 0;
// }
// x = 2;

// var myGlobal = "global";
// function ScopeTest(){
//     myGlobal = "overwritten";
// }

// ScopeTest();
// document.writeln(myGlobal);

var x = 1;

{ let x = 2;
   console.log(x);
}


document.write(x);