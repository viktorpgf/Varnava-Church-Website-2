export default {
  name: 'sermon',
  title: 'Проповідь / Богослужіння',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Тема / Заголовок проповіді',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'speaker',
      title: 'Проповідує (спікер)',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Дата виголошення',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'series',
      title: 'Серія проповідей',
      type: 'string',
    },
    {
      name: 'bibleReference',
      title: 'Уривок із Біблії',
      type: 'string',
    },
    {
      name: 'summary',
      title: 'Короткий опис / тези',
      type: 'text',
      rows: 3,
    },
    {
      name: 'coverImage',
      title: 'Обкладинка проповіді',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'videoUrl',
      title: 'Посилання на відео (YouTube)',
      type: 'url',
    },
    {
      name: 'audioUrl',
      title: 'Посилання на аудіозапис',
      type: 'url',
    },
  ],
};
