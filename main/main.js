// Exercise 2.1
function showAlert() {
    alert("I'm JavaScript");
}

//Check the answers:
// showAlert();



//<============================================================================================================================>
// Exercise 2.4

function showVariables() {
    // first task
    let name, admin;
    name = "John";
    admin = name;
    alert(admin);

    //second task
    let ourEarth = "ourEarth";
    let currentUser = "currentUser";
    console.log("first variable =>", ourEarth);
    console.log("second variable =>", currentUser);

    //third task
    function getCurrentAge(date) {
        return 21;
    }

    const BIRTHDAY = "21.03.2001";
    const age = getCurrentAge(BIRTHDAY);
}

//Check the answers:
// showVariables();

// Exercise 2.5
/*
    result:
    let name = "Ilya";

    alert( `hello ${1}` ); => hello 1

    alert( `hello ${"name"}` ); => hello name

    alert( `hello ${name}` ); // => hello Ilya

*/



//<============================================================================================================================>
// Exercise 2.6

function asksUser() {
    let userName = prompt("What's your name?");
    alert(`Hi ${userName}! I'm glad to meet you!`);
}

//Check the answers:
// asksUser();

// Exercise 2.8

/*
    Task 1:
        let a = 1, b = 1;
        let c = ++a;
        let d = b++;

    result:
        a = 2;
        b = 2;
        c = 2;
        d = 1;

<---------------------------->

    Task 2:
        let a = 2;
        let x = 1 + (a *= 2);

    result:
        x = 5;

<---------------------------->

    Task 3:
        "" + 1 + 0
        "" - 1 + 0
        true + false
        6 / "3"
        "2" * "3"
        4 + 5 + "px"
        "$" + 4 + 5
        "4" - 2
        "4px" - 2
        "  -9  " + 5
        "  -9  " - 5
        null + 1
        undefined + 1
        " \t \n" - 2

    result:
        10
        -1
        1
        2
        6
        9px
        $45
        2
        NaN
        "  -9  5"
        -14
        NaN
        error
        NaN
*/

// Task 4:

    function fixAddtion() {
        let a = prompt("First number?", 1);
        let b = prompt("Second number?", 2);

        alert(+a + +b);
    }

//Check the answers:
// fixAddtion();



//<============================================================================================================================>
// Exercise 2.9
/*
    Task 1:
        5 > 4 => true
        "apple" > "pineapple" => true
        "2" > "12" => false
        undefined == null => true
        undefined === null => false
        null == "\n0\n" => false
        null === +"\n0\n" => false
*/



//<============================================================================================================================>
// Exercise 2.10
/*
    Task 1:
        Will alert be shown?
            if ("0") {
                alert( 'Hello' );
            }
    result:
            Yes
*/

// Task 2:

function showNameJS() {
    let question = "What is the “official” name of JavaScript?"
    prompt(question) === "ECMAScript" ? alert("Right!") : alert("You don’t know? ECMAScript!");
}

// Task 3:
function showNumber() {
    let number = prompt("Your number:");
    if (number > 0 ) {
        alert(1);
    } else if (number < 0) {
        alert(-1);
    } else {
        alert(0);
    }
}

// Task 4:
/*
    Description:
    Rewrite this if using the conditional operator '?':
        let result;

        if (a + b < 4) {
        result = 'Below';
        } else {
        result = 'Over';
        }
*/
function rewriteIf() {
    let a = 5;
    let b = 5
    let result = a + b < 4 ? "Below" : "Over";
    console.log(result);
}

// Task 5:
/*
    Description:
    Rewrite if..else using multiple ternary operators '?'.
    For readability, it’s recommended to split the code into multiple lines.

        let message;

        if (login == 'Employee') {
        message = 'Hello';
        } else if (login == 'Director') {
        message = 'Greetings';
        } else if (login == '') {
        message = 'No login';
        } else {
        message = '';
        }
*/
function changeIf(login) {
    let message = login === "Employee" ?
        "Hello" : 
        login === "Director" ?
        "Greetings" :
        login === "" ? 
        "No Login" :
        "";
    console.log("Message =>", message);
}

