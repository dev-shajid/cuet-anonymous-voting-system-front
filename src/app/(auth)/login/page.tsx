import { FormLogin } from "@/components/formLogin"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login",
};

export default function Login({searchParams}: {searchParams: {callback?:string | null}}) {

  return (
    <section className="flex items-center justify-center container p-4 pt-16">
      <FormLogin callback={searchParams?.callback} />
    </section>
  )
}