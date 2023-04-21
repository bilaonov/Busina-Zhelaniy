import Head from 'next/head'
import React from 'react'
import Meta from '../components/core/Meta/Meta'
import Favorite from '../components/Favorite/Favorite'

const WishList = () => {
    return (
        <>
            <Meta title="Избранное" />

            <Favorite />
        </>
    )
}

export default WishList
