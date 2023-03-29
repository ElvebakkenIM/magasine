import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post-type',
  title: '-Post Type',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
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
        validation: Rule => Rule.required(),
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
