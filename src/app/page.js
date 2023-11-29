import { ClerkProvider } from '@clerk/nextjs'
import { UserButton } from "@clerk/nextjs";
import { dark } from '@clerk/themes';
import Navbar from './(components)/notsignin-components/navbar';
import Hero from './(components)/notsignin-components/hero';
export default function App(){
  return(
    <div>


      <Navbar />
      <Hero />
      <UserButton afterSignOutUrl="/"/>

    </div>
  )
}