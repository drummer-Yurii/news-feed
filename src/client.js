import sanityClient from "@sanity/client";

const client = sanityClient({
    projectId: 'tsnlsscs',
    dataset: 'production',
    apiVersion: '2021-03-25',
    useCdn: true,
})

export default client