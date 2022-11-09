const clientName = "Игорь";
let clientSpentForAllTime = 110;
let clientSpentToday = 25;

let discount;
if (clientSpentForAllTime > 100 && clientSpentForAllTime <= 300)
    discount = 0.9;
if (clientSpentForAllTime > 300 && clientSpentForAllTime <= 500)
    discount = 0.8;
if (clientSpentForAllTime > 500)
    discount = 0.7;

alert(`Вам предоставляется скидка в ${((1 - discount) * 100).toFixed()}%!`);

clientSpentToday *= discount;
clientSpentForAllTime += clientSpentToday;

alert(`Спасибо, ${clientName}!
К оплате ${clientSpentToday.toFixed(2)}$.
За все время в нашем ресторане вы потратили ${clientSpentForAllTime.toFixed(2)}$.`);