// Check the answers:
// showNameJS();
// showNumber();
// rewriteIf();
// changeIf("Director");



//<============================================================================================================================>
// Exercise 2.11
/*
    Task 1:
        Description:
        What will the code below output?

            alert( alert(1) || 2 || alert(3) );
    result:
        1, then 2;

    Task 2:
        Description:
        What is this code going to show?

            alert( 1 && null && 2 );

    result:
        null;

    Task 3:
        Description:
        What is this code going to show?

            alert( 1 && null && 2 );

    result:
        null;

    Task 4:
        Description:
        What will this code show?

            alert( alert(1) && alert(2) );

    result:
        alert(1) then undefined;

    Task 5:
        Description:
        What will the result be?

            alert( null || 2 && 3 || 4 );

    result:
        3;
*/

// Task 6, 7:
function checkAppropriateAge(age, include) {
    if (include) {
        if (age >= 14 && age <= 90) {
            alert("Good");
        } else {
            alert("Bad")
        }
    } else {
        if (age < 14 && age > 90) {
            alert("Good");
        } else {
            alert("Bad")
        }
    }
}

// alternative option task 7:
function option(age) {
    if (!(age >= 14 && age <= 90)) {
            alert("Good");
        } else {
            alert("Bad")
    }
}


// Check the answers:
// checkAppropriateAge(55, true);
// checkAppropriateAge(55, false);
// option(10);

// Task 8:
function checkLogin() {
    let user = prompt("Who is there?", '');
    if (!user) {
        alert("Canceled");
        return;
    }
    if (user === "Admin") {
        let password = prompt("Password?", '');
        if (!password) {
            alert("Canceled");
            return;
        }
        if (password === "TheMaster") {
            alert("Welcome");
        } else {
            alert("Wrong password");
        }
        
    } else {
        alert("I don't know you")
    }
}


// Check the answers:
// checkLogin();


//<============================================================================================================================>
//Exercise 2.13
/* 
    Task: Repeat until the input is correct
*/

function number() {
    let number = prompt('Number ?');
    while(number < 100) {
        number = prompt('Number ?')
    }
}

/* 
    Task: Output prime numbers
*/

function primeNumbers() {
    let n = prompt("Number range", 10);
    let result = [];
    nextPrime:
    for (let i = 2; i <= n; i++) {

        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                continue nextPrime;
            }
        }

        result.push(i);
    }
    alert(result);
}

// Check the answers:
// number();
// primeNumbers();




//<============================================================================================================================>
//Exercise 2.14
//Task 1:
function rewriteSwith() {
    let browser = prompt("Your browser");
    let supportedBrowser = ["Chrome", "Firefox", "Safari", "Opera"]
    if (browser === "Edge") {
        alert( "You've got the Edge!" );
    } else if (supportedBrowser.includes(browser)) {
        alert( 'Okay we support these browsers too' );
    } else {
        alert( 'We hope that this page looks ok!' );
    };
}

// Task 2:
function rewriteIfToSwitch() {
    let a = +prompt("a?", 0);
    switch(a) {
        case 0:
            alert(0);
            break;
        case 1:
            alert(1);
            break;
        case 2:
        case 3:
            alert("2,3");
            break;
    }
}

// Check the answers:
// rewriteSwith();
// rewriteIfToSwitch();


//<============================================================================================================================>
//Exercise 2.15

// Task 1 function min
function min(a, b){
    return a < b ? a : b;
}

//Task 2: function pow
function pow(x, n) {
    return x ** n;
}

// Check the answers:
// alert(min(5, 9));
// alert(pow(5, 2));


//<============================================================================================================================>
//Exercise 2.17 
// Task 1: Rewrite function to arrow
function rewriteFunctions() {
    const ask = (question, yes, no) => {
        if (confirm(question)) yes();
        else no();
      }
      
      ask(
        "Do you agree?",
        () => { alert("You agreed."); },
        () => { alert("You canceled the execution."); }
      );
}
