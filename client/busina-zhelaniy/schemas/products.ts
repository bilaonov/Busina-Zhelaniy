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
      title: 'Изображение',
      type: 'image',

      validation: (Rule: {required: () => any}) => Rule.required(),
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Описание изображение',
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
          validation: (Rule: {required: () => any}) => Rule.required(),
        },
      ],
    },
    {
      name: 'image2',
      title: 'Изображение 2',
      type: 'image',
    },
    {
      name: 'image3',
      title: 'Изображение 3',
      type: 'image',
    },
    {
      name: 'image4',
      title: 'Изображение 4',
      type: 'image',
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
      name: 'colors',
      title: 'Цвета изделия',
      type: 'array',
      validation: (Rule: {required: () => any}) => Rule.required(),
      of: [
        {
          name: 'color1',
          type: 'object',
          title: 'Цвет 1',
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
