/* BankAccount ******/

// Методы
// - withDraw; +
// - getCredit;

// - getMoney / setMoney; +
// - getHistory; +


class BankAccount {
  #account = 0; // - приватное поле! не доступно в экземпляре класса
  #history = [];
  #backMoney = 1e6;
  #credits = [];
  static id = 1;

  constructor(typeCard, currency) {
    this.typeCard = typeCard;
    this.currency = currency;
  }

  get money() {
    return this.#account;
  } // getter

  set money(value) {
    this.#account += value;
    this.#setHistory(`You added ${value}`);
  } // setter

  setNewDate() {
    ++BankAccount.date;
  }

  getHistory() {
    return this.#history;
  }

  getCredits() {
    return this.#credits;
  }

  #setHistory(message) {
    this.#history.push({ date: new Date(), message });
  } // приватный метод

  withdraw(value) {
    this.#account -= value;
    this.#setHistory(`You took off ${value}`);
  }

  applyCredit(value, persent) {
    if (this.#backMoney > value) {
      this.#backMoney -= value;
      this.#account += value;

      this.#credits.push({
        date: new Date(),
        deadline: BankAccount.getDeadLineDate(), // первое число следующего месяца
        sum: value,
        persent, // persent: persent
      });

      this.#setHistory(`You added ${value} from Credit with ${persent}%`);
    } else {
      return 'Not enough money';
    }
  }

  // берет текущую дату и возвращает дату первого числа следующего месяца этого года ( или следующего для декабря )
  static getDeadLineDate() {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    if (month !== 11) {
      return new Date(`${month + 2}-1-${year}`);
    }
    return new Date(`1-1-${year+1}`);
  }
}

const bankAccount = new BankAccount('debit', 'UAH'); // { typeCard: 'debit', currency: 'UAH' };
console.log(bankAccount);

// BankAccount.prototype.getDeadLineDate -> bankAccount.getDeadLineDate() - метод объекта класса BankAccount
// BankAccount.getDeadLineDate -> статический (static) метод НИКАК не зависит от объекта класса BankAccount

// instanceof class
// работает ТОЛЬКО с объектами
// проверяет имеет ли объект принадлежность к какому-то классу

[] instanceof Array // true
// [] instanceof Object // true
bankAccount.applyCredit instanceof Function // true
bankAccount.applyCredit instanceof Object