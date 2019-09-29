let money = + prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let firstQuestion = prompt('Введите обязательную статью расходов в этом месяце',''),
        secondQuestion = prompt('Во сколько обойдется?','');

    if (typeof(firstQuestion) === 'string' && typeof(firstQuestion) != null && typeof(secondQuestion) != null && firstQuestion != "" && secondQuestion != "" && firstQuestion.length < 50) {
        appData.expenses[firstQuestion] = secondQuestion;
    } else {
       i--;
    }
};

/*let i = 0;
do {
    let firstQuestion = prompt('Введите обязательную статью расходов в этом месяце',''),
        secondQuestion = prompt('Во сколько обойдется?','');
        i++;

    if (typeof(firstQuestion) === 'string' && typeof(firstQuestion) != null && typeof(secondQuestion) != null && firstQuestion != "" && secondQuestion != "" && firstQuestion.length < 50) {
        appData.expenses[firstQuestion] = secondQuestion;
    } else {
           i--;
    } 
} while (i < 2)*/

/*let i = 0;
while (i < 2) {
    let firstQuestion = prompt('Введите обязательную статью расходов в этом месяце',''),
        secondQuestion = prompt('Во сколько обойдется?','');
        i++;

    if (typeof(firstQuestion) === 'string' && typeof(firstQuestion) != null && typeof(secondQuestion) != null && firstQuestion != "" && secondQuestion != "" && firstQuestion.length < 50) {
        appData.expenses[firstQuestion] = secondQuestion;
    } else {
        i--;
    } 
}*/

appData.moneyPerDay = appData.budget / 30;

alert(`Ежедневный бюджет: ${appData.moneyPerDay} грн.`);

if(appData.moneyPerDay < 200) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 200 && appData.moneyPerDay < 500) {
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 500 && appData.moneyPerDay < 1000) {
    console.log('Хороший уровень достатка');
} else if (appData.moneyPerDay > 1000) {
    console.log('Отличный уровень достатка');
} else {
    console.log('Произошла ошибка');
}
