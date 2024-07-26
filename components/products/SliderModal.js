import React, { useEffect, useState } from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const SliderModal = ({ productsImg }) => {
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    if (
      productsImg &&
      productsImg.length > 0 &&
      Array.isArray(productsImg[0])
    ) {
      setIsloading(false);
    }
  }, [productsImg]);

  if (isLoading)
    return (
      <div className="w-full h-full flex justify-center items-center">
        <p className="text-xl text-center">Cargando... </p>
      </div>
    );

  const imagesArray = productsImg[0]; // Accedemos al primer elemento del array principal

  return (
    <Carousel showThumbs={false}>
      {imagesArray.map((image, index) => (
        <div key={index} className="w-full  h-full   max-lg:h-full">
          <Image
            src={image.src}
            width={image.width || 614} // Ajustar con un valor por defecto
            height={image.height || 406} // Ajustar con un valor por defecto
            alt={`Imagen ${index}`}
            className="w-full h-auto max-md:h-full"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default SliderModal;
