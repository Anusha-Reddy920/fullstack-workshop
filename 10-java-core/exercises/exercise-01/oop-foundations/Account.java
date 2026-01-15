package Person;

public abstract class Account {

    protected int accountNumber;
    protected String holderName;
    protected double balance;

    private static int accountCounter = 1000;

    public Account(String holderName, double balance) {
        this.accountNumber = ++accountCounter;
        this.holderName = holderName;
        this.balance = balance;
    }

    public abstract double calculateInterest();

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
        }
    }

    public double getBalance() {
        return balance;
    }

    public String getHolderName() {
        return holderName;
    }
}