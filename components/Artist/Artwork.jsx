import Image from "next/image"
import Link from "next/link"
import React from "react"

const Artwork = ({ artwork }) => {
  return (
    <div key={artwork.name}>
      <Link href={`/artwork/${artwork.slug}`}>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="middle-middle"
          data-aos-duration="1100"
          className="cursor-pointer"
        >
          <div
            className={`hover:scale-105 transition-all duration-200 relative`}
          >
            <Image
              className="hover:brightness-90 transition-all duration-200"
              src={artwork.image.url}
              width={artwork.image.width}
              height={artwork.image.height}
            />
          </div>
          <p className="uppercase tracking-[.3em] text-sm pt-5 text-black dark:text-gray-200">
            {artwork.name}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default Artwork
