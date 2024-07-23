import Account from "../src/Account.js";

describe("Account Class Tests", () => {
	describe("Account initialization Tests", () => {
		it("should create a a new instance of the Account class", () => {
			//Arrange
			//Act
			const testAccount = new Account();
			//Assert
			expect(testAccount).toBeInstanceOf(Account);
		});
		it("should have a getBalance function that return the initial balance", () => {
			//Arrange
			const expectedBalance = 0;
			const testAccount = new Account();
			//Act
			const balance = testAccount.getBalance();
			//Assert
			expect(balance).toBe(expectedBalance);
		});
	});
	describe("Account Balance Deposit Tests", () => {
		it("should add 50 to the balance amount", () => {
			//Arrange
			const expectedBalance = 50;
			const testAccount = new Account();
			//Act
			testAccount.depositMoney(expectedBalance);
			//Assert
			expect(testAccount.getBalance()).toBe(expectedBalance);
		});
		it("should not add negative amounts to the balance", () => {
			//Arrange
			const expectedBalance = -50;
			const testAccount = new Account();
			//Act
			testAccount.depositMoney(expectedBalance);
			//Assert
			expect(testAccount.getBalance()).not.toBe(expectedBalance);
		});
		it("should not add null/undefined values to the balance", () => {
			//Arrange
			const expectedBalance = undefined;
			const testAccount = new Account();
			//Act
			testAccount.depositMoney(expectedBalance);
			//Assert
			expect(testAccount.getBalance()).toBe(0);
		});
	});
	describe("Account Balance Withdraw Tests", () => {
		it("should remove 50 to the balance amount", () => {
			//Arrange
			const initialBalance = 50;
			const withdrawn = 50;
			const testAccount = new Account(initialBalance);
			//Act
			testAccount.withdrawMoney(withdrawn);
			//Assert
			expect(testAccount.getBalance()).toBe(initialBalance - withdrawn);
		});
		it("should not withdraw negative amounts to the balance", () => {
			//Arrange
			const initialBalance = 50;
			const withdrawn = -50;
			const testAccount = new Account(initialBalance);
			//Act
			testAccount.withdrawMoney(withdrawn);
			//Assert
			expect(testAccount.getBalance()).toBe(initialBalance);
		});
		it("should not remove null/undefined values to the balance", () => {
			//Arrange
			const initialBalance = 50;
			const withdrawn = undefined;
			const testAccount = new Account(initialBalance);
			//Act
			testAccount.withdrawMoney(withdrawn);
			//Assert
			expect(testAccount.getBalance()).toBe(initialBalance);
		});
		it("should not withdraw more money than the account balance currently has", () => {
			//Arrange
			const initialBalance = 50;
			const withdrawn = 100;
			const testAccount = new Account(initialBalance);
			//Act
			testAccount.withdrawMoney(withdrawn);
			//Assert
			expect(testAccount.getBalance()).toBe(initialBalance);
		});
	});
	describe("Account Transactions Formatting Tests", () => {
		it("should print the transactions with the specific format", () => {
			//Arrange

			const testTransactions = [
				{
					date: new Date(),
					credit: "1000",
					debit: "",
					balance: 1000,
				},
				{
					date: new Date(),
					credit: "2000",
					debit: "",
					balance: 3000,
				},
			];
			const testAccount = new Account(0, testTransactions);
			//Act
			const expectedOutput = [
				{
					date: new Date().toLocaleDateString("en-GB"),
					credit: "1000      ",
					debit: "          ",
					balance: "1000.00   ",
				},
				{
					date: new Date().toLocaleDateString("en-GB"),
					credit: "2000      ",
					debit: "          ",
					balance: "3000.00   ",
				},
			];
			testAccount.getFormattedTransactions();
			//Assert
			expect(testAccount.getFormattedTransactions()).toEqual(expectedOutput);
		});
	});
});
