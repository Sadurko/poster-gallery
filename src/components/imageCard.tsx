import { GatsbyImage, ImageDataLike, getImage } from "gatsby-plugin-image"
import React, { CSSProperties } from 'react';
import {
    cardContainer,
    cardText,
    cardImage,
    cardNoImage
} from './imageCard.module.css';

type Props = {
    imageInput: ImageDataLike | null;
    imageAlt: string;
    text: string;
}

const ImageCard = ({ imageInput, imageAlt, text }: Props) => {
    
    const image = getImage(imageInput);

    return (
        <div className={cardContainer}>
            {
                (image !== undefined)
                ? <GatsbyImage
                    image={image}
                    alt={imageAlt}
                    className={cardImage}
                    />
                : <div className={cardNoImage}>
                    <p>Unable to load image</p>
                  </div>
            }
            
            <div className={cardText}>
                {text}
            </div>
        </div>
    )
}

export default ImageCard;