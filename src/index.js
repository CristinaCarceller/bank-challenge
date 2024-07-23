import Account from "./Account.js";

const transactions = [
	{
		date: new Date("01-10-2012"),
		credit: "1000.00",
		debit: "",
		balance: 1000,
	},
	{
		date: new Date("01-13-2012"),
		credit: "2000.00",
		debit: "",
		balance: 3000,
	},
	{
		date: new Date("01-14-2012"),
		credit: "",
		debit: "500.00",
		balance: 2500,
	},
];

const account = new Account(0, transactions);

account.printBankStatement();
