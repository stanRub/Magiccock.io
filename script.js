const predictions = [
    "Сегодня твой день!",
    "Удача будет на твоей стороне.",
    "Ты найдешь то, что ищешь.",
    "Жди приятный сюрприз.",
    "Скоро сбудется твоя мечта.",
    "Сегодня звезды на твоей стороне.",
    "Тебя ждет успех в делах.",
    "Ты добьешься своего!",
    "Ты станешь лучше.",
    "Твое настроение улучшится.",
    "Возможно, ты скоро встретишь старого друга.",
    "Время новых начинаний пришло.",
    "Сегодня для тебя открыты все двери.",
    "Используй шанс, который скоро появится.",
    "Прими перемены с открытым сердцем.",
    "Сегодня твои действия принесут результат.",
    "Ты обретешь спокойствие.",
    "Твой труд будет вознагражден.",
    "Верь в себя, и всё получится.",
    "Ты привнесешь в мир радость.",
    "У тебя появится новая цель.",
    "Ты на пороге великих перемен.",
    "Сегодня твои идеи будут приняты.",
    "Удача любит смелых.",
    "Тебя ждет день полон энергии.",
    "Твои планы начнут сбываться.",
    "Скоро твоя мечта станет реальностью.",
    "Счастье ближе, чем ты думаешь.",
    "Ты получишь важный урок.",
    "Твои старания окупятся сполна.",
    "Ты преодолеешь все преграды.",
    "Слушай свое сердце.",
    "Тебя ждет незабываемое приключение.",
    "Все изменится к лучшему.",
    "Сегодня улыбнись миру.",
    "Ты найдешь ответы на свои вопросы.",
    "Ты сможешь изменить свою жизнь.",
    "Ты встретишь человека, который повлияет на тебя.",
    "Прими благодарность от окружающих.",
    "Твои близкие гордятся тобой.",
    "Тебя ждет важный разговор.",
    "Твоя помощь будет оценена.",
    "Ты начнешь новое дело с успехом.",
    "Сегодня для тебя открыты все пути.",
    "Ты окружен любовью и заботой.",
    "Тебя ждет неожиданная радость.",
    "Скоро тебя посетит вдохновение.",
    "Ты добьешься большего.",
    "Твоя интуиция не подведет.",
    "Новый проект принесет успех.",
    "Тебя ждет отличное настроение.",
    "Твои близкие помогут тебе.",
    "Ты обретешь гармонию.",
    "Сегодня тебя ждет сюрприз.",
    "Скоро ты получишь хорошие новости.",
    "Ты встретишь свою половинку.",
    "Твое творчество порадует других.",
    "Тебя ждет много приятных моментов.",
    "Ты почувствуешь себя сильнее.",
    "Ожидай интересных встреч.",
    "Твои старания будут замечены.",
    "Тебя ждет успех в обучении.",
    "Скоро к тебе придет вдохновение.",
    "Твое упорство приведет к успеху.",
    "Сегодня тебя ждут хорошие перемены.",
    "Скоро тебе откроются новые возможности.",
    "Ты на верном пути.",
    "Тебя ждут приятные воспоминания.",
    "Ты узнаешь что-то важное.",
    "Ты сможешь достичь задуманного.",
    "Ты проявишь свои лучшие качества.",
    "Сегодня тебя ждет радость.",
    "Ты найдешь поддержку в окружении.",
    "Твое время настанет.",
    "Твоя доброта окупится сторицей.",
    "Ты почувствуешь прилив сил.",
    "Твоя энергия вдохновит других.",
    "Сегодня удача на твоей стороне.",
    "Ты увидишь результаты своих усилий.",
    "Сегодня тебя ждет удача.",
    "Ты на пороге успеха.",
    "Твои желания сбудутся.",
    "Ты обретешь внутреннюю силу.",
    "Твои мечты начнут сбываться.",
    "Скоро ты обретешь гармонию.",
    "Ты сможешь преодолеть трудности.",
    "Ты увидишь свет в конце тоннеля.",
    "Ты найдешь верный путь.",
    "Твои действия приведут к успеху.",
    "Ты начнешь новый этап жизни.",
    "Сегодня удачный день для начала.",
    "Тебя ждет положительный опыт.",
    "Ты станешь лучше, чем был.",
    "Твоя уверенность укрепится.",
    "Ты окружен добрыми людьми.",
    "Ты обретаешь новую мудрость.",
    "Тебя ждут положительные перемены.",
    "Сегодня удачный день для решений.",
    "Ты научишься новому.",
    "Ты будешь гордиться собой."
];

function breakCookie() {
    const cookie = document.querySelector(".cookie");
    const leftHalf = document.querySelector(".left");
    const rightHalf = document.querySelector(".right");
    const predictionText = document.getElementById("prediction");
    const wholeCookie = document.querySelector(".whole-cookie"); // Получаем целое печенье

    cookie.classList.toggle("break");

    // Если печенье сломано, показываем предсказание
    if (cookie.classList.contains("break")) {
        const randomIndex = Math.floor(Math.random() * predictions.length);
        predictionText.innerText = predictions[randomIndex];

        // Позиционирование половинок
        leftHalf.style.transform = 'translate(-65px, -50%) rotate(-20deg)'; // Новая позиция
        rightHalf.style.transform = 'translate(65px, -50%) rotate(20deg)'; // Новая позиция
        wholeCookie.style.opacity = '0'; // Скрываем целое печенье
    } else {
        predictionText.innerText = ""; // Убираем предсказание
        wholeCookie.style.opacity = '1'; // Показываем целое печенье
        // Возвращаем половинки в начальное положение
        leftHalf.style.transform = 'translate(-50%, -50%)'; // Начальная позиция
        rightHalf.style.transform = 'translate(50%, -50%)'; // Начальная позиция
    }
}