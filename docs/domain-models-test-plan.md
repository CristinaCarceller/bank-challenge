# User Stories,Domain Models and Test Plan

## Requirement 1:

**User Story:** As a user, I want to be able to access to my account, so that I can se my balance and last transactions.

**Domain Model:**
| Objects | Properties | Messages | Output |
| :---: | :---: | :---: | :---: |
| Account | id (@string) | | |
| Balance | @integer | getBalance() | @integer |

**Test Plan:**

- Test new instance of account is created.
- Test getBalance() gets the account balance when is called.

## Requirement 2:

**User Story:** As a user, I want to be able to deposit founds into my account, so that I can increment my balance.

**Domain Model:**
| Objects | Properties | Messages | Output |
| :---: | :---: | :---: | :---: |
| Balance | @integer | depositMoney(@amount)| @Void |
| Amount | @integer| | |

**Test Plan:**

- Test depositMoney() adds amount to the account balance.
- Test depositMoney() doesn't allow to add negative amounts to balance.
- Test depositMoney() doesn't allow to add null/undefined values.

## Requirement 3:

**User Story:** As a user, I want to be able to withdraw funds from my account , so that I get access to my money

**Domain Model:**
| Objects | Properties | Messages | Output |
| :---: | :---: | :---: | :---: |
| Balance | @integer | withdrawMoney(@amount)| @Void |
| Amount | @integer| | |

**Test Plan:**

- Test withdrawMoney() removes amount from the account balance.
- Test withdrawMoney() doesn't allow to remove negative amounts from balance.
- Test withdrawMoney() doesn't allow to remove a bigger amount than the balance currently has.
- Test withdrawMoney() doesn't allow to remove null/undefined values.

## Requirement 4:

**User Story:** As a user, I want to be able to see my account statement in a specific format, so that I can see my balance and lasts transactions from the newest to the oldest.

**Domain Model:**
| Objects | Properties | Messages | Output |
| :---: | :---: | :---: | :---: |
| Account | transaction @Array[] | getFormattedTransactions() | @Array[transactions] |

**Test Plan:**

- Test printStatement() print a table with all the information (date, amount, balance).

## Requirement 5:

**User Story:** As a user, I want to be able to print my account statement on the screen, so that I can see my balance and the transactions made on the account

**Domain Model:**
| Objects | Properties | Messages | Output |
| :---: | :---: | :---: | :---: |
| BankStatementPrinter | @Array[@transactions] | printStatement(@transaction) | @Array[@transactions] |
| | | printStatementHeaders() | |
| Account | transactions @Array[] | |
**Test Plan:**

- Test printStatement() is been called when printBankStatement is called.
