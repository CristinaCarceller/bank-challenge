import Account from "../src/Account.js";

describe("Bank Statement Printer Test", () => {
	it("should call the printStatement method when printBankStatement is called", () => {
		//Arrange
		const testAccount = new Account();
		//Act
		testAccount.printBankStatement = jasmine.createSpy();
		testAccount.printBankStatement();
		//Assert
		expect(testAccount.printBankStatement).toHaveBeenCalled();
	});
});
