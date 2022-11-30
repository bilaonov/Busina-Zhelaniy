import Head from 'next/head'

interface MetaProps {
    title?: string
    description?: string
    image?: string
}

const Meta = ({
    title = 'text2',
    description = 'text1',
    image = '/icons8-jewel.svg',
}: MetaProps) => {
    let siteTitle = ''

    if (title === 'Busina Zhelaniy') {
        siteTitle = 'Busina Zhelaniy'
    } else {
        siteTitle = `Busina Zhelaniy | ${title}`
    }

    return (
        <Head>
            <title>{siteTitle}</title>

            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
        </Head>
    )
}

export default Meta
