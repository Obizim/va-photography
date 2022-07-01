import sanityClient from '@sanity/client'

export const sanity = sanityClient({
    "projectId": "rkig37p9",
    "dataset": "production",
    useCdn: true
})