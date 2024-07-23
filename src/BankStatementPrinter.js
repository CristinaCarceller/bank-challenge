export default class BankStatementPrinter {
	static printStatementHeaders = () => {
		const headers = ["date", "credit", "debit", "balance"];
		const paddedHeaders = headers.map((header) => header.padEnd(10, " "));
		console.log(
			`${paddedHeaders[0]} || ${paddedHeaders[1]} || ${paddedHeaders[2]} || ${paddedHeaders[3]}`
		);
	};

	static printStatement = (transactions) => {
		this.printStatementHeaders();

		transactions.forEach((transaction) => {
			console.log(
				`${transaction.date} || ${transaction.credit} || ${transaction.debit} || ${transaction.balance}`
			);
		});
	};
}
