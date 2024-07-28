// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
class Account {
  #balance;

  constructor(initialBalance = 0) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      return true;
    } else {
      return false;
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      return true;
    } else {
      return false;
    }
  }

  getBalance() {
    return this.#balance;
  }
}

// Example usage
const account = new Account(100);
console.log("Initial balance:", account.getBalance());

// Deposit money
if (account.deposit(50)) {
  console.log("Deposit successful. New balance:", account.getBalance());
} else {
  console.log("Deposit failed.");
}

// Withdraw money
if (account.withdraw(30)) {
  console.log("Withdrawal successful. New balance:", account.getBalance());
} else {
  console.log("Withdrawal failed.");
}

// Attempt to withdraw more money than available
if (account.withdraw(150)) {
  console.log("Withdrawal successful. New balance:", account.getBalance());
} else {
  console.log(
    "150 Withdrawal failed due to insufficient funds.",
    account.getBalance()
  );
}
