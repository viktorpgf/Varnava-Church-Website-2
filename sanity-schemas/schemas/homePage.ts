export default {
  name: 'homePage',
  title: 'Головна сторінка',
  type: 'document',
  fields: [
    {
      name: 'heroTitle',
      title: 'Головний заголовок (Hero Title)',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'heroSubtitle',
      title: 'Підзаголовок / Опис першого екрану',
      type: 'text',
      rows: 3,
    },
    {
      name: 'heroCtaText',
      title: 'Текст головної кнопки дії',
      type: 'string',
      initialValue: 'Завітати на богослужіння',
    },
    {
      name: 'heroSecondaryCtaText',
      title: 'Текст другорядної кнопки',
      type: 'string',
      initialValue: 'Дізнатися більше про нас',
    },
    {
      name: 'heroImage',
      title: 'Головне фото храму / зали',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'welcomeQuote',
      title: 'Біблійний вірш або вітальне слово',
      type: 'object',
      fields: [
        { name: 'text', title: 'Текст вірша', type: 'text', rows: 2 },
        { name: 'authorOrReference', title: 'Посилання на Писання', type: 'string' },
      ],
    },
    {
      name: 'aboutSnippet',
      title: 'Блок «Про нашу церкву»',
      type: 'object',
      fields: [
        { name: 'headline', title: 'Заголовок секції', type: 'string' },
        { name: 'paragraph1', title: 'Основний текст (абзац 1)', type: 'text', rows: 4 },
        { name: 'paragraph2', title: 'Додатковий текст (абзац 2)', type: 'text', rows: 4 },
        {
          name: 'values',
          title: 'Ключові цінності церкви',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', title: 'Назва цінності', type: 'string' },
                { name: 'description', title: 'Короткий опис', type: 'text', rows: 2 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'communitySection',
      title: 'Секція «Життя спільноти» (Фотогалерея)',
      type: 'object',
      fields: [
        { name: 'title', title: 'Заголовок блоку', type: 'string' },
        { name: 'subtitle', title: 'Підзаголовок', type: 'string' },
        { name: 'description', title: 'Короткий опис', type: 'text', rows: 2 },
        {
          name: 'photos',
          title: 'Фотографії спільноти',
          type: 'array',
          of: [
            {
              type: 'image',
              options: { hotspot: true },
              fields: [
                { name: 'caption', title: 'Підпис до фото', type: 'string' },
                { name: 'alt', title: 'Альтернативний текст (alt)', type: 'string' },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'servicesSection',
      title: 'Секція розкладу богослужінь',
      type: 'object',
      fields: [
        { name: 'title', title: 'Заголовок секції', type: 'string' },
        { name: 'subtitle', title: 'Підзаголовок', type: 'string' },
        {
          name: 'services',
          title: 'Список богослужінь',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'id', title: 'Ідентифікатор', type: 'string' },
                { name: 'title', title: 'Назва зустрічі', type: 'string' },
                { name: 'day', title: 'День тижня', type: 'string' },
                { name: 'time', title: 'Час проведення', type: 'string' },
                { name: 'audience', title: 'Для кого (аудиторія)', type: 'string' },
                { name: 'description', title: 'Опис зустрічі', type: 'text', rows: 3 },
                { name: 'locationName', title: 'Локація / зал', type: 'string' },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'locationSection',
      title: 'Секція локації та як дістатися',
      type: 'object',
      fields: [
        { name: 'title', title: 'Заголовок секції', type: 'string' },
        { name: 'description', title: 'Опис розташування', type: 'text', rows: 2 },
        { name: 'transportInfo', title: 'Як доїхати громадським транспортом', type: 'text', rows: 3 },
        { name: 'parkingInfo', title: 'Інформація про паркування', type: 'text', rows: 2 },
      ],
    },
  ],
};
