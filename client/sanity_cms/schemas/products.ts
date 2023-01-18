import {defineType, defineField} from 'sanity'
import {FaFile} from 'react-icons/fa'

const productsType = defineType({
  name: 'products',
  type: 'document',
  title: 'Товары',

  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Название',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Мета ссылка',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
      validation: (Rule: {required: () => any}) => Rule.required(),
    },

    {
      name: 'image_models',
      title: 'Добавить изображения с моделями',
      type: 'array',
      validation: (Rule: {required: () => any}) => Rule.required(),
      of: [
        {
          type: 'image',
        },
      ],
    },
    {
      name: 'category',
      title: 'Категория',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      title: 'Variants',
      name: 'variants',
      type: 'array',
      of: [
        {
          title: 'Variant',
          type: 'productVariant',
        },
      ],
    },
    {
      name: 'description',
      title: 'Описание',
      type: 'string',
    },
    {
      name: 'other_images',
      title: 'Добавить дополнительные изображение изделия',
      type: 'array',

      of: [
        {
          type: 'image',
        },
      ],
    },
  ],
})

export default productsType
