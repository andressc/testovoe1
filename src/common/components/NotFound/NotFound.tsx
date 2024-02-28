import React from 'react'
import notFoundImage from 'common/assets/images/notFound.webp'
import { EmptyPage } from 'common/components/EmptyPage/EmptyPage'

export const NotFound = () => {
    return <EmptyPage title="не найдено" description="Данной страницы нет у нас на сайте" image={notFoundImage} />
}
