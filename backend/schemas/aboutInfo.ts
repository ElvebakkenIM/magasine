import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutInfo',
  title: 'About-Info',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'information',
      title: 'Information',
      type: 'text',
    }),
  ],
})
