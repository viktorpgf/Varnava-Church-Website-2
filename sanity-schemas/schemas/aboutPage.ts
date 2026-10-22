export default {
  name: 'aboutPage',
  title: 'Сторінка «Про церкву»',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Заголовок сторінки',
      type: 'string',
      initialValue: 'Про церкву',
    },
    {
      name: 'mainDescription',
      title: 'Головний опис громади (Про нас)',
      type: 'text',
      rows: 4,
    },
    {
      name: 'christCenteredStatement',
      title: 'У центрі нашого життя — Ісус Христос',
      type: 'text',
      rows: 4,
    },
    {
      name: 'communityInvitation',
      title: 'Текст запрошення долучитися',
      type: 'text',
      rows: 3,
    },
    {
      name: 'history',
      title: 'Історія церкви',
      type: 'object',
      fields: [
        { name: 'title', title: 'Заголовок блоку', type: 'string', initialValue: 'Історія церкви' },
        { name: 'foundedDate', title: 'Дата заснування', type: 'string', initialValue: '15 серпня 1995 року' },
        { name: 'description', title: 'Опис історії', type: 'text', rows: 4 },
      ],
    },
    {
      name: 'pastor',
      title: 'Пастор церкви',
      type: 'object',
      fields: [
        { name: 'title', title: 'Заголовок блоку', type: 'string', initialValue: 'Пастор церкви' },
        { name: 'name', title: 'ПІБ пастора', type: 'string', initialValue: 'Марченко Руслан Володимирович' },
        { name: 'description', title: 'Опис служіння пастора', type: 'text', rows: 4 },
        { name: 'photo', title: 'Фото пастора', type: 'image', options: { hotspot: true } },
      ],
    },
    {
      name: 'official',
      title: 'Офіційна інформація',
      type: 'object',
      fields: [
        { name: 'legalName', title: 'Повна назва юридичної особи', type: 'string' },
        { name: 'foundationDate', title: 'Дата заснування', type: 'string' },
        { name: 'pastorFullName', title: 'Пастор', type: 'string' },
        { name: 'city', title: 'Місто', type: 'string' },
      ],
    },
  ],
};
