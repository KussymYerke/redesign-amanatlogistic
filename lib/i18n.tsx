"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Language = "kz" | "ru" | "en";

const translations = {
  ru: {
    language: "Язык",
    order: "Оформить заказ",
    mainNavigation: "Основная навигация",
    mobileNavigation: "Мобильная навигация",
    openMenu: "Открыть меню",
    closeMenu: "Закрыть меню",
    navigation: [
      "Главная",
      "Грузоперевозка",
      "Автопарк",
      "Галерея",
      "Контакты",
    ],
    cargo: {
      eyebrow: "Что мы перевозим",
      title: "Грузоперевозки",
      titleMuted: "по Казахстану и СНГ.",
      lead: "Строительные, промышленные, коммерческие и негабаритные грузы. Специальные разрешения для тяжеловесных перевозок на тралах до 200 тонн.",
      calculate: "Рассчитать перевозку",
      fleet: "Смотреть автопарк",
      steps: [
        "Заявка",
        "Расчёт",
        "Подача ТС",
        "Погрузка",
        "Документы",
        "Маршрут",
        "Выгрузка",
      ],
      items: [
        {
          title: "Строительные грузы",
          text: "Блоки, ЖБИ, кирпич, цемент, трубы, плиты перекрытий, арматура и другие строительные материалы.",
        },
        {
          title: "Промышленные грузы",
          text: "Станки, агрегаты, технологические линии, оборудование любой сложности.",
        },
        {
          title: "Промышленное оборудование",
          text: "Экскаваторы, бульдозеры, краны, погрузчики, дорожно-строительная и другая техника.",
        },
        {
          title: "Негабаритные грузы",
          text: "Крупногабаритные и тяжеловесные грузы с оформлением специальных разрешений.",
        },
        {
          title: "Спецтехника",
          text: "Краны, автовышки, буровые установки, дорожная и строительная техника.",
        },
        {
          title: "Коммерческие товары",
          text: "Товары народного потребления, торговое оборудование, сырьё и продукция между городами и регионами.",
        },
        {
          title: "Металлоконструкции",
          text: "Балки, фермы, колонны, резервуары, металлические изделия и конструкции.",
        },
        {
          title: "И другое",
          text: "Любые типы грузов по индивидуальному запросу. Найдём оптимальное решение для вашей задачи.",
        },
      ],
    },
    contactsPage: {
      eyebrow: "Свяжитесь с нами",
      title: "Давайте обсудим вашу перевозку.",
      description:
        "AMANAT Logistic — грузоперевозки по Казахстану и СНГ собственным автопарком от 1 до 200 тонн. Свяжитесь с нами или приезжайте в офис — поможем подобрать транспорт под ваш груз.",
      information: "Контактная информация",
      call: "Позвоните нам",
      email: "Напишите нам",
      address: "Наш адрес",
      social: "Мы в социальных сетях",
      mapTitle: "Как нас найти",
      mapSubtitle: "Офис AMANAT Logistic",
      openMap: "Открыть карту",
      truckAlt: "Грузовик AMANAT Logistic на трассе",
    },
    galleryPage: {
      eyebrow: "Галерея",
      title: "Техника и",
      titleAccent: "перевозки.",
      description:
        "Фотографии нашего транспорта и выполненных перевозок. Нажмите на фото для просмотра.",
      heroAlt: "Грузовой автомобиль AMANAT Logistic на маршруте",
      imageViewer: "Просмотр фотографии",
      close: "Закрыть",
    },
    orderPage: {
      eyebrow: "Оформить заказ",
      title: "Получите расчёт",
      titleMuted: "стоимости бесплатно.",
      lead: "Оставьте заявку — мы свяжемся в течение 10 минут.",
      truckAlt: "Грузовик AMANAT Logistic на трассе",
      coverage: "Перевозки по Казахстану и СНГ",
      availability: "Работаем 24/7",
      benefits: [
        {
          title: "Ответ за 10 минут",
          text: "Менеджер свяжется с вами в рабочее время и уточнит детали перевозки.",
        },
        {
          title: "Бесплатный расчёт",
          text: "Рассчитаем стоимость под ваш груз, маршрут и сроки без обязательств.",
        },
        {
          title: "Надёжная доставка",
          text: "Подберём подходящий транспорт и сопроводим груз до пункта назначения.",
        },
      ],
      form: {
        name: "Ваше имя",
        namePlaceholder: "Имя",
        phone: "Телефон",
        phonePlaceholder: "+7",
        route: "Маршрут",
        routePlaceholder: "Алматы — Астана",
        cargo: "Тип груза",
        cargoPlaceholder: "Выберите тип груза",
        weight: "Вес груза",
        weightPlaceholder: "Например, 20 тонн",
        message: "Комментарий",
        messagePlaceholder: "Дополнительные детали",
        cargoTypes: [
          "Строительные материалы",
          "Промышленное оборудование",
          "Негабаритный груз",
          "Спецтехника",
          "Коммерческие товары",
          "Металлоконструкции",
          "Другое",
        ],
        sent: "Заявка подготовлена",
        submit: "Отправить в WhatsApp",
      },
    },
    advantagesSection: {
      eyebrow: "Почему выбирают нас",
      title: "Доверьте работу",
      titleMuted: "профессионалам.",
      lead: "Подача транспорта, сохранность груза, документы и техническая готовность парка — на каждом рейсе.",
      items: [
        {
          title: "Надёжность",
          text: "Соблюдаем договорённости и сроки, обеспечиваем контроль перевозки на каждом этапе.",
        },
        {
          title: "Сохранность груза",
          text: "Подбираем подходящий транспорт и обеспечиваем бережную перевозку вашего груза.",
        },
        {
          title: "Документы",
          text: "Помогаем с необходимыми документами и сопровождаем перевозку.",
        },
        {
          title: "Готовность техники",
          text: "Поддерживаем автопарк в рабочем состоянии и подбираем технику под задачу.",
        },
      ],
      order: "Оформить заявку",
      call: "Позвонить нам",
      whatsapp: "Написать в WhatsApp",
    },
    directionsSection: {
      eyebrow: "В цифрах",
      title: "Масштаб, который",
      titleMuted: "работает на вас.",
      lead: "Собственный транспорт, тралы для негабарита и круглосуточная диспетчерская — по Алматы и всему региону.",
      stats: [
        { label: "Лет опыта в грузоперевозках" },
        { label: "Довольных клиентов" },
        { label: "Тонн — максимальная грузоподъёмность" },
        { label: "Часа в сутки на связи" },
      ],
    },
    fleetSection: {
      eyebrow: "Наш транспорт",
      title: "Автопарк.",
      titleMuted: "Весь в собственности.",
      lead: "Организуем грузоперевозки по Казахстану и странам СНГ, подбирая оптимальный транспорт под тип, объём и вес вашего груза. В нашем распоряжении — тентованные автомобили, рефрижераторы и тралы. Весь транспорт проходит регулярное техническое обслуживание, а опытные водители обеспечивают надёжную и своевременную доставку.",
      allFleet: "Весь автопарк",
      capacity: "Грузоподъёмность",
      flagship: "Флагман",
      descriptionStart:
        "Собственный транспорт AMANAT Logistic для надёжной перевозки грузов.",
      capacityLabel: "Грузоподъёмность",
      volumeLabel: "объём",
      descriptionEnd:
        "Машина проходит регулярное техническое обслуживание и готова к работе на городских и междугородних маршрутах.",
      truckAlt: "из автопарка AMANAT Logistic",
      types: {
        "Открытая площадка": "Открытая площадка",
        Тент: "Тент",
        Рефрижератор: "Рефрижератор",
        Трал: "Трал",
      },
      specs: {},
    },
    heroSection: {
  imageAlt: 'Грузовик AMANAT Logistic на трассе',
  title: 'Грузоперевозки',
  titleLine2: 'по Казахстану',
  titleAccent: 'и СНГ',
  description:
    'Перевозим строительные, промышленные и коммерческие грузы собственным автопарком. Оформляем специальные разрешения для негабаритных грузов.',
  order: 'Оформить заявку',
},
materialsSection: {
  eyebrow: 'Что мы доставляем',
  title: 'Инертные материалы',
  titleMuted: 'и строительные грузы.',
  lead: 'Профессиональная доставка инертных материалов и вывоз строительного мусора в Алматы и регионе.',
  link: 'Все услуги',
  imageAlt: 'Самосвал выгружает щебень на строительной площадке',
  order: 'Заказать',
},
orderCta: {
  eyebrow: 'Готовы начать?',
  title: 'Получите расчёт',
  titleMuted: 'стоимости бесплатно.',
  lead: 'Оставьте заявку — мы свяжемся в течение 10 минут и рассчитаем стоимость доставки точно под ваш проект.',
  order: 'Оформить заявку',
  whatsapp: 'Написать в WhatsApp',
  channels: [
    {
      title: 'Позвонить',
      text: 'Диспетчерская работает круглосуточно, 24/7.',
      value: 'Позвонить',
    },
    {
      title: 'WhatsApp',
      text: 'Отправьте маршрут, тип и вес груза.',
      value: 'Написать в WhatsApp',
    },
    {
      title: 'Email',
      text: 'Для запросов от компаний и тендерных заявок.',
      value: 'Написать на email',
    },
  ],
},
siteFooter: {
  description: 'Грузоперевозки по Казахстану и СНГ собственным автопарком от 1 до 200 тонн.',
  order: 'Оформить заказ',
  navigationTitle: 'Навигация',
  servicesTitle: 'Услуги',
  contactsTitle: 'Контакты',
  navigation: ['Главная', 'Грузоперевозка', 'Автопарк', 'Галерея', 'Контакты'],
  services: [
    'Строительные грузы',
    'Промышленные грузы',
    'Промышленное оборудование',
    'Негабаритные грузы',
    'Спецтехника',
    'Коммерческие товары',
    'Металлоконструкции',
    'И другое',
  ],
  address: 'г. Алматы, пр. Райымбек, 481А, БЦ «Эталон», 4 эт., офис 5',
  instagramLabel: 'Instagram AMANAT Logistic',
  tiktokLabel: 'TikTok AMANAT Logistic',
  copyright: 'Все права защищены.',
  delivery: 'Доставка по Алматы и региону',
},
standardsSection: {
  eyebrow: 'Стандарты',
  title: 'Качество',
  titleMuted: 'обслуживания.',
  lead: 'Контроль техники, водителей, маршрута и веса — чтобы каждая поставка приходила вовремя и с документами.',
  items: [
    {
      title: 'Регулярное ТО',
      text: 'Каждый автомобиль проходит плановое техническое обслуживание по графику.',
    },
    {
      title: 'Опытные водители',
      text: 'Водители с многолетним профессиональным стажем.',
    },
    {
      title: 'Документы',
      text: 'Полный пакет сопроводительных документов на каждый рейс.',
    },
  ],
},
  },

  kz: {
    language: "Тіл",
    order: "Тапсырыс беру",
    mainNavigation: "Негізгі навигация",
    mobileNavigation: "Мобильді навигация",
    openMenu: "Мәзірді ашу",
    closeMenu: "Мәзірді жабу",
    navigation: [
      "Басты бет",
      "Жүк тасымалы",
      "Автопарк",
      "Галерея",
      "Байланыс",
    ],
    cargo: {
      eyebrow: "Біз қандай жүктерді тасымалдаймыз",
      title: "Жүк тасымалы",
      titleMuted: "Қазақстан мен ТМД бойынша.",
      lead: "Құрылыс, өнеркәсіптік, коммерциялық және габариттен тыс жүктерді тасымалдаймыз. 200 тоннаға дейінгі ауыр жүктерге арнайы рұқсаттар рәсімдейміз.",
      calculate: "Тасымал құнын есептеу",
      fleet: "Автопаркті көру",
      steps: [
        "Өтінім",
        "Есептеу",
        "Көлікті беру",
        "Тиеу",
        "Құжаттар",
        "Бағыт",
        "Түсіру",
      ],
      items: [
        {
          title: "Құрылыс жүктері",
          text: "Блоктар, темірбетон бұйымдары, кірпіш, цемент, құбырлар, жабын плиталары, арматура және басқа құрылыс материалдары.",
        },
        {
          title: "Өнеркәсіптік жүктер",
          text: "Станоктар, агрегаттар, технологиялық желілер және күрделі жабдықтар.",
        },
        {
          title: "Өнеркәсіптік жабдықтар",
          text: "Экскаваторлар, бульдозерлер, крандар, тиегіштер және жол-құрылыс техникасы.",
        },
        {
          title: "Габариттен тыс жүктер",
          text: "Арнайы рұқсаттар рәсімдеу арқылы ірі көлемді және ауыр жүктерді тасымалдау.",
        },
        {
          title: "Арнайы техника",
          text: "Крандар, автогидрокөтергіштер, бұрғылау қондырғылары және құрылыс техникасы.",
        },
        {
          title: "Коммерциялық тауарлар",
          text: "Тұтыну тауарлары, сауда жабдықтары, шикізат және дайын өнімдер.",
        },
        {
          title: "Металл конструкциялар",
          text: "Арқалықтар, фермалар, бағандар, резервуарлар және басқа металл конструкциялар.",
        },
        {
          title: "Басқа жүктер",
          text: "Әртүрлі жүктерді тасымалдап, қажеттілігіңізге сай тиімді шешім ұсынамыз.",
        },
      ],
    },
    contactsPage: {
      eyebrow: "Бізбен байланысыңыз",
      title: "Тасымалыңызды бірге талқылайық.",
      description:
        "AMANAT Logistic — Қазақстан мен ТМД елдері бойынша 1-ден 200 тоннаға дейінгі жүктерді өз автопаркімізбен тасымалдаймыз. Бізге хабарласыңыз немесе кеңсеге келіңіз — жүгіңізге сәйкес көлік таңдауға көмектесеміз.",
      information: "Байланыс ақпараты",
      call: "Бізге қоңырау шалыңыз",
      email: "Бізге жазыңыз",
      address: "Біздің мекенжай",
      social: "Әлеуметтік желілердеміз",
      mapTitle: "Бізді қалай табуға болады",
      mapSubtitle: "AMANAT Logistic кеңсесі",
      openMap: "Картаны ашу",
      truckAlt: "Жолдағы AMANAT Logistic жүк көлігі",
    },
    galleryPage: {
      eyebrow: "Галерея",
      title: "Техника мен",
      titleAccent: "тасымал.",
      description:
        "Көліктеріміз бен орындалған тасымалдардың фотосуреттері. Көру үшін суретті басыңыз.",
      heroAlt: "Бағыттағы AMANAT Logistic жүк көлігі",
      imageViewer: "Фотосуретті қарау",
      close: "Жабу",
    },
    orderPage: {
      eyebrow: "Тапсырыс беру",
      title: "Тасымал құнын",
      titleMuted: "тегін есептеңіз.",
      lead: "Өтінім қалдырыңыз — 10 минут ішінде хабарласамыз.",
      truckAlt: "Жолдағы AMANAT Logistic жүк көлігі",
      coverage: "Қазақстан мен ТМД бойынша тасымал",
      availability: "24/7 жұмыс істейміз",
      benefits: [
        {
          title: "10 минут ішінде жауап",
          text: "Менеджер жұмыс уақытында хабарласып, тасымалдың егжей-тегжейін нақтылайды.",
        },
        {
          title: "Тегін есептеу",
          text: "Жүк, бағыт және мерзімге сәйкес тасымал құнын міндеттемесіз есептейміз.",
        },
        {
          title: "Сенімді жеткізу",
          text: "Қолайлы көлікті таңдап, жүгіңізді межелі жерге дейін жеткізуге көмектесеміз.",
        },
      ],
      form: {
        name: "Атыңыз",
        namePlaceholder: "Атыңызды енгізіңіз",
        phone: "Телефон",
        phonePlaceholder: "+7",
        route: "Бағыт",
        routePlaceholder: "Алматы — Астана",
        cargo: "Жүк түрі",
        cargoPlaceholder: "Жүк түрін таңдаңыз",
        weight: "Жүк салмағы",
        weightPlaceholder: "Мысалы, 20 тонна",
        message: "Түсініктеме",
        messagePlaceholder: "Қосымша мәліметтер",
        cargoTypes: [
          "Құрылыс материалдары",
          "Өнеркәсіптік жабдықтар",
          "Габариттен тыс жүк",
          "Арнайы техника",
          "Коммерциялық тауарлар",
          "Металл конструкциялар",
          "Басқа",
        ],
        sent: "Өтінім дайындалды",
        submit: "WhatsApp арқылы жіберу",
      },
    },
    advantagesSection: {
      eyebrow: "Неліктен бізді таңдайды",
      title: "Жүгіңізді",
      titleMuted: "мамандарға сеніп тапсырыңыз.",
      lead: "Әр рейсте көлікті уақытында ұсынамыз, жүктің сақталуын қамтамасыз етеміз, құжаттарды рәсімдеп, техниканың дайындығын қадағалаймыз.",
      items: [
        {
          title: "Сенімділік",
          text: "Келісілген шарттар мен мерзімдерді сақтап, тасымалдың әр кезеңін бақылаймыз.",
        },
        {
          title: "Жүктің сақталуы",
          text: "Қолайлы көлікті таңдап, жүгіңізді ұқыпты тасымалдауды қамтамасыз етеміз.",
        },
        {
          title: "Құжаттар",
          text: "Қажетті құжаттарды рәсімдеуге көмектесіп, тасымалды сүйемелдейміз.",
        },
        {
          title: "Техниканың дайындығы",
          text: "Автопарктің техникалық жағдайын бақылап, міндетке сай көлік таңдаймыз.",
        },
      ],
      order: "Өтінім қалдыру",
      call: "Қоңырау шалу",
      whatsapp: "WhatsApp арқылы жазу",
    },
    directionsSection: {
      eyebrow: "Сандармен",
      title: "Біздің мүмкіндіктер",
      titleMuted: "сіздің пайдаңызға жұмыс істейді.",
      lead: "Алматы мен бүкіл өңір бойынша жеке көліктер, габариттен тыс жүктерге арналған тралдар және тәулік бойы жұмыс істейтін диспетчерлік қызмет.",
      stats: [
        { label: "Жүк тасымалындағы тәжірибе жылдары" },
        { label: "Қанағаттанған клиенттер" },
        { label: "Тоннаға дейінгі жүк көтергіштігі" },
        { label: "Тәулік бойы байланыстамыз" },
      ],
    },
    fleetSection: {
      eyebrow: "Біздің көліктер",
      title: "Автопарк.",
      titleMuted: "Барлығы өз меншігімізде.",
      lead: "Қазақстан мен ТМД елдері бойынша жүк тасымалын ұйымдастырамыз. Жүктің түріне, көлемі мен салмағына сай көлік таңдаймыз. Автопаркімізде тентті жүк көліктері, рефрижераторлар және тралдар бар. Барлық көлік тұрақты техникалық тексеруден өтеді, ал тәжірибелі жүргізушілер жүкті сенімді әрі уақытында жеткізеді.",
      allFleet: "Барлық көлік",
      capacity: "Жүк көтергіштігі",
      flagship: "Негізгі көлік",
      descriptionStart:
        "AMANAT Logistic компаниясының жүк тасымалдауға арналған жеке көлігі.",
      capacityLabel: "Жүк көтергіштігі",
      volumeLabel: "көлемі",
      descriptionEnd:
        "Көлік тұрақты техникалық қызмет көрсетуден өтеді және қала ішіндегі әрі қалааралық бағыттарда жұмыс істеуге дайын.",
      truckAlt: "AMANAT Logistic автопаркінің көлігі",
      types: {
        "Открытая площадка": "Ашық платформа",
        Тент: "Тентті көлік",
        Рефрижератор: "Рефрижератор",
        Трал: "Трал",
      },
      specs: {},
    },
    heroSection: {
  imageAlt: 'Жолдағы AMANAT Logistic жүк көлігі',
  title: 'Жүк тасымалы',
  titleLine2: 'Қазақстан бойынша',
  titleAccent: 'және ТМД елдеріне',
  description:
    'Құрылыс, өнеркәсіптік және коммерциялық жүктерді жеке автопаркімізбен тасымалдаймыз. Габариттен тыс жүктерге арнайы рұқсаттар рәсімдейміз.',
  order: 'Өтінім қалдыру',
},
materialsSection: {
  eyebrow: 'Біз не тасымалдаймыз',
  title: 'Инeртті материалдар',
  titleMuted: 'мен құрылыс жүктері.',
  lead: 'Алматы мен өңірде инертті материалдарды кәсіби жеткізу және құрылыс қалдықтарын шығару қызметтері.',
  link: 'Барлық қызметтер',
  imageAlt: 'Құрылыс алаңында қиыршық тас түсіріп жатқан самосвал',
  order: 'Тапсырыс беру',
},
orderCta: {
  eyebrow: 'Жұмысты бастауға дайынсыз ба?',
  title: 'Тасымал құнын',
  titleMuted: 'тегін есептеңіз.',
  lead: 'Өтінім қалдырыңыз — 10 минут ішінде хабарласып, жобаңызға сай жеткізу құнын есептейміз.',
  order: 'Өтінім қалдыру',
  whatsapp: 'WhatsApp арқылы жазу',
  channels: [
    {
      title: 'Қоңырау шалу',
      text: 'Диспетчерлік қызмет тәулік бойы, 24/7 жұмыс істейді.',
      value: 'Қоңырау шалу',
    },
    {
      title: 'WhatsApp',
      text: 'Жүк бағытын, түрін және салмағын жіберіңіз.',
      value: 'WhatsApp арқылы жазу',
    },
    {
      title: 'Email',
      text: 'Компаниялар мен тендерлік өтінімдерге арналған.',
      value: 'Email жазу',
    },
  ],
},
siteFooter: {
  description: 'Қазақстан мен ТМД елдері бойынша 1-ден 200 тоннаға дейінгі жүктерді жеке автопаркімізбен тасымалдаймыз.',
  order: 'Тапсырыс беру',
  navigationTitle: 'Навигация',
  servicesTitle: 'Қызметтер',
  contactsTitle: 'Байланыс',
  navigation: ['Басты бет', 'Жүк тасымалы', 'Автопарк', 'Галерея', 'Байланыс'],
  services: [
    'Құрылыс жүктері',
    'Өнеркәсіптік жүктер',
    'Өнеркәсіптік жабдықтар',
    'Габариттен тыс жүктер',
    'Арнайы техника',
    'Коммерциялық тауарлар',
    'Металл конструкциялар',
    'Басқа жүктер',
  ],
  address: 'Алматы қ., Райымбек даңғ., 481А, «Эталон» БО, 4-қабат, 5-кеңсе',
  instagramLabel: 'AMANAT Logistic Instagram парақшасы',
  tiktokLabel: 'AMANAT Logistic TikTok парақшасы',
  copyright: 'Барлық құқықтар қорғалған.',
  delivery: 'Алматы мен өңір бойынша жеткізу',
},
standardsSection: {
  eyebrow: 'Стандарттар',
  title: 'Қызмет',
  titleMuted: 'сапасы.',
  lead: 'Әрбір жүктің уақытында және қажетті құжаттармен жеткізілуі үшін көлікті, жүргізушілерді, маршрутты және жүк салмағын бақылаймыз.',
  items: [
    {
      title: 'Тұрақты техникалық қызмет',
      text: 'Әрбір көлік жоспарға сәйкес тұрақты техникалық тексеруден өтеді.',
    },
    {
      title: 'Тәжірибелі жүргізушілер',
      text: 'Жүргізушілердің кәсіби тәжірибесі мол.',
    },
    {
      title: 'Құжаттар',
      text: 'Әрбір рейске қажетті ілеспе құжаттардың толық пакеті дайындалады.',
    },
  ],
},
  },

  en: {
    language: "Language",
    order: "Place an order",
    mainNavigation: "Main navigation",
    mobileNavigation: "Mobile navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    navigation: ["Home", "Freight", "Fleet", "Gallery", "Contact"],
    cargo: {
      eyebrow: "What we transport",
      title: "Freight transportation",
      titleMuted: "across Kazakhstan and the CIS.",
      lead: "We transport construction, industrial, commercial and oversized cargo. Special permits are arranged for heavy loads of up to 200 tonnes.",
      calculate: "Calculate shipping",
      fleet: "View our fleet",
      steps: [
        "Request",
        "Quote",
        "Vehicle dispatch",
        "Loading",
        "Documents",
        "Transit",
        "Unloading",
      ],
      items: [
        {
          title: "Construction materials",
          text: "Blocks, reinforced concrete products, bricks, cement, pipes, floor slabs, rebar and other construction materials.",
        },
        {
          title: "Industrial cargo",
          text: "Machine tools, machinery, production lines and equipment of varying complexity.",
        },
        {
          title: "Industrial equipment",
          text: "Excavators, bulldozers, cranes, loaders and road construction machinery.",
        },
        {
          title: "Oversized cargo",
          text: "Oversized and heavy loads transported with the required special permits.",
        },
        {
          title: "Special-purpose machinery",
          text: "Cranes, aerial lifts, drilling rigs and road construction machinery.",
        },
        {
          title: "Commercial goods",
          text: "Consumer goods, retail equipment, raw materials and products transported between cities and regions.",
        },
        {
          title: "Steel structures",
          text: "Beams, trusses, columns, tanks and other metal products and structures.",
        },
        {
          title: "Other cargo",
          text: "We handle various types of cargo and find the right solution for your needs.",
        },
      ],
    },
    contactsPage: {
      eyebrow: "Get in touch",
      title: "Let's discuss your shipment.",
      description:
        "AMANAT Logistic provides freight transportation across Kazakhstan and the CIS with our own fleet, handling loads from 1 to 200 tonnes. Contact us or visit our office — we will help you choose the right vehicle for your cargo.",
      information: "Contact information",
      call: "Call us",
      email: "Email us",
      address: "Our address",
      social: "Follow us on social media",
      mapTitle: "Find our office",
      mapSubtitle: "AMANAT Logistic office",
      openMap: "Open map",
      truckAlt: "AMANAT Logistic truck on the road",
    },
    galleryPage: {
      eyebrow: "Gallery",
      title: "Our fleet and",
      titleAccent: "deliveries.",
      description:
        "Photos of our vehicles and completed deliveries. Select a photo to view it.",
      heroAlt: "AMANAT Logistic truck on its route",
      imageViewer: "Photo viewer",
      close: "Close",
    },
    orderPage: {
      eyebrow: "Place an order",
      title: "Get a free",
      titleMuted: "shipping quote.",
      lead: "Submit your request and we will contact you within 10 minutes.",
      truckAlt: "AMANAT Logistic truck on the road",
      coverage: "Freight across Kazakhstan and the CIS",
      availability: "Available 24/7",
      benefits: [
        {
          title: "Response within 10 minutes",
          text: "Our manager will contact you during business hours to confirm your shipment details.",
        },
        {
          title: "Free quote",
          text: "Get a no-obligation quote based on your cargo, route and schedule.",
        },
        {
          title: "Reliable delivery",
          text: "We will select the right vehicle and coordinate your cargo through to its destination.",
        },
      ],
      form: {
        name: "Your name",
        namePlaceholder: "Enter your name",
        phone: "Phone number",
        phonePlaceholder: "+7",
        route: "Route",
        routePlaceholder: "Almaty — Astana",
        cargo: "Cargo type",
        cargoPlaceholder: "Select cargo type",
        weight: "Cargo weight",
        weightPlaceholder: "For example, 20 tonnes",
        message: "Comments",
        messagePlaceholder: "Additional details",
        cargoTypes: [
          "Construction materials",
          "Industrial equipment",
          "Oversized cargo",
          "Special-purpose machinery",
          "Commercial goods",
          "Steel structures",
          "Other",
        ],
        sent: "Request prepared",
        submit: "Send via WhatsApp",
      },
    },
    advantagesSection: {
      eyebrow: "Why choose us",
      title: "Trust your cargo",
      titleMuted: "to the professionals.",
      lead: "On every trip, we coordinate vehicle dispatch, cargo safety, documentation and fleet readiness.",
      items: [
        {
          title: "Reliability",
          text: "We honour our commitments and schedules, monitoring each stage of the transportation process.",
        },
        {
          title: "Cargo safety",
          text: "We select suitable vehicles and handle your cargo with care throughout the journey.",
        },
        {
          title: "Documentation",
          text: "We help prepare the required documents and coordinate the shipment.",
        },
        {
          title: "Fleet readiness",
          text: "We keep our fleet operational and select vehicles to match your requirements.",
        },
      ],
      order: "Place an order",
      call: "Call us",
      whatsapp: "Message us on WhatsApp",
    },
    directionsSection: {
      eyebrow: "At a glance",
      title: "Our scale",
      titleMuted: "works for you.",
      lead: "Our own fleet, low-loaders for oversized cargo and 24/7 dispatch services across Almaty and the wider region.",
      stats: [
        { label: "Years of freight experience" },
        { label: "Satisfied clients" },
        { label: "Tonnes of maximum load capacity" },
        { label: "Hours available every day" },
      ],
    },
    fleetSection: {
      eyebrow: "Our fleet",
      title: "Our fleet.",
      titleMuted: "Entirely company-owned.",
      lead: "We provide freight transportation across Kazakhstan and the CIS, selecting vehicles to suit your cargo type, volume and weight. Our fleet includes curtain-sided trucks, refrigerated trucks and low-loaders. All vehicles receive regular maintenance, and our experienced drivers ensure reliable, timely delivery.",
      allFleet: "Entire fleet",
      capacity: "Load capacity",
      flagship: "Featured vehicle",
      descriptionStart:
        "A company-owned AMANAT Logistic vehicle for reliable freight transportation.",
      capacityLabel: "Load capacity",
      volumeLabel: "volume",
      descriptionEnd:
        "The vehicle receives regular maintenance and is ready for urban and intercity routes.",
      truckAlt: "from the AMANAT Logistic fleet",
      types: {
        "Открытая площадка": "Flatbed truck",
        Тент: "Curtain-sided truck",
        Рефрижератор: "Refrigerated truck",
        Трал: "Low-loader trailer",
        Газель: "Light commercial truck",
      },
      specs: {},
    },
    heroSection: {
  imageAlt: 'AMANAT Logistic truck on the road',
  title: 'Freight',
  titleLine2: 'across Kazakhstan',
  titleAccent: 'and the CIS',
  description:
    'We transport construction, industrial and commercial cargo using our own fleet. We also arrange special permits for oversized loads.',
  order: 'Request a quote',
},
materialsSection: {
  eyebrow: 'What we deliver',
  title: 'Bulk materials',
  titleMuted: 'and construction cargo.',
  lead: 'Professional delivery of bulk materials and construction waste removal in Almaty and the surrounding region.',
  link: 'All services',
  imageAlt: 'Dump truck unloading crushed stone at a construction site',
  order: 'Request a quote',
},
orderCta: {
  eyebrow: 'Ready to get started?',
  title: 'Get a free',
  titleMuted: 'shipping quote.',
  lead: 'Submit a request and we will contact you within 10 minutes with a delivery quote tailored to your project.',
  order: 'Request a quote',
  whatsapp: 'Message us on WhatsApp',
  channels: [
    {
      title: 'Call us',
      text: 'Our dispatch team is available 24/7.',
      value: 'Call now',
    },
    {
      title: 'WhatsApp',
      text: 'Send us your route, cargo type and weight.',
      value: 'Message us on WhatsApp',
    },
    {
      title: 'Email',
      text: 'For business enquiries and tender requests.',
      value: 'Send an email',
    },
  ],
},
siteFooter: {
  description: 'Freight transportation across Kazakhstan and the CIS with our own fleet, handling loads from 1 to 200 tonnes.',
  order: 'Place an order',
  navigationTitle: 'Navigation',
  servicesTitle: 'Services',
  contactsTitle: 'Contact us',
  navigation: ['Home', 'Freight', 'Our Fleet', 'Gallery', 'Contact'],
  services: [
    'Construction cargo',
    'Industrial cargo',
    'Industrial equipment',
    'Oversized cargo',
    'Special-purpose machinery',
    'Commercial goods',
    'Steel structures',
    'Other cargo',
  ],
  address: 'Office 5, 4th floor, Etalon Business Centre, 481A Raiymbek Avenue, Almaty',
  instagramLabel: 'AMANAT Logistic on Instagram',
  tiktokLabel: 'AMANAT Logistic on TikTok',
  copyright: 'All rights reserved.',
  delivery: 'Delivery across Almaty and the surrounding region',
},
standardsSection: {
  eyebrow: 'Our Standards',
  title: 'Service',
  titleMuted: 'quality.',
  lead: 'We monitor vehicles, drivers, routes and cargo weight to ensure every delivery arrives on time with all the required documents.',
  items: [
    {
      title: 'Regular Maintenance',
      text: 'Every vehicle undergoes scheduled maintenance according to plan.',
    },
    {
      title: 'Experienced Drivers',
      text: 'Our drivers have years of professional driving experience.',
    },
    {
      title: 'Documentation',
      text: 'Every shipment is accompanied by a complete set of required documents.',
    },
  ],
},
  },
} as const;

type TranslationDictionary = (typeof translations)[Language];

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: TranslationDictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ru");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("amanat-language");

    if (
      savedLanguage === "kz" ||
      savedLanguage === "ru" ||
      savedLanguage === "en"
    ) {
      setLanguageState(savedLanguage);
    }

    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;

    document.documentElement.lang = language;
    window.localStorage.setItem("amanat-language", language);
  }, [language, ready]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: setLanguageState,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
