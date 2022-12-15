import {defineType} from 'sanity'

const imageType = defineType({
  name: 'images',
  title: 'Изображение',
  type: 'array',
  validation: (Rule: {required: () => any}) => Rule.required(),
  of: [
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
})

export default imageType
