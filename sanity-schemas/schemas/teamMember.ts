export default {
  name: 'teamMember',
  title: 'Член команди / Пастор',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Прізвище та ім’я',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Служіння / Посада (наприклад, Старший пастор)',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'department',
      title: 'Напрямок служіння',
      type: 'string',
    },
    {
      name: 'bio',
      title: 'Коротка біографія / про служителя',
      type: 'text',
      rows: 4,
    },
    {
      name: 'photo',
      title: 'Фотографія',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'email',
      title: 'Контактний email',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Контактний телефон',
      type: 'string',
    },
    {
      name: 'order',
      title: 'Порядок сортування (1, 2, 3...)',
      type: 'number',
      initialValue: 10,
    },
  ],
};
