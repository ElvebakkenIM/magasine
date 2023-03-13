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
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'A unique text, click generate',
      validation: Rule => Rule.required(),
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
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'Caption',
      title: 'Caption',
      type: 'string',
      description: 'Describe the picture',
      options: {
        hotspot: true,
      },
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
          { title: 'Samf. & Debatt', value: 'samf-og-debatt' },
          { title: 'Kreativt', value: 'kreativt' },
        ],
      }
    }),






    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'date',
      
      validation: Rule => Rule.required(),
      options: {
        dateFormat: 'DD-MM-YYYY', 
       
      }
      
    }),

    


    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
      description: 'This is where the article is written',
      validation: Rule => Rule.required(),
    
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
