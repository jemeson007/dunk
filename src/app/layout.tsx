export default function DashboardLayout({ 
  children,
}:{
  children: React.ReactNode
}){
  return(
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <main>{children}</main>
      </body>
    </html>
  )

}