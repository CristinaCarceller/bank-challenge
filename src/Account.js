import BankStatementPrinter from "./BankStatementPrinter.js";

export default class Account {
	#balance;
	#transactions;

	constructor(balance = 0, transactions = []) {
		this.#balance = balance;
		this.#transactions = transactions;
	}

	getBalance = () => this.#balance;

	depositMoney = (amount) => {
		if (typeof amount !== "number" || amount < 0) return;
		this.#balance += amount;
		const transaction = {
			date: new Date(),
			credit: amount.toString() + ".00",
			debit: "",
			balance: this.#balance,
		};
		this.#transactions.push(transaction);
	};

	withdrawMoney = (amount) => {
		if (typeof amount !== "number" || amount < 0) return;
		if (amount > this.#balance) return;
		this.#balance -= amount;
		const transaction = {
			date: new Date(),
			credit: "",
			debit: amount.toString() + ".00",
			balance: this.#balance,
		};
		this.#transactions.push(transaction);
	};

	getFormattedTransactions = () => {
		const formattedTransactions = this.#transactions
			.reverse()
			.map((transaction) => {
				const formattedTransaction = {
					date: transaction.date.toLocaleDateString("en-GB").padEnd(10, " "),
					credit: transaction.credit.padEnd(10, " "),
					debit: transaction.debit.padEnd(10, " "),
					balance: `${transaction.balance}.00`.padEnd(10, " "),
				};

				return formattedTransaction;
			});

		return formattedTransactions;
	};

	printBankStatement = () => {
		const formattedTransactions = this.getFormattedTransactions(
			this.#transactions
		);
		BankStatementPrinter.printStatement(formattedTransactions);
	};
}
