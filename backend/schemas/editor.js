import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'editor',
  title: 'Editors',
  type: 'document',
  fields: [
    defineField({
      name: 'team',
      title: 'Team',
      type: 'string',
      validation: Rule => Rule.required(),
      options: {
        list: [
          { title: 'Redaktør', value: 'redaktor' },
          { title: 'Utvikler/Vedlikeholder', value: 'utv-vedlike' },
        ],
        layout: 'radio',
      }
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'class',
      title: 'Class',
      type: 'string',
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
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
      title: 'name',
      subtitle: 'position',
      media: 'image',
    },
  },
})
