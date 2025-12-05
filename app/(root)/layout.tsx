import Navbar from "@/components/Navbar"

const RootLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <div>
      <Navbar />
        {children}
    </div>
  )
}

export default RootLayout