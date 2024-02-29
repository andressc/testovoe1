import { useEffect, useState } from 'react'

const LOAD_TIME = 3000

export const useImageLoaded = (image: string | undefined) => {
    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            if (!imageLoaded) {
                setImageLoaded(true)
            }
        }, LOAD_TIME)

        const img = new Image()
        img.onload = () => {
            setImageLoaded(true)
        }

        if (image) {
            img.src = image
        }
    }, [image, imageLoaded])

    return { imageLoaded }
}
