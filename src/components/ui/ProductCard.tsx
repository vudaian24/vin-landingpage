import Image from "next/image"

interface ProductCardProps {
  name: string
  price: string
  imageUrl: string
  canHover?: boolean
  imageUrlHover?: string
  link?: string
}

export default function ProductCard({
  name,
  price,
  imageUrl,
  canHover = false,
  imageUrlHover,
  link = '#'
}: ProductCardProps) {
  return (
    <div className="product-small box text-center group relative w-full max-w-[320px] mx-auto">
      <div className="box-image relative overflow-hidden">
        <div className="image-fade_in_back relative w-full aspect-[765/430]">
          <a href={link} aria-label={name} className="block relative w-full h-full">
            {/* Ảnh chính */}
            <Image
              src={imageUrl}
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-opacity duration-300 ease-in-out"
            />
            {/* Ảnh hover */}
            {canHover && imageUrlHover && (
              <Image
                src={imageUrlHover}
                alt={`${name} Hover`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
              />
            )}
          </a>
        </div>
      </div>

      <div className="box-text box-text-products text-center mt-3">
        <div className="title-wrapper">
          <p className="name product-title text-[17px] font-semibold text-black">
            <a href={link} className="hover:text-[#1464f4] transition-colors duration-300">{name}</a>
          </p>
        </div>
        <div className="price-wrapper mt-1">
          <span className="text-[#1464f4] text-[15px] font-medium">{price}</span>
        </div>
      </div>
    </div>
  )
}
