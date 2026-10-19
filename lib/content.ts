export const contacts = {
  phone: "+7 707 737 33 33",
  phoneHref: "tel:+77077373333",
  whatsappHref: "https://wa.me/77077373333",
  email: "amanatlogistic@inbox.ru",
  address: "г. Алматы, пр. Райымбек, 481А, БЦ «Эталон», 4 эт., офис 5",
};
export const navLinks = [
  { label: "Главная", href: "/" },
  { label: "Грузоперевозка", href: "/cargo" },
  { label: "Автопарк", href: "/fleet" },
  { label: "Галерея", href: "/gallery" },
  { label: "Контакты", href: "/contacts" },
];
export const heroStats = [
  { value: "200 т", label: "Максимальная грузоподъёмность" },
  { value: "15 лет", label: "В сфере логистики" },
  { value: "20+", label: "Единиц собственного транспорта" },
  { value: "24/7", label: "Режим работы" },
];
export const cargoTypes = [
  {
    title: 'Строительные грузы',
    text: 'Блоки, ЖБИ, кирпич, цемент, трубы, плиты перекрытий, арматура и другие строительные материалы.',
    image: '/images/stroy.jpeg',
  },
  {
    title: 'Промышленные грузы',
    text: 'Станки, агрегаты, технологические линии, оборудование любой сложности.',
    image: '/images/promyshlennoe.jpg',
  },
  {
    title: 'Промышленное оборудование',
    text: 'Экскаваторы, бульдозеры, краны, погрузчики, дорожно-строительная и другая техника.',
    image: '/images/industrial-equipment.jpg',
  },
  {
    title: 'Негабаритные грузы',
    text: 'Крупногабаритные и тяжеловесные грузы с оформлением специальных разрешений.',
    image: '/images/negoboritnye.jpg',
  },
  {
    title: 'Спецтехника',
    text: 'Краны, автовышки, буровые установки, дорожная и строительная техника.',
    image: '/images/4.jpeg',
  },
  {
    title: 'Коммерческие товары',
    text: 'ТНП, торговое оборудование, сырье и продукция между городами и регионами.',
    image: '/images/commercial.jpg',
  },
  {
    title: 'Металлоконструкции',
    text: 'Балки, фермы, колонны, резервуары, металлические изделия и конструкции.',
    image: '/images/3.jpeg',
  },
  {
    title: 'И другое',
    text: 'Любые типы грузов по индивидуальному запросу. Найдём оптимальное решение для вашей задачи.',
    image: '/images/tracks.jpg',
  },
]
export const cargoMapContent = {
  eyebrow: "По всем регионам",
  title: "Доставляем грузы",
  titleMuted: "по Казахстану и СНГ.",
  advantages: ["Надёжно и безопасно", "Точно в срок", "Современный автопарк"],
};
export const directions = cargoTypes.map((item) => ({
  tag: "Грузоперевозка",
  title: item.title,
  text: item.text,
  link: { label: "Подробнее", href: "/cargo" },
}));
export const advantages = [
  {
    title: "Подача от 2 часов",
    text: "Оперативное выделение транспорта после подтверждения заявки.",
  },
  {
    title: "Сохранность груза",
    text: "Гарантируем целостность груза на всём маршруте.",
  },
  {
    title: "Полный документооборот",
    text: "Накладные, счета-фактуры и акты выполненных работ — все документы в срок.",
  },
  {
    title: "Собственный парк",
    text: "DAF, Mercedes, Трал — грузоподъёмность от 1 до 200 тонн.",
  },
];
export const fleet = [
  { name: "Газель", type: "Малотоннажный", capacity: "3 т", volume: "—" },
  { name: "DAF", type: "Грузовой", capacity: "5 т", volume: "—" },
  { name: "Mercedes-Benz", type: "Грузовой", capacity: "10 т", volume: "—" },
  {
    name: "Открытая площадка",
    type: "Бортовой",
    capacity: "до 20 т",
    volume: "—",
  },
  {
    name: "Тент",
    type: "Тентованный",
    capacity: "до 20 т",
    volume: "до 92 м³",
  },
  {
    name: "Рефрижератор",
    type: "Изотермический",
    capacity: "20 т",
    volume: "—",
  },
  { name: "Трал", type: "Негабарит", capacity: "до 200 т", volume: "—" },
];
export const galleryImages = [
  { src: "/images/16.jpeg", alt: "Автопарк AMANAT" },
  { src: "/images/17.jpeg", alt: "Автопарк AMANAT" },
  { src: "/images/18.jpeg", alt: "Автопарк AMANAT" },
  { src: "/images/19.jpeg", alt: "Автопарк AMANAT" },
  { src: "/images/20.jpeg", alt: "Автопарк AMANAT" },
  { src: "/images/21.jpeg", alt: "Автопарк AMANAT" },
  { src: "/images/22.jpeg", alt: "Автопарк AMANAT" },
  { src: "/images/23.jpeg", alt: "Автопарк AMANAT" },
  { src: "/images/24.jpeg", alt: "Автопарк AMANAT" },
  { src: "/images/25.jpeg", alt: "Автопарк AMANAT" },
  { src: "/images/26.jpeg", alt: "Автопарк AMANAT" },
  { src: "/images/27.jpeg", alt: "Автопарк AMANAT" },
  { src: "/images/28.jpeg", alt: "Автопарк AMANAT" },
  { src: "/images/29.jpeg", alt: "Автопарк AMANAT" },
  { src: "/images/30.jpeg", alt: "Автопарк AMANAT" },
  { src: "/images/1.jpeg", alt: "Автопарк AMANAT" },
  { src: "/images/2.jpeg", alt: "Автопарк AMANAT" },
  { src: "/images/3.jpeg", alt: "Автопарк AMANAT" },
  { src: "/images/4.jpeg", alt: "Автопарк AMANAT" },
  { src: "/images/5.jpeg", alt: "Автопарк AMANAT" },
  { src: "/images/6.jpeg", alt: "Автопарк AMANAT" },
  { src: "/images/7.jpeg", alt: "Автопарк AMANAT" },
  { src: "/images/8.jpeg", alt: "Автопарк AMANAT" },
  { src: "/images/9.jpeg", alt: "Автопарк AMANAT" },
  { src: "/images/10.jpeg", alt: "Автопарк AMANAT" },
  { src: "/images/11.jpeg", alt: "Автопарк AMANAT" },
  { src: "/images/12.jpeg", alt: "Автопарк AMANAT" },
  { src: "/images/13.jpeg", alt: "Автопарк AMANAT" },
  { src: "/images/14.jpeg", alt: "Автопарк AMANAT" },
  { src: "/images/15.jpeg", alt: "Автопарк AMANAT" },
];
export const services = cargoTypes.map((item) => item.title);
export const standards = [
  {
    title: "Регулярное ТО",
    text: "Каждый автомобиль проходит плановое техническое обслуживание по графику.",
  },
  {
    title: "Опытные водители",
    text: "Водители с многолетним профессиональным стажем.",
  },
  {
    title: "Документы",
    text: "Полный пакет сопроводительных документов на каждый рейс.",
  },
];
export const orderSteps = [
  {
    number: "01",
    title: "Оставьте заявку",
    text: "Укажите маршрут, груз и его вес.",
  },
  {
    number: "02",
    title: "Согласование",
    text: "Менеджер уточнит детали и подберёт транспорт.",
  },
  {
    number: "03",
    title: "Подача транспорта",
    text: "Транспорт прибудет в согласованное время.",
  },
  {
    number: "04",
    title: "Доставка",
    text: "Груз доставлен, документы переданы.",
  },
];
export const materials: { title: string; tag: string; text: string }[] = [];

