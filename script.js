let money, time;

function start() {
    money = + prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money =="" || money == null) {
        money = + prompt('Ваш бюджет на месяц?', '');
    }
}
start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let firstQuestion = prompt('Введите обязательную статью расходов в этом месяце',''),
                secondQuestion = prompt('Во сколько обойдется?','');
        
            if (typeof(firstQuestion) === 'string' && typeof(firstQuestion) != null && typeof(secondQuestion) != null && firstQuestion != "" && secondQuestion != "" && firstQuestion.length < 50) {
                appData.expenses[firstQuestion] = secondQuestion;
            } else {
               i--;
            }
        }
    
        //do...while
    
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
        
        //while
        
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);

        alert(`Ежедневный бюджет: ${appData.moneyPerDay} грн.`);
    },
    detectLevel: function() {
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
    }, 
    checkSavings: function() {
        if (appData.savings == true) {
            let save = + prompt('Какова сумма накопления?'),
                percent = + prompt('Под какой процент?');
    
            appData.monthIncone = save/100/12*percent;
            alert(`Доход в месяц с вашего депозита: ${appData.monthIncone}`)
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i <= 3; i++) {
            let choose = prompt('Статья необязательных расходов?','');
        appData.optionalExpenses[i] = choose;
        }
    },
    chooseIncome: function() {
        let items = prompt('Что принесет доп доход? (Перечислите через запятую)', '');

        while(!isNaN(items) || items =="" || items == null) {
                items = prompt('Что принесет доп доход? (Перечислите через запятую)', '');
            }
            appData.income = items.split(", ");
            appData.income.push(prompt('Может что-то еще?'));
            appData.income.sort();
        
        appData.income.forEach(function (itemmassive, i) {
            alert(`Способы доп. заработка: ${++i} - ${itemmassive}`)
        });
    }
};

for(key in appData) {
    console.log(`Наша программа включает в себя данные: ${key} - ${appData[key]}`);
}
