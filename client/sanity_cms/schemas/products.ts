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
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'imagesModels',
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
      name: 'price',
      title: 'Цена',
      type: 'number',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'productColor',
      title: 'Цвета изделия',
      type: 'array',
      validation: (Rule: {required: () => any}) => Rule.required(),
      of: [
        {
          name: 'color',
          type: 'object',
          title: 'Цвет',
          fields: [
            {
              name: 'nameColor',
              type: 'string',
              title: 'Название цвета',
            },
            {
              name: 'colorCode',
              title: 'Цвет изделия',
              type: 'color',
              validation: (Rule: {required: () => any}) => Rule.required(),
              options: {
                disableAlpha: true,
              },
            },
          ],
        },
      ],
    },

    {
      name: 'description',
      title: 'Описание',
      type: 'string',
    },
  ],
})

export default productsType
