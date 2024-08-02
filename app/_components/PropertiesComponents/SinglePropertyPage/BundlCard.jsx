import React from 'react'
import { Card } from "@/app/_components/ui/card"
import { Button } from "@/app/_components/ui/button"

const BundlCard = ({data}) => {

  return (
    <Card className="w-full max-w-sm overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
    <img src={data.image.src} alt="Product Image" width={500} height={300} className="h-48 w-full object-cover" />
    <div className="p-4 bg-background">
      <h3 className="text-xl font-bold">{data.title}</h3>
      <Button size="lg" className="mt-4">
        Buy Now
      </Button>
    </div>
  </Card>
  )
}

export default BundlCard