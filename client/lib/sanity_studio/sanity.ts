import { createClient } from 'next-sanity'

export const config = {
    dataset: 'production',
    token: process.env.SANITY_API_TOKEN,
    projectId: 'vs733ea7',
    apiVersion: 'v2021-10-21',
    useCdn: true,
}

export const client = createClient(config)
