// Q10. Simple Closure:

function counter() {
  let count = 0; 
  
  return function() {
    count = count + 1; 
    console.log(count); 
    return count; 
  };
}

const c = counter(); 
c(); 
c(); 
c(); 

const d = counter();
d(); 
d(); 

// Q11. Medium Closure:

function createWallet() {
  let balance = 0; 

  return {
    addMoney: function(amount) {
      if (typeof amount === 'number' && amount > 0) {
        balance += amount;
        console.log(`Added ${amount}. New balance is ${balance}.`);
      } else {
        console.error("Invalid amount provided for adding money.");
      }
    },

    checkBalance: function() {
      console.log(`Current balance is: ${balance}`);
      return balance;
    }
  };
}

let mywallet = createWallet();
mywallet.addMoney(500); 
mywallet.addMoney(200); 
mywallet.checkBalance(); 