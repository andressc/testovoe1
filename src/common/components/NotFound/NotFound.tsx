import React from 'react'
import notFoundImage from 'common/assets/images/notFound.webp'
import { InformationPage } from 'common/components/InformationPage/InformationPage'

export const NotFound = () => {
    return <InformationPage title="не найдено" description="Данной страницы нет у нас на сайте" image={notFoundImage} />
}
