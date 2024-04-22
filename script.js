
let hasKey = false;
let choicehtml = 0
let stage = 0

let c1 = document.getElementById("c1")
let c2 = document.getElementById("c2")
let c3 = document.getElementById("c3")
let c4 = document.getElementById("c4")


c1.addEventListener("click", () => { choicehtml = 1 })
c2.addEventListener("click", () => { choicehtml = 2 })
c3.addEventListener("click", () => { choicehtml = 3 })
c4.addEventListener("click", () => { choicehtml = 4 })


function continueExploration() {
    if (stage == 2) {

        document.getElementById("story").innerText += "\nВы продолжаете исследовать коридор...\nВ какую сторону вы хотите пойти?\n1. Налево\n2. Направо\n";
        document.getElementById("choices").innerHTML = "<input type='text' id='choice'><button id='submit'>Отправить</button>";

        document.getElementById("submit").addEventListener("click", function () {
            let choice = choicehtml;
            switch (choice) {
                case 1:
                    document.getElementById("story").innerText += "Вы идете налево и видите старую лестницу.\n1. Подняться наверх\n2. Пройти мимо\n";
                    document.getElementById("choices").innerHTML = "<input type='text' id='choice'><button id='submit'>Отправить</button>";

                    document.getElementById("submit").addEventListener("click", function () {
                        let subChoice1 = choicehtml;
                        if (subChoice1 === 1) {
                            document.getElementById("story").innerText += "Вы поднимаетесь наверх и находите секретную комнату.\nВнутри вы видите свет и слышите шум города.\nЭто выход!\nКонец игры. Вы выбрались из этого места.";
                        } else {
                            document.getElementById("story").innerText += "Вы решаете пройти мимо лестницы.\nПродолжая свой путь по коридору...";
                            finalChoice();
                        }
                    });
                    break;
                case 2:
                    document.getElementById("story").innerText += "Вы идете направо и видите закрытую дверь.\n1. Попробовать открыть дверь\n2. Вернуться обратно\n";
                    document.getElementById("choices").innerHTML = "<input type='text' id='choice'><button id='submit'>Отправить</button>";

                    document.getElementById("submit").addEventListener("click", function () {
                        let subChoice2 = choicehtml;
                        if (subChoice2 === 1) {
                            if (hasKey) {
                                document.getElementById("story").innerText += "Вы открываете дверь с помощью найденного ключа.\nВыход найден! Конец игры.";
                            } else {
                                document.getElementById("story").innerText += "Вы пытаетесь открыть дверь, но она заперта.\nВам нужно найти ключ.";
                            }
                            continueExploration();
                        } else {
                            document.getElementById("story").innerText += "Вы решаете вернуться обратно.\nПродолжая свой путь по коридору...";
                            finalChoice();
                        }
                    });
                    break;
                default:
                    document.getElementById("story").innerText += "<<[{|Вы снова теряете сознание...|}]>>\n";
                    break;
            }

        })
    };
}

function finalChoice() {
    if (stage == 3) {
        document.getElementById("story").innerText += "\nВы достигли конца коридора и видите две двери.\n1. Войти в левую дверь\n2. Войти в правую дверь\n";
        document.getElementById("choices").innerHTML = "<input type='text' id='choice'><button id='submit'>Отправить</button>";

        document.getElementById("submit").addEventListener("click", function () {
            let choice = choicehtml;
            switch (choice) {
                case 1:
                    document.getElementById("story").innerText += "Вы входите в левую дверь и находите ключ от двери наружу.\nСзади вы слышите быстрые шаги...\nПред вами стоит чёрная машина.\n1. Сесть в машину\n2. Вернуться обратно\n";
                    document.getElementById("choices").innerHTML = "<input type='text' id='choice'><button id='submit'>Отправить</button>";

                    document.getElementById("submit").addEventListener("click", function () {
                        let subChoice1 = choicehtml;
                        if (subChoice1 === 1) {
                            document.getElementById("story").innerText += "Вы садитесь в машину и находите ключ в бордачке.\nВы быстро покидаете это место.\nВнезапно, яркий белый свет ослепляет вас, а звуки сирены наполняют ваше сознание...\nВы чувствуете, что вас спасли.\nКонец игры. Вы выбрались из темноты и теперь в безопасности.";
                        } else {
                            document.getElementById("story").innerText += "Вы решаете вернуться обратно.";
                            continueExploration();
                        }
                    });
                    break;
                case 2:
                    document.getElementById("story").innerText += "Вы входите в правую дверь и видите замочную скважину.\nВам нужно найти ключ, чтобы открыть ее.\n1. Вернуться назад и искать ключ\n2. Попытаться вскрыть замок ножом\n";
                    document.getElementById("choices").innerHTML = "<input type='text' id='choice'><button id='submit'>Отправить</button>";

                    document.getElementById("submit").addEventListener("click", function () {
                        let subChoice2 = choicehtml;
                        if (subChoice2 === 1) {
                            document.getElementById("story").innerText += "Вы решаете вернуться назад и искать ключ.";
                            continueExploration();
                        } else {
                            document.getElementById("story").innerText += "Вы пытаетесь вскрыть замок ножом...\nНо нож не подходит для этой задачи.\nВам придется вернуться назад и искать ключ.";
                            continueExploration();
                        }
                    });
                    break;
                default:
                    document.getElementById("story").innerText += "Вы застряли в темноте и не можете ничего видеть.\nВнезапно, яркий белый свет ослепляет вас, а звуки сирены наполняют ваше сознание...\nВаш путь закончен, и вы отправляетесь на тот свет...";
                    break;
            }
        })
    };
}


