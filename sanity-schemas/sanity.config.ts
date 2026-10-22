/**
 * Конфігурація для Sanity Studio (Sanity v3)
 * Скопіюйте цей файл у ваш проєкт Sanity Studio або використовуйте його як зразок.
 * 
 * ВАЖЛИВО: Замініть 'YOUR_SANITY_PROJECT_ID' на ваш справжній Project ID,
 * отриманий на https://www.sanity.io/manage
 */
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'church-studio',
  title: 'Церква «Благодать» — Панель керування вмістом',

  // ⚠️ ЗАМІНІТЬ ЦІ ЗНАЧЕННЯ НА ВЛАСНІ:
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'YOUR_SANITY_PROJECT_ID',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Вміст сайту')
          .items([
            // Singleton: Загальні налаштування сайту
            S.listItem()
              .title('Налаштування сайту та реквізити')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            // Singleton: Головна сторінка
            S.listItem()
              .title('Головна сторінка')
              .id('homePage')
              .child(
                S.document()
                  .schemaType('homePage')
                  .documentId('homePage')
              ),
            S.divider(),
            // Колекції
            S.documentTypeListItem('sermon').title('Проповіді'),
            S.documentTypeListItem('post').title('Новини та статті'),
            S.documentTypeListItem('teamMember').title('Команда церкви'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
