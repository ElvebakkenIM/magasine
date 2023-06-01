import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'inspText',
  title: 'Mid Page Text',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
        name: 'text',
        title: 'Text',
        type: 'text',
    }),
    defineField({
        name: 'page',
        title: 'Page',
        type: 'string',
        options: {
          list: [
            { title: 'Hjem', value: 'hjem' },
            { title: 'På Bakka', value: 'pa-bakka' },
            { title: 'Samf. & Debatt', value: 'samf-og-debatt' },
            { title: 'Kreativt', value: 'kreativt' },
          ],
          layout: 'dropdown'
        }
    })
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'page',
    },
  },
})