const part1 = [
  {
    id: 1,
    text: "Жеке пікірге тәуелсіз ақпаратты … деп атауға болады:",
    answers: [
      { text: "Объективті", correct: true },
      { text: "Ең анық", correct: false },
      { text: "Актуалды", correct: false },
      { text: "Пайдалы", correct: false },
      { text: "Түсінікті", correct: false }
    ]
  },
  {
    id: 2,
    text: "Жағдайдың ақиқаттығын көрсететін ақпаратты … деп атайды:",
    answers: [
      { text: "Актуальды", correct: true },
      { text: "Ең анық", correct: false },
      { text: "Дұрыс", correct: false },
      { text: "Пайдалы", correct: false },
      { text: "Түсінікті", correct: false }
    ]
  },
  {
    id: 3,
    text: "Компьютерде мәтіндік ақпаратты бейнелегенде қандай қуатты алфавит пайдаланады?",
    answers: [
      { text: "256 символ", correct: true },
      { text: "336 символ", correct: false },
      { text: "456 символ", correct: false },
      { text: "226 символ", correct: false },
      { text: "296 символ", correct: false }
    ]
  },
  {
    id: 4,
    text: "Үлкен арақашықтарда ақпаратты тасымалдайтын құрылым болып не есептеледі?",
    answers: [
      { text: "Почта", correct: true },
      { text: "Радиобайланыс", correct: false },
      { text: "Электрлі телеграф", correct: false },
      { text: "Телефон", correct: false },
      { text: "Компьютерлік желілер", correct: false }
    ]
  },
  {
    id: 5,
    text: "Мәліметтер қоры дегеніміз не?",
    answers: [
      {
        text: "Қоршаған ортадағы объектілер мен құбылыстар туралы мәліметтер, олардың параметрлері мен қасиеттері туралы ақпарат жиынтығы",
        correct: true
      },
      { text: "Сызбалар мен музыкалар жиынтығы", correct: false },
      { text: "Ғылыми білім облысы", correct: false },
      { text: "Түйінді сөздер жиынтығы", correct: false },
      { text: "Кітаптар мен кинофильмдер жиынтығы", correct: false }
    ]
  },
  {
    id: 6,
    text: "Компьютерлік салауаттылық дегеніміз:",
    answers: [
      {
        text: "ЭЕМ-ді қолданып оқу, жазу, санау, сурет салу және ақпарат іздеу әрекеттерін орындай білу",
        correct: true
      },
      { text: "Оқу және жаза білу", correct: false },
      { text: "Таңбалар мен сигналдарды бейнелеу", correct: false },
      { text: "Ғылыми зерттеулер жүргізу", correct: false },
      { text: "Ақпарат алу теориясын меңгеру", correct: false }
    ]
  },
  {
    id: 7,
    text: "Мәндердің шектеулі тізбектелген сандарын қабылдайтын сигнал қалай аталады?",
    answers: [
      { text: "Дискретті", correct: true },
      { text: "Үзіліссіз", correct: false },
      { text: "Сатылық", correct: false },
      { text: "Ықтималдық", correct: false },
      { text: "Тізбектілі", correct: false }
    ]
  },
  {
    id: 8,
    text: "Егер экранда тышқан белгісі болмаса:",
    answers: [
      {
        text: "Тышқан жүйелік блокқа қосылмаған немесе дұрыс қосылмаған",
        correct: true
      },
      { text: "Операциялық жүйе дұрыс жүктелмеген", correct: false },
      { text: "Өте көп терезелер ашық", correct: false },
      { text: "Дискіжетегіш жарамсыз", correct: false },
      { text: "Монитор қосылмаған", correct: false }
    ]
  },
  {
    id: 9,
    text: "Компьютер жұмыс істемей, тұрып қалғанда не істеу керек?",
    answers: [
      {
        text: "Ctrl + Alt + Delete пернелерін басып, компьютерді қайта жүктеу",
        correct: true
      },
      { text: "Мониторды өшіру", correct: false },
      { text: "Барлық терезені жабу", correct: false },
      { text: "Қуат көзін бірден өшіру", correct: false },
      { text: "Дискетаны салу және алу", correct: false }
    ]
  },
  {
    id: 10,
    text: "Компьютер қосылып тұрғанда қандай әрекеттерді жасауға болмайды?",
    answers: [
      { text: "Сыртқы құрылғыларды қосу және өшіру", correct: true },
      { text: "Ctrl + Alt + Delete басу", correct: false },
      { text: "Reset батырмасын басу", correct: false },
      { text: "Дискетаны салу", correct: false },
      { text: "Барлық терезені жабу", correct: false }
    ]
  },

  {
    id: 11,
    text: "Компьютердің орындалуы арнайы тілде жазылған әрекеттер тізбегі қалай аталады?",
    answers: [
      { text: "Программа", correct: true },
      { text: "Нұсқау", correct: false },
      { text: "Файл", correct: false },
      { text: "Команда", correct: false },
      { text: "Конфигурация", correct: false }
    ]
  },
  {
    id: 12,
    text: "Pentium III 600 процессорының атауындағы 600 саны нені білдіреді?",
    answers: [
      { text: "Процессордың тактілік жиілігін (МГц)", correct: true },
      { text: "Процессордың бағасын", correct: false },
      { text: "Процессордың типін", correct: false },
      { text: "Монитор өлшемін", correct: false },
      { text: "Процессор маркасын", correct: false }
    ]
  },
  {
    id: 13,
    text: "Компьютердің жұмыс өнімділігі неге байланысты?",
    answers: [
      { text: "Процессор жиілігіне", correct: true },
      { text: "Экран өлшеміне", correct: false },
      { text: "Қуат көзіне", correct: false },
      { text: "Перне басу жылдамдығына", correct: false },
      { text: "Қатты диск көлеміне", correct: false }
    ]
  },
  {
    id: 14,
    text: "Алмасу буферінен мәтінді қойған кезде мәтін қай жерге қойылады?",
    answers: [
      { text: "Курсор тұрған орынға", correct: true },
      { text: "Мәтіннің соңына", correct: false },
      { text: "Мәтіннің басына", correct: false },
      { text: "Жеке бетке", correct: false },
      { text: "Жеке файлға", correct: false }
    ]
  },
  {
    id: 15,
    text: "Кодтау жүйесі дегеніміз не?",
    answers: [
      {
        text: "Нысандарды кодпен белгілеу ережелерінің жиынтығы",
        correct: true
      },
      { text: "Программалық қамтамасыз ету", correct: false },
      { text: "Ақпарат жиынтығы", correct: false },
      { text: "Нақты дүниені бейнелеу", correct: false },
      { text: "ЭЕМ арқылы бейнелеу", correct: false }
    ]
  },
  {
    id: 16,
    text: "ЭЕМ-де ақпарат қалай белгіленеді?",
    answers: [
      { text: "0 және 1 сандары арқылы", correct: true },
      { text: "Сандар мен әріптер арқылы", correct: false },
      { text: "Латын әріптерімен", correct: false },
      { text: "Әртүрлі символдармен", correct: false },
      { text: "Командалармен", correct: false }
    ]
  },
  {
    id: 17,
    text: "8 биттен тұратын екілік сөз көмегімен неше түрлі символ кодтауға болады?",
    answers: [
      { text: "256", correct: true },
      { text: "128", correct: false },
      { text: "64", correct: false },
      { text: "32", correct: false },
      { text: "16", correct: false }
    ]
  },
  {
    id: 18,
    text: "Сан цифрының позициясы қалай аталады?",
    answers: [
      { text: "Разряд", correct: true },
      { text: "Бит", correct: false },
      { text: "Байт", correct: false },
      { text: "Жүйе", correct: false },
      { text: "Кбайт", correct: false }
    ]
  },
  {
    id: 19,
    text: "Компьютерлік графика бейнелердің қалыптасуына байланысты қалай жіктеледі?",
    answers: [
      { text: "Растрлік және векторлық", correct: true },
      { text: "Векторлық және инженерлік", correct: false },
      { text: "Растрлік және анимациялық", correct: false },
      { text: "Нүктелік және сызықтық", correct: false },
      { text: "Қара-ақ және түрлі түсті", correct: false }
    ]
  },
  {
    id: 20,
    text: "Ақпараттың өлшем бірлігі:",
    answers: [
      { text: "Бит және байт", correct: true },
      { text: "Стек және регистр", correct: false },
      { text: "Бит және слот", correct: false },
      { text: "Байт және стек", correct: false },
      { text: "Модем және ұяшық", correct: false }
    ]
  },

  {
    id: 21,
    text: "1 Кбайт нешеге тең?",
    answers: [
      { text: "1024 байт", correct: true },
      { text: "1000 бит", correct: false },
      { text: "1000 байт", correct: false },
      { text: "1024 бит", correct: false },
      { text: "1042 байт", correct: false }
    ]
  },
  {
    id: 22,
    text: "Байт дегеніміз не?",
    answers: [
      { text: "8 биттен тұратын тізбек", correct: true },
      { text: "Үлкен әріптер жиынтығы", correct: false },
      { text: "Жедел жадтағы ақпарат", correct: false },
      { text: "Ең үлкен сыйымдылық", correct: false },
      { text: "Диск аймағы", correct: false }
    ]
  },
  {
    id: 23,
    text: "Санау жүйесі дегеніміз не?",
    answers: [
      {
        text: "Сандарды белгілі бір мәні бар символдар көмегімен бейнелеу тәсілі",
        correct: true
      },
      { text: "Түйінді сөздер жиынтығы", correct: false },
      { text: "Кодтау ережелері", correct: false },
      { text: "Экспоненциалдық жазу", correct: false },
      { text: "Тұрақты үтірлі жазу", correct: false }
    ]
  },
  {
    id: 24,
    text: "Санау жүйелері кескіндеу тәсіліне қарай қалай бөлінеді?",
    answers: [
      { text: "Позициялық және позициялық емес", correct: true },
      { text: "Арабтық және римдік", correct: false },
      { text: "Латындық", correct: false },
      { text: "Разрядтық", correct: false },
      { text: "Арнайы", correct: false }
    ]
  },
  {
    id: 25,
    text: "Санау жүйесінің неше түрі белгілі?",
    answers: [
      { text: "4", correct: true },
      { text: "5", correct: false },
      { text: "3", correct: false },
      { text: "1", correct: false },
      { text: "2", correct: false }
    ]
  },
  {
    id: 26,
    text: "Санды жазу үшін қолданылатын символдар санын қалай атайды?",
    answers: [
      { text: "Санау жүйесінің негізі", correct: true },
      { text: "Санау жүйесінің базисы", correct: false },
      { text: "Санау жүйесінің көрсеткіші", correct: false },
      { text: "Разряд салмағы", correct: false },
      { text: "Санау жүйесінің алфавиті", correct: false }
    ]
  },
  {
    id: 27,
    text: "Екілік санау жүйесінің негізі неге тең?",
    answers: [
      { text: "2", correct: true },
      { text: "8", correct: false },
      { text: "0", correct: false },
      { text: "1", correct: false },
      { text: "3", correct: false }
    ]
  },
  {
    id: 28,
    text: "Сегіздік санау жүйесінде қолданылатын цифрлар:",
    answers: [
      { text: "0–7", correct: true },
      { text: "0–8", correct: false },
      { text: "1–8", correct: false },
      { text: "2–8", correct: false },
      { text: "8–8", correct: false }
    ]
  },
  {
    id: 29,
    text: "Он алтылық санау жүйесінде қолданылатын цифрлар:",
    answers: [
      { text: "0–9 және A–F", correct: true },
      { text: "A–Q", correct: false },
      { text: "0–15", correct: false },
      { text: "0–7", correct: false },
      { text: "2–8", correct: false }
    ]
  },
  {
    id: 30,
    text: "Бір санау жүйесінен екіншісіне көшіру үшін не қолданылады?",
    answers: [
      { text: "Аудару ережесі", correct: true },
      { text: "Аудару кестелері", correct: false },
      { text: "Стандарттар", correct: false },
      { text: "Енгізу құрылғысы", correct: false },
      { text: "Шығару құрылғысы", correct: false }
    ]
  },

  {
    id: 31,
    text: "Екілік санау жүйесінде ондық 4 саны қалай жазылады?",
    answers: [
      { text: "100", correct: true },
      { text: "111", correct: false },
      { text: "101", correct: false },
      { text: "110", correct: false },
      { text: "010", correct: false }
    ]
  },
  {
    id: 32,
    text: "Есептегіш құрылғыларда екілік санау жүйесін пайдалану ойы кімге тән?",
    answers: [
      { text: "Г. Лейбниц", correct: true },
      { text: "Ч. Бэббидж", correct: false },
      { text: "Б. Паскаль", correct: false },
      { text: "Дж. Буль", correct: false },
      { text: "Дж. фон Нейман", correct: false }
    ]
  },
  {
    id: 33,
    text: "ЭЕМ құрылғылары не арқылы қосылады?",
    answers: [
      { text: "Шина", correct: true },
      { text: "Жоғары вольтты өткізгіш", correct: false },
      { text: "Телефон желісі", correct: false },
      { text: "Радиосигнал", correct: false },
      { text: "Кбайт", correct: false }
    ]
  },
  {
    id: 34,
    text: "Екілік санның бір разряды неден тұрады?",
    answers: [
      { text: "1 бит", correct: true },
      { text: "1 байт", correct: false },
      { text: "4 бит", correct: false },
      { text: "3 бит", correct: false },
      { text: "2 бит", correct: false }
    ]
  },
  {
    id: 35,
    text: "Логикалық операцияларға жататын таңбаларды көрсетіңіз:",
    answers: [
      { text: "Ù , Ú , ù , « , à", correct: true },
      { text: "№ , ! , : , ß , \\", correct: false },
      { text: "# , < , > , \" , ù", correct: false },
      { text: "È , Ç , Æ , § , Ù", correct: false },
      { text: "+ , - , × , : , =", correct: false }
    ]
  },
  {
    id: 36,
    text: "A және B ақиқат болғанда қандай логикалық операция орындалады?",
    answers: [
      { text: "Конъюнкция", correct: true },
      { text: "Импликация", correct: false },
      { text: "Терістеу", correct: false },
      { text: "Дизъюнкция", correct: false },
      { text: "Эквивалент", correct: false }
    ]
  },
  {
    id: 37,
    text: "Логикалық «НЕМЕСЕ» операциясы қалай аталады?",
    answers: [
      { text: "Дизъюнкция", correct: true },
      { text: "Логикалық айырма", correct: false },
      { text: "Конъюнкция", correct: false },
      { text: "Импликация", correct: false },
      { text: "Толықтауыш", correct: false }
    ]
  },
  {
    id: 38,
    text: "«ЖӘНЕ» операциясының нәтижесі қашан ақиқат болады?",
    answers: [
      { text: "Екі операнд та ақиқат болғанда", correct: true },
      { text: "Бір операнд ақиқат болғанда", correct: false },
      { text: "Екі операнд алдаушы болғанда", correct: false },
      { text: "Бір операнд алдаушы болғанда", correct: false },
      { text: "Кез келген жағдайда", correct: false }
    ]
  },
  {
    id: 39,
    text: "«НЕМЕСЕ» операциясының нәтижесі қашан ақиқат болады?",
    answers: [
      { text: "Кемінде бір операнд ақиқат болса", correct: true },
      { text: "Барлығы алдаушы болса", correct: false },
      { text: "Екі операнд алдаушы болса", correct: false },
      { text: "Тек екеуі ақиқат болса", correct: false },
      { text: "Ешқашан", correct: false }
    ]
  },
  {
    id: 40,
    text: "Логикалық өрнектің нәтижесі қандай мән қабылдайды?",
    answers: [
      { text: "True және False", correct: true },
      { text: "Integer және Char", correct: false },
      { text: "Real және Boolean", correct: false },
      { text: "Mod және Div", correct: false },
      { text: "Summa және Rang", correct: false }
    ]
  }
];
