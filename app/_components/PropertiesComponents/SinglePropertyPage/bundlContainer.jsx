"use client"

import React, { useEffect } from 'react'
import { GetProductFromBundl } from '@/app/_util/bundleAPI';
import BundlCard from './BundlCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/_components/ui/carousel"


const BundlContainer = () => {
 const [ProductData , setProductData] = React.useState();
  const data = GetProductFromBundl("Almere, Flevoland");

  useEffect(() => {

    async function fetchData() {
      const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: '{"input":"Almere, Flevoland"}'
      };
      
     await fetch('https://app.bundl.ai/api/v1/getskus', options , { cache: 'no-store' })
        .then(response => response.json())
        .then(response => {
        setProductData(response.result);
        })
        .catch(err => console.error(err));
    }
    fetchData();
    

  }, []); 

  const ProductContent = ProductData ? ProductData.map((item) => {
    return JSON.parse(item.content)
  }) : [];

  console.log(ProductContent , "productData");
  return (
    <Carousel>
    <CarouselContent>
      { ProductData && ProductContent.map((item) => {
        return (

          <CarouselItem key={item.id}>
            <BundlCard data={item} />
          </CarouselItem>
        )
      })

      }
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
  )
}

export default BundlContainer