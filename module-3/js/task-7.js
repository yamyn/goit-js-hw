'use strict';

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  //Кастомный метод для вычисления id
  idCalculate() {
    let newId = this.transactions.length + 1;
    return newId;
  },
  /*
   * Метод добавляющий транзацию в свойство transactions
   * Принимает объект трназкции
   */
  addTransaction(transaction) {
    this.transactions.push(transaction);
  },

  /*
   * Метод отвечающий за добавление суммы к балансу
   * Создает объект транзакции и вызывает addTransaction
   */
  deposit(amount) {
    this.balance += amount;
    const { DEPOSIT, WITHDRAW } = Transaction;
    let id = this.idCalculate();
    const transaction = { id, type: DEPOSIT, amount };
    this.addTransaction(transaction);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Создает объект транзакции и вызывает addTransaction
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (!(this.balance >= amount)) {
      return console.log(
        'Cнятие такой суммы не возможно, недостаточно средств!!!!!',
      );
    }
    this.balance -= amount;
    const { DEPOSIT, WITHDRAW } = Transaction;
    let id = this.idCalculate();
    const transaction = { id, type: WITHDRAW, amount };
    this.addTransaction(transaction);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return console.log(this.balance);
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (id === transaction.id) {
        return console.log(transaction);
      }
    }
    return console.log('Транзакция с таким id ненайдена!');
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let totalTypeBalance = 0;
    for (const transaction of this.transactions) {
      if (type === transaction.type) {
        totalTypeBalance += transaction.amount;
      }
    }
    return console.log(totalTypeBalance);
  },
};

account.deposit(400);
console.log(account.transactions);
account.getBalance();

account.withdraw(100);

console.log(account.transactions);
account.getBalance();

account.withdraw(10000);

console.log(account.transactions);
account.getBalance();

account.getTransactionDetails(2);

account.deposit(400);

account.withdraw(100);

account.deposit(1000);

account.withdraw(200);

account.getTransactionTotal('withdraw');
