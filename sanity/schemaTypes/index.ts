import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from '@/sanity/products'
import order from './order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema, order],
}
