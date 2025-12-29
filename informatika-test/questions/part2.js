const part2 = [
  {
    id: 41,
    text: "Бір байттың құрамы:",
    answers: [
      { text: "8 бит", correct: true },
      { text: "2 бит", correct: false },
      { text: "16 бит", correct: false },
      { text: "10 бит", correct: false },
      { text: "12 бит", correct: false }
    ]
  },
  {
    id: 42,
    text: "Алгоритмнің типтерін көрсетіңіз:",
    answers: [
      { text: "Сызықтық, тармақталған, циклдік", correct: true },
      { text: "Бір рет қолданылатын, екі жүзді", correct: false },
      { text: "Бір деңгейлік, көпдеңгейлік", correct: false },
      { text: "Бір функционалдық, көпфункционалдық", correct: false },
      { text: "Сызықтық, квадраттық", correct: false }
    ]
  },
  {
    id: 43,
    text: "Программалау тілдерінде қолданылатын деректердің түрлері:",
    answers: [
      { text: "Integer, Real, Char, Boolean", correct: true },
      { text: "Integer, True, Char, Boolean", correct: false },
      { text: "False, Real, True, Boolean", correct: false },
      { text: "Integer, Mod, Char, Div", correct: false },
      { text: "Summa, Rang, True, False", correct: false }
    ]
  },
  {
    id: 44,
    text: "Деректер типінің үш түрін атаңыз:",
    answers: [
      { text: "Сызықтық, иерархиялық, кестелік", correct: true },
      { text: "Циклдік, тармақталған, сызықтық", correct: false },
      { text: "Иерархиялық, сатылық, кестелік", correct: false },
      { text: "Сызықтық, сатылық, иерархиялық", correct: false },
      { text: "Сызықтық, сатылық, кестелік", correct: false }
    ]
  },
  {
    id: 45,
    text: "Программа дегеніміз не?",
    answers: [
      {
        text: "Есепті шығару алгоритмін орындайтын командалар жиыны",
        correct: true
      },
      {
        text: "Қойылатын мәселені шешуге қажетті әрекеттер тізбегін сипаттайтын ережелер жүйесі",
        correct: false
      },
      { text: "Берілген әрекеттерді орындау", correct: false },
      { text: "Сандарды экспоненциалдық түрде бейнелеу", correct: false },
      {
        text: "Нәтижеге көшу процесін анықтайтын нақты жарлық",
        correct: false
      }
    ]
  },
  {
    id: 46,
    text: "Программа-компилятордың орындайтын іс-әрекеті:",
    answers: [
      {
        text: "Бастапқы мәтінді машиналық кодқа көшіреді",
        correct: true
      },
      { text: "Мәтіндік файлды қалыптастырады", correct: false },
      { text: "Дискідегі файлды іздейді", correct: false },
      { text: "Программаны тікелей орындайды", correct: false },
      { text: "Машиналық кодты экранға шығарады", correct: false }
    ]
  },
  {
    id: 47,
    text: "Программа-интерпретатордың орындайтын іс-әрекеті:",
    answers: [
      {
        text: "Программаны біртіндеп тікелей орындайды",
        correct: true
      },
      { text: "Жүктеу файлын жасайды", correct: false },
      { text: "Машиналық кодқа толық аударады", correct: false },
      { text: "Мәтіндік файл құрады", correct: false },
      { text: "Дискідегі файлды іздейді", correct: false }
    ]
  },
  {
    id: 48,
    text: "Операциялық жүйеге жататын программалар:",
    answers: [
      { text: "MS DOS, Windows", correct: true },
      {
        text: "MS Word, MS Excel, MS PowerPoint",
        correct: false
      },
      { text: "Norton Commander, FAR", correct: false },
      { text: "QBASIC, PASCAL", correct: false },
      { text: "AVP, Doctor Web", correct: false }
    ]
  },
  {
    id: 49,
    text: "Қолданбалы программаларға жатады:",
    answers: [
      {
        text: "MS Word, MS Excel, MS PowerPoint, MS Access",
        correct: true
      },
      { text: "QBASIC, PASCAL", correct: false },
      { text: "MS DOS, Windows", correct: false },
      {
        text: "Norton Commander, FAR, PASCAL",
        correct: false
      },
      { text: "AVP, Doctor Web", correct: false }
    ]
  },
  {
    id: 50,
    text: "Программалау жүйесіне жатады:",
    answers: [
      { text: "QBASIC, PASCAL", correct: true },
      { text: "MS DOS, Windows", correct: false },
      {
        text: "MS Word, MS Excel, MS PowerPoint",
        correct: false
      },
      { text: "AVP, Doctor Web", correct: false },
      { text: "Norton Commander, FAR", correct: false }
    ]
  },

  {
    id: 51,
    text: "FORMAT командасының қызметі:",
    answers: [
      { text: "Дискіні форматтау", correct: true },
      { text: "Диск ішіндегі ақпаратты көшіру", correct: false },
      { text: "Мәтінді басып шығару", correct: false },
      { text: "Мәтіндік файл құру", correct: false },
      { text: "Файлмен жұмыс істеу", correct: false }
    ]
  },
  {
    id: 52,
    text: "ЭЕМ функционалдық мүмкіндіктеріне және өлшеміне қарай қалай бөлінеді?",
    answers: [
      {
        text: "Супер ЭЕМ, үлкен ЭЕМ, шағын ЭЕМ",
        correct: true
      },
      {
        text: "Супер ЭЕМ, сверхсупер ЭЕМ",
        correct: false
      },
      {
        text: "Мини ЭЕМ, минисупер ЭЕМ",
        correct: false
      },
      {
        text: "Микро ЭЕМ, супермакро ЭЕМ",
        correct: false
      },
      {
        text: "Мини ЭЕМ, шағын ЭЕМ, үлкен ЭЕМ",
        correct: false
      }
    ]
  },
  {
    id: 53,
    text: "Алғашқы отандық ЭЕМ қалай аталды?",
    answers: [
      { text: "МЭСМ", correct: true },
      { text: "Корвет", correct: false },
      { text: "БЭСМ", correct: false },
      { text: "Стрела", correct: false },
      { text: "Искра", correct: false }
    ]
  },
  {
    id: 54,
    text: "І буын компьютерлерінде қолданылған программалау тілі:",
    answers: [
      { text: "Машиналық код", correct: true },
      { text: "Ассемблер", correct: false },
      { text: "Бейсик", correct: false },
      { text: "Ағылшын қарпі", correct: false },
      { text: "Орыс алфавиті", correct: false }
    ]
  },
  {
    id: 55,
    text: "Бірінші компьютер қай елде пайда болды?",
    answers: [
      { text: "АҚШ-та", correct: true },
      { text: "СССР-да", correct: false },
      { text: "Англияда", correct: false },
      { text: "Жапонияда", correct: false },
      { text: "Германияда", correct: false }
    ]
  },
  {
    id: 56,
    text: "Дж. фон Нейман нені құрушы болып танылады?",
    answers: [
      {
        text: "Есептегіш машиналарды құрудың негізгі принциптерін",
        correct: true
      },
      { text: "Интегралдық схемаларды", correct: false },
      { text: "Электрондық лампаларды", correct: false },
      { text: "Ada программалау тілін", correct: false },
      { text: "Бірінші компьютерді", correct: false }
    ]
  },
  {
    id: 57,
    text: "Дербес компьютердің негізгі қондырғылары:",
    answers: [
      {
        text: "Жүйелік блок, монитор, пернетақта",
        correct: true
      },
      {
        text: "Жүйелік блок, монитор, тышқан, принтер",
        correct: false
      },
      {
        text: "Монитор, тышқан, принтер, сканер",
        correct: false
      },
      {
        text: "Жүйелік блок, монитор, джойстик",
        correct: false
      },
      {
        text: "Монитор, принтер, дискжетек",
        correct: false
      }
    ]
  },
  {
    id: 58,
    text: "Ақпараттарды уақытша сақтау орны:",
    answers: [
      { text: "Буфер", correct: true },
      { text: "Процессор", correct: false },
      { text: "Сумматор", correct: false },
      { text: "Регистр", correct: false },
      { text: "Адаптер", correct: false }
    ]
  },
  {
    id: 59,
    text: "Жүйелік блоктың құрамына не кіреді?",
    answers: [
      {
        text: "Электрондық схемалар, жедел жады, ток көзі, дискжетек",
        correct: true
      },
      {
        text: "Жедел жады, монитор, ток көзі",
        correct: false
      },
      {
        text: "Процессор, пернетақта, жедел жады",
        correct: false
      },
      {
        text: "Монитор, дискжетек, процессор",
        correct: false
      },
      {
        text: "Регистр, монитор, қорек көзі",
        correct: false
      }
    ]
  },
  {
    id: 60,
    text: "Дискеттер не үшін қажет?",
    answers: [
      {
        text: "Мәліметтерді сақтау және тасымалдау үшін",
        correct: true
      },
      { text: "Ақпаратты экранға шығару үшін", correct: false },
      { text: "Уақытша сақтау үшін", correct: false },
      { text: "Жедел жадқа кіру үшін", correct: false },
      { text: "Компьютерді жүктеу үшін", correct: false }
    ]
  },

  {
    id: 61,
    text: "HOME пернесінің қызметі:",
    answers: [
      {
        text: "Курсорды жолдың басына жылжыту",
        correct: true
      },
      {
        text: "Курсорды келесі жолға жылжыту",
        correct: false
      },
      { text: "Үлкен әріп режимін қосу", correct: false },
      { text: "Символдарды өшіру", correct: false },
      { text: "Мәтінді белгілеу", correct: false }
    ]
  },
  {
    id: 62,
    text: "Экраннан мәтінді көшіру командасы неге мүмкіндік береді?",
    answers: [
      {
        text: "Экранның кез келген бөлігін алмасу буферіне көшіруге",
        correct: true
      },
      { text: "Каталогтар бұтағын көруге", correct: false },
      { text: "Файлдарды бағаналап көрсетуге", correct: false },
      { text: "Файлдарды жоюға", correct: false },
      { text: "Барлық файлдарды жасыруға", correct: false }
    ]
  },
  {
    id: 63,
    text: "Shift пернесінің қызметі:",
    answers: [
      {
        text: "Жазу регистрінің таңбаларын теру",
        correct: true
      },
      { text: "Символдарды жою", correct: false },
      { text: "Табуляция", correct: false },
      { text: "Редакторды шығару", correct: false },
      { text: "Құжатты жабу", correct: false }
    ]
  },
  {
    id: 64,
    text: "Caps Lock пернесінің қызметі:",
    answers: [
      { text: "Бас әріптер режимін қосу", correct: true },
      { text: "Символдарды жою", correct: false },
      { text: "Табуляция", correct: false },
      { text: "Редактордан шығу", correct: false },
      { text: "Курсорды жылжыту", correct: false }
    ]
  },
  {
    id: 65,
    text: "Пернетақта жұмыс істемесе не істеу керек?",
    answers: [
      {
        text: "Пернетақтаның жүйелік блокқа дұрыс қосылғанын тексеру",
        correct: true
      },
      { text: "Компьютерді бірден өшіру", correct: false },
      { text: "Тышқанды ажырату", correct: false },
      { text: "Желіні тексеру", correct: false },
      { text: "Дискетаны салу", correct: false }
    ]
  },
  {
    id: 66,
    text: "Жедел жады не үшін арналған?",
    answers: [
      {
        text: "Ақпаратты қысқа мерзімде сақтау және өңдеу үшін",
        correct: true
      },
      {
        text: "Ақпаратты ұзақ уақыт сақтау үшін",
        correct: false
      },
      {
        text: "Дискеттердегі ақпаратты сақтау үшін",
        correct: false
      },
      {
        text: "Компьютерді жүктеу үшін",
        correct: false
      },
      {
        text: "Газеттер мен журналдарды сақтау үшін",
        correct: false
      }
    ]
  },
  {
    id: 67,
    text: "Дисплей экранына шығатын бейненің екілік коды қайда сақталады?",
    answers: [
      { text: "Видео жадында", correct: true },
      { text: "Жедел жадта", correct: false },
      { text: "Тұрақты жадта", correct: false },
      { text: "Қатты дискіде", correct: false },
      { text: "Алмасу буферінде", correct: false }
    ]
  },
  {
    id: 68,
    text: "Компьютер жұмысының өнімділігі неге байланысты?",
    answers: [
      { text: "Процессордың жиілігіне", correct: true },
      { text: "Экран өлшеміне", correct: false },
      { text: "Қуат кернеуіне", correct: false },
      { text: "Батырма басу жылдамдығына", correct: false },
      { text: "Қатты диск көлеміне", correct: false }
    ]
  },
  {
    id: 69,
    text: "Компьютер өшірілгенде қандай ақпарат жойылады?",
    answers: [
      { text: "Жедел жадтағы ақпарат", correct: true },
      { text: "Қатты дискідегі ақпарат", correct: false },
      { text: "CD-дискідегі ақпарат", correct: false },
      { text: "Иілгіш дискідегі ақпарат", correct: false },
      { text: "Бумалардағы ақпарат", correct: false }
    ]
  },
  {
    id: 70,
    text: "Қандай құрылғы ақпаратты ең үлкен жылдамдықпен алмастырады?",
    answers: [
      { text: "Жедел жады", correct: true },
      { text: "CD-ROM", correct: false },
      { text: "Қатты диск", correct: false },
      { text: "Иілгіш дискжетек", correct: false },
      { text: "Магниттік диск", correct: false }
    ]
  },

  {
    id: 71,
    text: "Винчестер не үшін қолданылады?",
    answers: [
      {
        text: "Жиі қолданылатын ақпаратты тұрақты сақтау үшін",
        correct: true
      },
      { text: "Сыртқы құрылғыларды қосу үшін", correct: false },
      { text: "ЭЕМ жұмысын басқару үшін", correct: false },
      {
        text: "Уақытша қолданылатын ақпаратты сақтау үшін",
        correct: false
      },
      { text: "Ақпаратты бірден өңдеу үшін", correct: false }
    ]
  },
  {
    id: 72,
    text: "Сыртқы жады не үшін қызмет етеді?",
    answers: [
      {
        text: "Ақпаратты ұзақ уақыт сақтау үшін",
        correct: true
      },
      {
        text: "Есептер шығару кезінде сақтау үшін",
        correct: false
      },
      { text: "ЭЕМ ішінде сақтау үшін", correct: false },
      { text: "Тек уақытша сақтау үшін", correct: false },
      { text: "Құрылғыларды қосу үшін", correct: false }
    ]
  },
  {
    id: 73,
    text: "ПЗУ (тұрақты есте сақтау құрылғысы) қандай ақпаратты сақтайды?",
    answers: [
      {
        text: "Компьютерге қажетті тұрақты ақпаратты",
        correct: true
      },
      { text: "Жұмыс кезіндегі деректерді", correct: false },
      { text: "Уақытша мәліметтерді", correct: false },
      { text: "Өңделетін ақпаратты", correct: false },
      { text: "Қолданушы файлдарын", correct: false }
    ]
  },
  {
    id: 74,
    text: "3,5 дюймдік иілгіш магниттік дискінің сыйымдылығы:",
    answers: [
      { text: "1,44 Мбайт", correct: true },
      { text: "360 Кбайт", correct: false },
      { text: "1,2 Мбайт", correct: false },
      { text: "720 Кбайт", correct: false },
      { text: "Мбайт", correct: false }
    ]
  },
  {
    id: 75,
    text: "Қай құрылғы ақпарат алмасудың ең кіші жылдамдығына ие?",
    answers: [
      { text: "Иілгіш дискжетек", correct: true },
      { text: "CD-ROM", correct: false },
      { text: "Қатты диск", correct: false },
      { text: "Жедел жады", correct: false },
      { text: "Жедел жад микросхемасы", correct: false }
    ]
  },
  {
    id: 76,
    text: "Модем дегеніміз не?",
    answers: [
      { text: "Техникалық құрылғы", correct: true },
      { text: "Пошталық программа", correct: false },
      { text: "Желілік хаттама", correct: false },
      { text: "Интернет сервер", correct: false },
      { text: "Программалық қамтамасыз ету", correct: false }
    ]
  },
  {
    id: 77,
    text: "Экранға шығару үшін қолданылатын құрылғы:",
    answers: [
      { text: "Монитор", correct: true },
      { text: "Сканер", correct: false },
      { text: "Принтер", correct: false },
      { text: "Пернетақта", correct: false },
      { text: "Модем", correct: false }
    ]
  },
  {
    id: 78,
    text: "«Тышқан» манипуляторы қандай құрылғы?",
    answers: [
      { text: "Енгізу құрылғысы", correct: true },
      { text: "Шығару құрылғысы", correct: false },
      { text: "Ақпарат оқу құрылғысы", correct: false },
      { text: "Сканерлеу құрылғысы", correct: false },
      { text: "Сақтау құрылғысы", correct: false }
    ]
  },
  {
    id: 79,
    text: "Қай сөйлем дұрыс?",
    answers: [
      {
        text: "Компакт диск – ақпаратты сақтауға арналған құрылғы",
        correct: true
      },
      { text: "Принтер – енгізу құрылғысы", correct: false },
      { text: "CD-ROM – шығару құрылғысы", correct: false },
      { text: "Пернетақта – шығару құрылғысы", correct: false },
      { text: "Монитор – енгізу құрылғысы", correct: false }
    ]
  },
  {
    id: 80,
    text: "Телефондық желі арқылы басқа компьютерлермен ақпарат алмасу құрылғысы:",
    answers: [
      { text: "Модем", correct: true },
      { text: "Телефон", correct: false },
      { text: "Желі", correct: false },
      { text: "Кабель", correct: false },
      { text: "Принтер", correct: false }
    ]
  }
];
