import { ClerkProvider } from '@clerk/nextjs'
import { UserButton } from "@clerk/nextjs";
import { dark } from '@clerk/themes';
import Navbar from './(components)/notsignin-components/navbar';
export default function App(){
  return(
    <div>


      <Navbar />
      <UserButton afterSignOutUrl="/"/>

    </div>
  )
}