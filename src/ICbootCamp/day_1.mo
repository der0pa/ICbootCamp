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
    counter += 0 ;
    
};
// not able to get it to reset

};   //end of actor 