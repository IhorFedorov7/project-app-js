let money = prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}

let firstQuestion = prompt('Введите обязательную статью расходов в этом месяце',''),
    firstQuestion1 = prompt('Во сколько обойдется?',''),
    secondQuestion = prompt('Введите обязательную статью расходов в этом месяце',''),
    secondQuestion1 = prompt('Во сколько обойдется?','');

appData.expenses.firstQuestion = firstQuestion1;
appData.expenses.secondQuestion = secondQuestion1;

alert(appData.budget / 30);