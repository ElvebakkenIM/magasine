import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post-type',
  title: '-Post-Type',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})