document.getElementById("story").innerText = "Крик души\nВы просыпаетесь на грязной кровати в темной комнате. Голова раскалывается от боли.\nЧерные тени пляшут перед вашими глазами, а в воздухе ощущается ужасная тяжесть.\nВы пытаетесь вспомнить, что произошло...\nВаши воспоминания начинают медленно возвращаться...\nВы были за рулем своей машины...\nВы вспоминаете о том, как попали в аварию...\nВ аварии погибла вся ваша семья...\n";

document.getElementById("choices").innerHTML = "Что вы хотите сделать дальше?<br>1. Встать с кровати и исследовать комнату<br>2. Попробовать вспомнить больше деталей о происшествии<br>";

document.getElementById("submit").addEventListener("click", function () {
    if (stage == 0) {
        let choice = choicehtml;
        switch (choice) {
            case 1:
                document.getElementById("story").innerText += "Вы встаете с кровати и начинаете исследовать комнату...";
                document.getElementById("choices").innerHTML = "";
                stage = stage + 1
                exploreRoom();
                break;
            case 2:
                document.getElementById("story").innerText += "Вы сосредотачиваетесь, чтобы вспомнить больше деталей...\nВаша голова начинает еще сильнее болеть, но вам удается вспомнить немного больше...\nВы решаете встать с кровати и исследовать комнату...";
                stage = stage + 1
                document.getElementById("choices").innerHTML = "";
                exploreRoom();
                break;
            default:
                document.getElementById("story").innerText += "<<[{|Вы снова теряете сознание...|}]>>\n";
                break;
        }
    }
});

function exploreRoom() {
    // document.getElementById("story").innerText += "\nВы исследуете комнату...\nЧто вы видите?\n1. Старый дневник на полке\n2. Старая фотография на столе\n3. Запертая дверь на выход\n4. Ключ на полу\n";
    // document.getElementById("choices").innerHTML = "<input type='text' id='choice'><button id='submit'>Отправить</button>";
    document.getElementById("choices").innerHTML = "<br> Вы исследуете комнату...<br> Что вы видите? <br> 1. Старый дневник на полке<br>2. Старая фотография на столе<br>3. Запертая дверь на выход<br>4. Ключ на полу<br>";

    document.getElementById("submit").addEventListener("click", function () {
        if (stage == 1) {
            let choice = choicehtml;
            switch (choice) {
                case 1:
                    document.getElementById("choices").innerHTML = "<br> Хотите его прочитать?<br> 1. Да<br> 2. Нет<br>";
                    document.getElementById("story").innerText += "Вы нашли старый дневник, пыль на его страницах словно душит вас.";
                    
                    // document.getElementById("choices").innerHTML = "<input type='text' id='choice'><button id='submit'>Отправить</button>";

                    document.getElementById("submit").addEventListener("click", function () {
                        let subChoice = choicehtml;
                        if (subChoice === 1) {
                            document.getElementById("story").innerText += "Вы начинаете читать дневник...\nСтранные записи о безумии и терзаниях заполняют ваш разум.\nСтрах овладевает вами...\nВы решаете закрыть дневник и идти дальше.";
                            continueExploration();
                        } else {
                            document.getElementById("story").innerText += "Вы решаете не читать дневник и идти дальше.";
                            continueExploration();
                        }
                    });
                document.getElementById("choices").innerHTML = "";
                stage = stage + 1
                    break;
                case 2:
                    document.getElementById("story").innerText += "На столе лежит старая фотография вашей семьи.\nТени на фотографии словно сгущаются, придавая лицам ваших близких жуткий вид.\nВы чувствуете, как ужас пронизывает ваше сердце...\nРешаете положить фотографию обратно на стол и идти дальше.";
                    document.getElementById("choices").innerHTML = "";

                    stage = stage + 1
                    continueExploration();
                    break;
                case 3:
                    if (hasKey) {
                        document.getElementById("story").innerText += "Дверь открыта. Вы можете выйти.";
                    } else {
                        document.getElementById("story").innerText += "Дверь заперта...\nВам нужно найти ключ...";
                    }
                    stage = stage + 1
                    document.getElementById("choices").innerHTML = "";

                    continueExploration();
                    break;
                case 4:
                    document.getElementById("story").innerText += "Вы нашли ключ на полу.";
                    hasKey = true;
                    stage = stage + 1
                    document.getElementById("choices").innerHTML = "";

                    continueExploration();
                    break;
                default:
                    document.getElementById("story").innerText += "<<[{|Вы снова теряете сознание...|}]>>\n";
                    break;
            }
        }
    })
}





