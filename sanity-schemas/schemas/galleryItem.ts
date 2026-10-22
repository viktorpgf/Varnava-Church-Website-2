export default {
  name: 'galleryItem',
  title: 'Фотографія галереї',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Назва фотографії / моменту',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Категорія',
      type: 'string',
      options: {
        list: [
          { title: 'Зібрання', value: 'Зібрання' },
          { title: 'Спільнота', value: 'Спільнота' },
          { title: 'Прославлення', value: 'Прославлення' },
          { title: 'Символіка', value: 'Символіка' },
          { title: 'Події', value: 'Події' },
        ],
      },
    },
    {
      name: 'image',
      title: 'Зображення',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Короткий опис',
      type: 'text',
      rows: 2,
    },
  ],
};