export const truckSpecs: Record<string, { label: string; value: string }[]> = {
  HOWO: [
    { label: "Грузоподъёмность", value: "25 тонн" },
    { label: "Объём кузова", value: "17–18 м³" },
    { label: "Мощность", value: "336 л.с." },
    { label: "Формула", value: "6×4" },
  ],
  "Mercedes-Benz Arocs": [
    { label: "Грузоподъёмность", value: "25 тонн" },
    { label: "Объём кузова", value: "17–18 м³" },
    { label: "Мощность", value: "450 л.с." },
    { label: "Формула", value: "8×4" },
  ],
  "Shacman X3000": [
    { label: "Грузоподъёмность", value: "40 тонн" },
    { label: "Объём кузова", value: "22–25 м³" },
    { label: "Мощность", value: "480 л.с." },
    { label: "Формула", value: "8×4" },
  ],
  Газель: [
    { label: "Грузоподъёмность", value: "3 тонны" },
    { label: "Тип транспорта", value: "Бортовой грузовой автомобиль" },
    { label: "Применение", value: "Городские и региональные перевозки" },
  ],
  DAF: [
    { label: "Грузоподъёмность", value: "5 тонн" },
    { label: "Тип транспорта", value: "Грузовой автомобиль" },
    { label: "Применение", value: "Городские и междугородние перевозки" },
  ],
  "Mercedes-Benz": [
    { label: "Грузоподъёмность", value: "10 тонн" },
    { label: "Тип транспорта", value: "Грузовой автомобиль" },
    { label: "Применение", value: "Городские и междугородние перевозки" },
  ],
  "Открытая площадка": [
    { label: "Грузоподъёмность", value: "до 20 тонн" },
    { label: "Тип кузова", value: "Открытая площадка" },
    { label: "Погрузка", value: "Верхняя и боковая" },
  ],
  Тент: [
    { label: "Грузоподъёмность", value: "до 20 тонн" },
    { label: "Объём кузова", value: "до 92 м³" },
    { label: "Тип кузова", value: "Тентованный" },
  ],
  Рефрижератор: [
    { label: "Грузоподъёмность", value: "до 20 тонн" },
    { label: "Температурный режим", value: "+20°C до -20°C" },
    { label: "Тип кузова", value: "Рефрижераторный" },
  ],
  Трал: [
    { label: "Грузоподъёмность", value: "до 200 тонн" },
    { label: "Тип транспорта", value: "Тяжеловозный трал" },
    { label: "Применение", value: "Негабаритные и тяжеловесные грузы" },
  ],
};
export const featuredTruck = {
  name: "HOWO",
  text: "Надёжный тяжёлый самосвал для городских маршрутов и строительных площадок.",
  specs: truckSpecs.HOWO,
};

export function whatsappUrl(form: {
  name: string;
  phone: string;
  route: string;
  cargo: string;
  weight: string;
  message: string;
}) {
  const text = [
    `Заявка на грузоперевозку`,
    `Имя: ${form.name}`,
    `Телефон: ${form.phone}`,
    `Маршрут: ${form.route}`,
    `Груз: ${form.cargo}`,
    `Вес: ${form.weight}`,
    form.message ? `Комментарий: ${form.message}` : "",
  ]
    .filter(Boolean)
    .join("\n");
  return `${contacts.whatsappHref}?text=${encodeURIComponent(text)}`;
}
