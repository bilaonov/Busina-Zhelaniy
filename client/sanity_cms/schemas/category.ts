export default {
  name: 'category',
  title: 'Категории',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
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
      title: 'Products Grid',
      name: 'products',
      type: 'array',
      of: [
        {
          title: 'Product',
          type: 'reference',
          to: [{type: 'products'}],
          options: {
            filter: ({document}: any) => {
              const addedProducts = document.products
                .map((p: {_ref: any}) => p._ref)
                .filter(Boolean)

              return {
                filter: '!(_id in $ids)',
                params: {
                  ids: addedProducts,
                },
              }
            },
          },
        },
      ],
      validation: (Rule: {unique: () => any}) => Rule.unique(),
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
