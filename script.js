// Завдання 1
// Напиши скрипт, який, для об'єкта user, послідовно:

//     додає поле mood зі значенням 'happy'
//     замінює значення hobby на 'skydiving'
//     замінює значення premium на false
//     виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of
const user = {
  hobby: "cripto",
  premium: true,
};

user.hobby = "skydiving";
user.mood = "happy";
user.premium = false;

const keys = Object.keys(user);
for (const key of keys) {
  console.log(`${key}: ${user[key]}`);
}
// Завдання 2

// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті.
//  Функція повертає число — кількість властивостей.

function countProps(obj) {
  const keys = Object.keys(obj);
  return keys.length;
}
console.log(countProps({ name: "ivan", age: 99, hobby: "money" }));

// Завдання 3

// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я
// найпродуктивнішого (який виконав більше всіх задач).
// Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".
const workers = {
  anton: 50,
  sasha: 20,
  tolik: 5,
  ivan: 999,
};
function findBestEmployee(employees) {
  let bestEmployee = "";
  let maxTasks = 0;

  for (const [name, tasks] of Object.entries(employees)) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
      bestEmployee = name;
    }
  }
  return { name: bestEmployee, score: maxTasks };
}

const result = findBestEmployee(workers);
console.log(result.name, result.score);

// Завдання 4

// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат.
// Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта,
// переданого в функцію, має вигляд "ім'я":"зарплата".

const workerss = {
  jimmi: 50,
  karl: 3333,
  diana: 1000,
};
function countTotalSalary(employees) {
  let totalSum = 0;
  for (const sum of Object.values(employees)) {
    totalSum += sum;
  }
  return totalSum;
}

console.log(countTotalSalary(workerss));

// Завдання 5

// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості.
// Повертає масив значень певної властивості prop з кожного об'єкта в масиві.

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроїд", price: 400, quantity: 7 },
  { name: "Захоплення", price: 1200, quantity: 2 },
];

function getAllPropValues(arr, prop) {
  return arr.map((item) => item[prop]).filter((value) => value !== undefined);
}

console.log(getAllPropValues(products, "name"));
console.log(getAllPropValues(products, "quantity"));

// Завдання 6

// Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я
// продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).
// Викличи функції для перевірки працездатності твоєї реалізації.

const calculateTotalPrice = function (allProdcuts, productName) {
  for (const product of allProdcuts) {
    if (productName == product.name) {
      return product.price * product.quantity;
    }
  }
  return 0;
};

console.log(calculateTotalPrice(products, "Радар"));
console.log(calculateTotalPrice(products, "Дроїд"));

// Завдання 7 — додаткове, виконувати не обов'язково

// Напиши сценарій керування особистим кабінетом інтернет-банку. Є об'єкт account
//  в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    return {
      id: Date.now(),
      type: type,
      amount: amount,
      date: new Date().toLocaleString,
    };
  },

  deposit(amount) {
    let transaction = this.createTransaction(amount, "deposit");
    this.balance += amount;
    this.transactions.push(transaction);
  },

  withdraw(amount) {
    if (this.balance < amount) {
      return "you are broke";
    }

    let transaction = this.createTransaction(amount, "withdraw");
    this.balance -= amount;
    this.transactions.push(transaction);
  },

  getTransactionTotal(type) {
    let total = 0;
    this.transactions.forEach((transaction) => {
      if (transaction && transaction.type === type) {
    total += transaction.amount;
  }
    });
    return total;
  },
};

account.deposit(1000);
account.deposit(500);
account.withdraw(300);
console.log("Текущий баланс:", account.balance);
console.log("Всего внесено:", account.getTransactionTotal("deposit"));
