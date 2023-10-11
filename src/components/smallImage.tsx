import { GatsbyImage, ImageDataLike, getImage } from "gatsby-plugin-image"
import React, { CSSProperties } from 'react';

type Props = {
    imageInput: ImageDataLike | null;
    imageAlt: string;
    imgStyle?: CSSProperties;
    style?: CSSProperties;
}

const SmallImage = ({ imageInput, imageAlt, imgStyle, style }: Props) => {
    
    const image = getImage(imageInput);

    return (
        <>
            {
                (image !== undefined)
                ? <GatsbyImage
                    image={image}
                    alt={imageAlt}
                    imgStyle={imgStyle}
                    style={style}
                />
                : <div>Unable to load image</div>
            }
        </>
    )
}

export default SmallImage;