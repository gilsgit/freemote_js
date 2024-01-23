    /*
        Now, let's write some JAVASCRIPT
        (And remember you can test variable values at any time by using console.log -- even the best developers still do this!)
            ☑️ Create a string variable "myFirstName" with your first name inside
            ☑️ Create a number variable "myAge" with your age inside
    */

            const myFirstName = 'Harry';
            const myAge = 48;
            
            // console.log(myFirstName);
            // console.log(myAge);
            
                /*
                    ☑️ Now, create a new variable called "myFullName" USING the "myFirstName" variable
                    ☑️ Print a statement introducing yourself
                */
            
            const myFullName = myFirstName;
            console.log(`Hello, my name is ${myFirstName}`);

                /*
                    ☑️ Let's next write an if statement that prints 
                        > "Im older than Aaron" if you're older than 28
                        > "Im the same age as Aaron" if you ARE 28
                        > Otherwise it should print "Im younger than Aaron"
                        (You Should Have an If, and Else if, and an Else below -- not just a single console.log)
                */
                if(myAge > 28){
                    console.log("I'm older than Aaron");
                } else if (myAge == 28) {
                    console.log("I'm the same age as Aaron");
                } else {
                    console.log("I'm younger than Aaron");
                };

                /*
                    ☑️ Next, calculate whether your age is even or odd, and store it in a boolean variable "isEven"
                    ☑️ Now write another if statement that prints "My age is even", or "My age is odd", 
                      depending which is true
                */
                if (myAge % 2 == 0){
                    console.log("My age is even");
                } else {
                    console.log("My age is odd")
                }

                /*
                    YOUR CODE SHOULD NOW PRINT 3 SENTENCES TO THE CONSOLE:
                    ☑️ Your introduction with name and age
                    ☑️ A sentence saying whether you are older or younger than me
                    ☑️ A sentence saying whether your age is even or odd
                 */
            

                 /*
                    LET'S GET A BIT MORE CHALLENGING
                    This is a real common use case to create different strings
            
                    ☑️ Declare a variable, "activeUserCount" and set its value to 1
                    ☑️ Now, write some code to print a formatted string like so: 
                        ex. "There is 1 active user"
                    ☑️ Change "activeUserCount" to be 2, and run the code again. 
                        it should say "There is 2 active user" -- which is not ideal
                    ☑️ Let's write an if statement to handle either 1, or more users, so...
                        -> if there's one user it should say "There IS 1 active USER"
                        -> if there's 0 or more than 1: "There ARE 2 active USERS"
                        -> (note the difference)
                 */
            
                        let activeUserCount = 1;
                        console.log(`There is ${activeUserCount} user`);
                        activeUserCount = 5;
                        console.log(`There is ${activeUserCount} user`);

                        if(activeUserCount == 1){
                            console.log(`There is ${activeUserCount} user`);
                        } else if (activeUserCount > 1 || activeUserCount == 0) {
                            console.log(`There are ${activeUserCount} users`);
                        }