// import { createInterface } from 'readline';

// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// function main() {
//   console.log("Крик души");
//   console.log("Вы просыпаетесь на грязной кровати в темной комнате. Голова разрывается от боли.");
//   console.log("Черные тени пляшут перед вашими глазами, а в воздухе ощущается ужасная тяжесть.");
//   console.log("Вы пытаетесь вспомнить, что произошло...");
//   console.log("Ваши воспоминания начинают медленно возвращаться...");
//   console.log("Вы были за рулем своей машины...");
//   console.log("Вы вспоминаете страшный флешбек о том, как попали в аварию...");
//   console.log("В аварии погибла вся ваша семья...");

//   console.log("Что вы хотите сделать дальше?");
//   console.log("1. Встать с кровати и исследовать комнату");
//   console.log("2. Попробовать вспомнить больше деталей о происшествии");

//   rl.question("Введите номер вашего выбора: ", (choice) => {
//     switch (parseInt(choice)) {
//       case 1:
//         console.log("Вы встаете с кровати и начинаете исследовать комнату...");
//         exploreRoom();
//         break;
//       case 2:
//         console.log("Вы сосредотачиваетесь, чтобы вспомнить больше деталей...");
//         console.log("Ваша голова начинает еще сильнее болеть, но вам удается вспомнить немного больше...");
//         console.log("Вы решаете встать с кровати и исследовать комнату...");
//         exploreRoom();
//         break;
//       default:
//         console.log("Вы снова теряете сознание...");
//         rl.close();
//         break;
//     }
//   });
// }

// function exploreRoom() {
//   console.log("Вы исследуете комнату...");
//   console.log("Что вы видите?");
//   console.log("1. Старый дневник на полке");
//   console.log("2. Старая фотография на столе");
//   console.log("3. Запертая дверь на выход");
//   console.log("4. Купить, это напоминает вам о последнем разговоре с вашей семьей");

//   rl.question("Введите номер вашего выбора: ", (choice) => {
//     switch (parseInt(choice)) {
//       case 1:
//         console.log("Вы нашли старый дневник, пыль на его страницах словно душит вас.");
//         console.log("Хотите его прочитать?");
//         console.log("1. Да");
//         console.log("2. Нет");
//         rl.question("Введите номер вашего выбора: ", (subChoice) => {
//           if (parseInt(subChoice) === 1) {
//             console.log("Вы начинаете читать дневник...");
//             console.log("Странные записи о безумии и терзаниях заполняют ваш разум.");
//             console.log("Страх овладевает вами...");
//             console.log("Вы решаете закрыть дневник и идти дальше.");
//             continueExploration();
//           } else {
//             console.log("Вы решаете не читать дневник и идти дальше.");
//             continueExploration();
//           }
//         });
//         break;
//       case 2:
//         console.log("На столе лежит старая фотография вашей семьи.");
//         console.log("Тени на фотографии словно сгущаются, придавая лицам ваших близких жуткий вид.");
//         console.log("Вы чувствуете, как ужас пронизывает ваше сердце...");
//         console.log("Решаете положить фотографию обратно на стол и идти дальше.");
//         continueExploration();
//         break;
//       case 3:
//         console.log("Дверь заперта...");
//         console.log("Вам нужно найти ключ...");
//         continueExploration();
//         break;
//       case 4:
//         console.log("Вы видите небольшой предмет с надписью 'Семейный альбом'.");
//         console.log("Это напоминает вам о последнем разговоре с вашей семьей...");
//         console.log("Вы чувствуете боль в сердце, но решаете взять альбом и посмотреть.");
//         console.log("В альбоме вы видите счастливые моменты вашей семьи, но теперь они кажутся далекими...");
//         console.log("Вам становится еще тяжелее на сердце...");
//         continueExploration();
//         break;
//       default:
//         console.log("Вы теряете сознание снова...");
//         rl.close();
//         break;
//     }
//   });
// }

