import React from 'react'
import notFoundImage from 'common/assets/images/notFound.webp'
import { EmptyPage } from 'common/components/EmptyPage/EmptyPage'

export const NotFound = () => {
    return <EmptyPage title="404" description="Страница не найдена" image={notFoundImage} />
}
