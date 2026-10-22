export default {
  name: 'siteSettings',
  title: 'Налаштування сайту та церкви',
  type: 'document',
  fields: [
    {
      name: 'churchName',
      title: 'Назва церкви',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'tagline',
      title: 'Гасло / Підзаголовок',
      type: 'string',
    },
    {
      name: 'shortDescription',
      title: 'Короткий опис церкви',
      type: 'text',
      rows: 3,
    },
    {
      name: 'logo',
      title: 'Логотип церкви',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'announcement',
      title: 'Термінове оголошення вгорі сайту',
      type: 'object',
      fields: [
        { name: 'enabled', title: 'Увімкнути оголошення', type: 'boolean', initialValue: true },
        { name: 'text', title: 'Текст оголошення', type: 'string' },
        { name: 'link', title: 'Посилання (необов’язково)', type: 'string' },
      ],
    },
    {
      name: 'address',
      title: 'Фізична адреса',
      type: 'object',
      fields: [
        { name: 'street', title: 'Вулиця та номер будинку', type: 'string' },
        { name: 'city', title: 'Місто', type: 'string' },
        { name: 'postalCode', title: 'Поштовий індекс', type: 'string' },
        { name: 'landmark', title: 'Орієнтир / як знайти вхід', type: 'string' },
      ],
    },
    {
      name: 'contacts',
      title: 'Контактна інформація',
      type: 'object',
      fields: [
        { name: 'phone', title: 'Основний телефон', type: 'string' },
        { name: 'secondaryPhone', title: 'Додатковий телефон', type: 'string' },
        { name: 'email', title: 'Електронна пошта', type: 'string' },
        { name: 'officeHours', title: 'Години роботи канцелярії', type: 'string' },
      ],
    },
    {
      name: 'scheduleSummary',
      title: 'Короткий розклад для шапки та футера',
      type: 'object',
      fields: [
        { name: 'sundayMain', title: 'Недільне богослужіння', type: 'string' },
        { name: 'prayerMeeting', title: 'Молитовне служіння', type: 'string' },
        { name: 'youthMeeting', title: 'Молодіжна зустріч', type: 'string' },
      ],
    },
    {
      name: 'socialMedia',
      title: 'Соціальні мережі',
      type: 'object',
      fields: [
        { name: 'youtube', title: 'YouTube канал (трансляції)', type: 'url' },
        { name: 'instagram', title: 'Instagram', type: 'url' },
        { name: 'facebook', title: 'Facebook', type: 'url' },
        { name: 'telegram', title: 'Telegram канал', type: 'url' },
      ],
    },
    {
      name: 'bankDetails',
      title: 'Банківські реквізити для пожертв',
      type: 'object',
      fields: [
        { name: 'recipientName', title: 'Одержувач платежу', type: 'string' },
        { name: 'iban', title: 'IBAN рахунок', type: 'string' },
        { name: 'edrpou', title: 'Код ЄДРПОУ', type: 'string' },
        { name: 'bankName', title: 'Банк одержувача', type: 'string' },
        { name: 'paymentPurpose', title: 'Призначення платежу', type: 'text', rows: 2 },
        { name: 'monobankJarUrl', title: 'Посилання на банку Monobank (опціонально)', type: 'url' },
      ],
    },
    {
      name: 'googleMaps',
      title: 'Карта Google Maps',
      type: 'object',
      fields: [
        { name: 'directLink', title: 'Пряме посилання на Google Maps', type: 'url' },
        { name: 'embedUrl', title: 'URL для вбудовування iFrame (embed)', type: 'url' },
      ],
    },
  ],
};
