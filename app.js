/*
IIFE - Immediately Invoked Function Expression
Encapsulate initialization of application.
*/

(function(){
    var a = 0,
        b = 1,
        c = 2;

    var startup = function(){
        say("Welcome");
    }
    var say = function(msg){
        alert(msg);
    }
    var shutdown = function(){
        say("Goodbye");
    }

    startup();
});