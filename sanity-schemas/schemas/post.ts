export default {
  name: 'post',
  title: 'Новина / Стаття',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Заголовок публікації',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL-адреса (slug)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'publishedAt',
      title: 'Дата публікації',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'category',
      title: 'Категорія',
      type: 'string',
      options: {
        list: [
          { title: 'Служіння та благодійність', value: 'Служіння та благодійність' },
          { title: 'Події спільноти', value: 'Події спільноти' },
          { title: 'Діти та виховання', value: 'Діти та виховання' },
          { title: 'Молодь', value: 'Молодь' },
          { title: 'Оголошення', value: 'Оголошення' },
        ],
      },
    },
    {
      name: 'excerpt',
      title: 'Короткий анонс (excerpt)',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'coverImage',
      title: 'Головне зображення',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'content',
      title: 'Повний текст публікації',
      type: 'text',
      rows: 8,
    },
  ],
};