// function continueExploration() {
//   console.log("Вы продолжаете исследовать коридор...");
//   console.log("В какую сторону вы хотите пойти?");
//   console.log("1. Налево");
//   console.log("2. Направо");

//   rl.question("Введите номер вашего выбора: ", (choice) => {
//     switch (parseInt(choice)) {
//       case 1:
//         console.log("Вы идете налево и видите старую лестницу.");
//         console.log("1. Подняться наверх");
//         console.log("2. Пройти мимо");
//         rl.question("Введите номер вашего выбора: ", (subChoice) => {
//           if (parseInt(subChoice) === 1) {
//             console.log("Вы поднимаетесь наверх и находите секретную комнату.");
//             console.log("Внутри вы видите свет и слышите шум города.");
//             console.log("Это выход!");
//             console.log("Конец игры. Вы выбрались из этого места.");
//             rl.close();
//           } else {
//             console.log("Вы решаете пройти мимо лестницы.");
//             console.log("Продолжая свой путь по коридору...");
//             finalChoice();
//           }
//         });
//         break;
//       case 2:
//         console.log("Вы идете направо и видите закрытую дверь.");
//         console.log("1. Попробовать открыть дверь");
//         console.log("2. Вернуться обратно");
//         rl.question("Введите номер вашего выбора: ", (subChoice) => {
//           if (parseInt(subChoice) === 1) {
//             console.log("Вы пытаетесь открыть дверь, но она заперта.");
//             console.log("Вам нужно найти ключ.");
//             continueExploration();
//           } else {
//             console.log("Вы решаете вернуться обратно.");
//             console.log("Продолжая свой путь по коридору...");
//             finalChoice();
//           }
//         });
//         break;
//       default:
//         console.log("Вы теряете сознание снова...");
//         rl.close();
//         break;
//     }
//   });
// }

// function finalChoice() {
//   console.log("Вы достигли конца коридора и видите две двери.");
//   console.log("1. Войти в левую дверь");
//   console.log("2. Войти в правую дверь");

//   rl.question("Введите номер вашего выбора: ", (choice) => {
//     switch (parseInt(choice)) {
//       case 1:
//         console.log("Вы входите в левую дверь и находите ключ от двери наружу.");
//         console.log("Сзади вы слышите быстрые шаги...");
//         console.log("Пред вами стоит чёрная машина.");
//         console.log("1. Сесть в машину");
//         console.log("2. Вернуться обратно");
//         rl.question("Введите номер вашего выбора: ", (subChoice) => {
//           if (parseInt(subChoice) === 1) {
//             console.log("Вы садитесь в машину и находите ключ в бордачке.");
//             console.log("Вы быстро покидаете это место.");
//             console.log("Внезапно, яркий белый свет ослепляет вас, а звуки сирены наполняют ваше сознание...");
//             console.log("Вы чувствуете, что вас спасли.");
//             console.log("Конец игры. Вы выбрались из темноты и теперь в безопасности.");
//             rl.close();
//           } else {
//             console.log("Вы решаете вернуться обратно.");
//             continueExploration();
//           }
//         });
//         break;
//       case 2:
//         console.log("Вы входите в правую дверь и видите замочную скважину.");
//         console.log("Вам нужно найти ключ, чтобы открыть ее.");
//         console.log("1. Вернуться назад и искать ключ");
//         console.log("2. Попытаться вскрыть замок ножом");
//         rl.question("Введите номер вашего выбора: ", (subChoice) => {
//           if (parseInt(subChoice) === 1) {
//             console.log("Вы решаете вернуться назад и искать ключ.");
//             continueExploration();
//           } else {
//             console.log("Вы пытаетесь вскрыть замок ножом...");
//             console.log("Но нож не подходит для этой задачи.");
//             console.log("Вам придется вернуться назад и искать ключ.");
//             continueExploration();
//           }
//         });
//         break;
//       default:
//         console.log("Вы застряли в темноте и не можете ничего видеть.");
//         console.log("Внезапно, яркий белый свет ослепляет вас, а звуки сирены наполняют ваше сознание...");
//         console.log("Ваш путь закончен, и вы отправляетесь на тот свет...");
//         rl.close();
//         break;
//     }
//   });
// }

// main();
