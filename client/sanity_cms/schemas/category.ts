export default {
  name: 'category',
  title: 'Категории',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: {
        lowercase: () => {(): any; new (): any; error: {(arg0: string): any; new (): any}}
      }) => Rule.lowercase().error('A category title should be in lower case'),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'parents',
      title: 'Parent categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'category'}],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare(selection: {title: any; media: any}) {
      const {title, media} = selection
      return {
        title: title[0].toUpperCase() + title.slice(1),
        media: media,
      }
    },
  },
}
