export default {
  title: 'Продукт',
  name: 'productVariant',
  type: 'object',
  fields: [
    {
      title: 'Количество',
      name: 'qty',
      type: 'number',
    },
    {
      title: 'Цена',
      name: 'price',
      type: 'number',
    },
    {
      title: 'Цвет изделия',
      name: 'color_name',
      type: 'string',
    },
    {
      name: 'color',
      title: 'Favorite color',
      type: 'color',
    },
    {
      title: 'Добавить размер',
      name: 'sizes',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'images',
      title: 'Изображение изделия ',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
}
