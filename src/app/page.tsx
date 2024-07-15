'use client'

import React from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import img_01 from '../../public/imagem1.jpg'
import img_02 from '../../public/imagem2.jpg'
import img_03 from '../../public/imagem3.jpg'
import img_04 from '../../public/imagem4.jpg'

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay({ delay: 2000 })])

  return (
    <div className="embla mx-auto mt-12 max-w-lg border h-56" ref={emblaRef}>
      <div className="embla__container h-full">
        <div
          className="embla__slide flex items-center justify-center">
          <Image
            src={img_01}
            alt='Text'
          />
        </div>
        <div
          className="embla__slide flex items-center justify-center">
          <Image
            src={img_02}
            alt='Text'
          />
        </div>
        <div
          className="embla__slide flex items-center justify-center">
          <Image
            src={img_03}
            alt='Text'
          />
        </div>
        <div
          className="embla__slide flex items-center justify-center">
          <Image
            src={img_04}
            alt='Text'
          />
        </div>
      </div>
    </div>
  )
}