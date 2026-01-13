public class BankAccount {

    // Static fields (shared by all accounts)
    private static String bankName = "MyBank";
    private static int totalAccounts = 0;

    // Instance fields (unique per account)
    private int accountNumber;
    private String holderName;
    private double balance;

    // Constructor
    public BankAccount(String holderName, double balance) {
        totalAccounts++;
        this.accountNumber = totalAccounts;
        this.holderName = holderName;
        this.balance = balance;
    }

    // Static method
    public static String getBankInfo() {
        return bankName + " - Total Accounts: " + totalAccounts;
    }

    // Instance methods
    public void deposit(double amount) {
        if (amount <= 0) {
            System.out.println("Deposit amount must be positive.");
            return;
        }
        balance += amount;
    }

    public void withdraw(double amount) {
        if (amount <= 0) {
            System.out.println("Withdraw amount must be positive.");
            return;
        }
        if (amount > balance) {
            System.out.println("Insufficient balance.");
            return;
        }
        balance -= amount;
    }

    public double getBalance() {
        return balance;
    }

    // Getters
    public int getAccountNumber() {
        return accountNumber;
    }

    public String getHolderName() {
        return holderName;
    }

    // Main method
    public static void main(String[] args) {

        BankAccount acc1 = new BankAccount("Alice", 1000);
        BankAccount acc2 = new BankAccount("Bob", 500);

        acc1.deposit(200);
        acc2.withdraw(100);

        System.out.println("Account " + acc1.getAccountNumber() +
                " Balance: " + acc1.getBalance());

        System.out.println("Account " + acc2.getAccountNumber() +
                " Balance: " + acc2.getBalance());

        System.out.println(BankAccount.getBankInfo());
    }
}
