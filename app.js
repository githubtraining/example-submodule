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
        return msg;
    }
    var sayTime = function(){
        var now = new Date(),
            pre = "The time is now " + now.Hours() + ":" + now.getMinutes;
        
        alert(pre);
        return pre;
    }
    var shutdown = function(){
        say("Goodbye");
    }

    startup();
});