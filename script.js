let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

start();

let appDate = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeDate: time,
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдеться?", "");

            if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null &&
                a !== "" && b != "" && a.length < 50) {
                console.log("done");
                appDate.expenses[a] = b;
            } else {
                i = i - 1;
            }
        }
    },
    detectDayBudget: function () {
        appDate.moneyPerDay = (appDate.budjet / 30).toFixed();
        alert("Еежедневный бюджет:" + appDate.moneyPerDay);
    },
    detectLevel: function () {
        if (appDate.moneyPerDay < 100) {
            console.log("Миинимальный уровень достатка")
        } else if (appDate.moneyPerDay > 100 && appDate.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appDate.moneyPerDay > 2000) {
            console.log("Выскоий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function () {
        if (appDate.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            appDate.mouthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита:" + appDate.mouthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i < 3; i++) {
            let opt = prompt("Статья необзательных расходов", "");
            appDate.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function () {
        let items = prompt("Что принесет доподнительный доход (Перечислите через запятую)", "");
        appDate.income = items.split(', ');
        appDate.income.push(prompt("Может что-о еще?"));
        appDate.income.sort();
    }
};