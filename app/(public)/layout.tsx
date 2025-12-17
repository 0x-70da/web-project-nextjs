const RootLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <div className="w-full relative">
        {children}
    </div>
  )
}

export default RootLayout