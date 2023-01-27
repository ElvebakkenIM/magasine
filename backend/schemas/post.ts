import { title } from 'process'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Sub-Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      
    }),

    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          { title: 'På Bakka', value: 'pa-bakka' },
          { title: '5 på Bakka', value: '5-pa-bakka' },
          { title: 'Samf. & Debatt',  value: 'samf-debatt' },
          { title: 'Kreativt',  value: 'kreativt' },
        ],
      }
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'array',
      of: [{type: 'reference', to: {type: 'postType'}}],
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'mainImage',
    },
    prepare(selection) {
      const {title, author, media} = selection
      // return {...selection, subtitle: author && `by ${author}`}
      return {
        title: title, // Enklere å lese + endre
        subtitle: `by ${author}`,
        media: media,
      }
    },
  },
})
