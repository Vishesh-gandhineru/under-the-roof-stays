
"use client"

import { useState } from "react"
import { Textarea } from "@/app/_components/ui/textarea"
import Link from "next/link"
import { Button } from "@/app/_components/ui/button"
import CreateProfileSection from "@/app/_components/PerCheckingComponent/CreateProfileSection"
import UploadImageVarification from "@/app/_components/PerCheckingComponent/UploadImageVarification"

export default function Component({searchParams}) {
 
  const {id} = searchParams;

  const [step, setStep] = useState(1)
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="w-full px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        {step === 1 && (
         <UploadImageVarification />
          )}
          {step === 2 && (
            <CreateProfileSection />
          )}
        </div>
        <div className="flex justify-center px-12 md:px-6 mt-6">
          {step === 1 && (
            <div className="flex gap-3">


            <Button
              asChild
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            >
              <Link href={`/percheckin?id=${id}`}>Back</Link>
            </Button>
            <Button
              onClick={() => setStep(2)}
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            >
              Next
            </Button>
            </div>
          )}
          {step === 2 && (
            <div className="flex gap-2 ">
              <Button
                variant="outline"
                onClick={() => setStep(1)}
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              >
                Back
              </Button>
              <Button   
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"              >
                Complete
              </Button>
            
            </div>
          )}
        </div>
    </section>
  )
}

