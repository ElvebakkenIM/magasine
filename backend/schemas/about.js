import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
    
    }),
    defineField({
      name: 'sorting',
      title: 'Sort Order',
      description: 'The sorting on the webpage (1 = first, 2 = second ...)',
      validation: Rule => Rule.required(),
      type: 'number'
    })
  ],

  orderings: [
    {
      title: 'As website',
      name: 'asWebsite',
      by: [
        {field: 'sorting', direction: 'asc'}
      ]
    }
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
})



// export default{
//     name: 'about',
//     title: 'About',
//     type: 'document',
//     fields: [
//      {  name: 'name',
//         title: 'Name',
//         type: 'string'
// }]}


    
