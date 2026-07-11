import './globals.css'

const RootLayout = ({children}) => {
  return (
    <html>
      <body>
        <head></head>
        <main>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout