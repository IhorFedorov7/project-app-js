let btnStart = document.querySelector('#start'),
    savingsI = document.querySelector('#savings'),
    budgetV = document.querySelectorAll('.budget-value')[0],
    daybudgetV = document.querySelectorAll('.daybudget-value')[0],
    levelV = document.querySelectorAll('.level-value')[0],
    expensesV = document.querySelectorAll('.expenses-value')[0],
    optionalExpensesV = document.querySelectorAll('.optionalexpenses-value')[0],
    incomeV = document.querySelectorAll('.income-value')[0],
    monthSavingsV = document.querySelectorAll('.monthsavings-value')[0],
    yearSavingsV = document.querySelectorAll('.yearsavings-value')[0],
    yearI = document.querySelector('.year-value'),
    monthI = document.querySelector('.month-value'),
    dayI = document.querySelector('.day-value'),
    expensesI = document.querySelectorAll('.expenses-item'),
    expensesBrn = document.querySelectorAll('button')[0],
    optionalBtn = document.querySelectorAll('button')[1],
    countBtn = document.querySelectorAll('button')[2],
    optionalExpensesI = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent');

let money, time;

expensesBrn.disabled = true;
optionalBtn.disabled = true;
countBtn.disabled = true;

btnStart.addEventListener('click', function() {
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = + prompt('Ваш бюджет на месяц?', '');

    while(isNaN(money) || money =="" || money == null) {
        money = + prompt('Ваш бюджет на месяц?', '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetV.textContent = money.toFixed();
    yearI.value = new Date(Date.parse(time)).getFullYear();
    monthI.value = new Date(Date.parse(time)).getMonth() +1;
    dayI.value = new Date(Date.parse(time)).getDate();

    expensesBrn.disabled = false;
    optionalBtn.disabled = false;
    countBtn.disabled = false;
});

expensesBrn.addEventListener('click', function() {
    let sum = 0;

    for (let i = 0; i < expensesI.length; i++) {
        let firstQuestion = expensesI[i].value,
            secondQuestion = expensesI[++i].value;
    
        if (typeof(firstQuestion) === 'string' && typeof(firstQuestion) != null && typeof(secondQuestion) != null && firstQuestion != "" && secondQuestion != "" && firstQuestion.length < 50) {
            appData.expenses[firstQuestion] = secondQuestion;
            sum += +secondQuestion;
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
        } while (i < 2)
        
        //while
        
        let i = 0;
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
    expensesV.textContent = sum;
});

optionalBtn.addEventListener('click', function() {
    for (let i = 0; i < optionalExpensesI.length; i++) {
        let choose = optionalExpensesI[i].value;        appData.optionalExpenses[i] = choose;
        optionalExpensesV.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBtn.addEventListener('click', function() {

    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - expensesV.textContent)/ 30).toFixed();
        daybudgetV.textContent = appData.moneyPerDay;

        if(appData.moneyPerDay <= 200) {
            levelV.textContent = 'Минимальный уровень достатка';
        } else if (appData.moneyPerDay >= 200 && appData.moneyPerDay <= 500) {
            levelV.textContent = 'Средний уровень достатка';
        } else if (appData.moneyPerDay >= 500 && appData.moneyPerDay <= 1000) {
            levelV.textContent = 'Хороший уровень достатка';
        } else if (appData.moneyPerDay >= 1000) {
            levelV.textContent = 'Отличный уровень достатка';
        } else {
            levelV.textContent = 'Произошла ошибка';
        }
    } else {
        daybudgetV.textContent = 'Произошла ошибка';
    }
});

chooseIncome.addEventListener('input', function() {
    let items = chooseIncome.value;
    appData.income = items.split(", ");
    incomeV.textContent = appData.income;
});

savingsI.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

chooseSum.addEventListener('input', function() {
    if(appData.savings == true) {
        let sum = + chooseSum.value,
            percent = + choosePercent.value;

        appData.monthIncone = sum/100/12*percent;
        appData.yearIncone = sum/100*percent;

        monthSavingsV.textContent = appData.monthIncone.toFixed(1);
        yearSavingsV.textContent = appData.yearIncone.toFixed(1);
    }
});

choosePercent.addEventListener('input', function() {
    if(appData.savings == true) {
        let sum = + chooseSum.value,
            percent = + choosePercent.value;

        appData.monthIncone = sum/100/12*percent;
        appData.yearIncone = sum/100*percent;

        monthSavingsV.textContent = appData.monthIncone.toFixed(1);
        yearSavingsV.textContent = appData.yearIncone.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}


/*for(key in appData) {
    console.log(`Наша программа включает в себя данные: ${key} - ${appData[key]}`);
}*/
