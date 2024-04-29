"use client"

import PhoneInput from "@/app/_components/LoginAndSignup/LoginForm"
import SignupForm from "@/app/_components/LoginAndSignup/SignupForm"



import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../_components/ui/tabs"

export default function login() {



  return (
    <main className="my-[60px]">
       <article className="h-fit m-8">
         <section className="mb-[50px]">
         <h1 className="text-red-800 text-5xl font-bold uppercase text-center">
          Login
         </h1>
         </section>
         <section>

    <Tabs defaultValue="Login" className="w-[50%] m-auto">
      <TabsList className="grid w-full grid-cols-2 mb-6">
        <TabsTrigger value="Login">Login</TabsTrigger>
        <TabsTrigger value="Singup">Signup</TabsTrigger>
      </TabsList>
      <TabsContent value="Login">
      <PhoneInput />
      </TabsContent>
      <TabsContent value="Singup">
      <SignupForm />
      </TabsContent>
    </Tabs>
        
         </section>
          </article>
     </main>
  )
}
