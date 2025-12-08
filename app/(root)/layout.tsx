import Navbar from "@/components/Navbar"

const RootLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <div className="w-full relative">
      <Navbar />
        {children}
    </div>
  )
}

export default RootLayout