actor {
    public func greet(name : Text) : async Text {
        return "Hello, " # name # "!";
    };


//Challenge 1 : Write a function add that takes two natural numbers n and m and returns the sum.
    public func sum(n : Nat, m : Nat) : async Nat{
        let product : Nat = n + m ;
        return product; 
    };
// opa@zbox:~/ICP/ICbootCamp$ dfx canister call ICbootCamp sum '(4,4)'
// (8 : nat)


// Challenge 2 : Write a function square that takes a natural number n 
// and returns the area of a square of length n.
public func sqr(n : Nat)  : async Nat{
    let totalSF : Nat = n * n;
    return totalSF;
};
// opa@zbox:~/ICP/ICbootCamp$ dfx canister call ICbootCamp sqr '(4)'
// (16 : nat)

// Challenge 3 : Write a function days_to_second that takes a number of days n 
// and returns the number of seconds.
public func days_to_second(days : Nat)  : async Nat{
    let daysInSeconds : Nat = days * 24 * 60 * 60;
    return daysInSeconds;
};
// opa@zbox:~/ICP/ICbootCamp$ dfx canister call ICbootCamp days_to_second '(1)'
// (86_400 : nat)

// Challenge 4 : Write two functions increment_counter & clear_counter .
var counter = 0;
public func increment_counter()  : async Nat{
    counter += 1; 
    return counter;
};
public func clear_counter()  : async (){
    counter := 0 ;
    
};
// not able to get it to reset

// Challenge 5 : Write a function divide that takes two natural 
// numbers n and m and returns a boolean indicating 
// if n divides m.
  public func equal_to_one (n : Nat) : async Text {
        if(n == 1) {
            return("n is equal to 1 !");
        } else {
            return ("n is not equal to 1 !");
        };
    };

// Challenge 6 : Write a function is_even that takes a natural 
// number n and returns a boolean indicating if n is even.

public func inf_to_one (n : Nat) : async Text {
        if(n < 1){
            return("n is below 1 !");
        };
        if( n > 1){
            return("n is above 1 !");
        } else {
            return("n is equal to 1!");
        };
    };
    //[8:41:30 PM] Use this link to access the code: https://m7sm4-2iaaa-aaaab-qabra-cai.raw.ic0.app/?tag=647148564
    
    // 
    // 7 --> 10 are on arrays .... waiting on buffers talk 

};   //end of actor 