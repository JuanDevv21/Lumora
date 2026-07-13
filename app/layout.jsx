import './globals.css'

const RootLayout = ({children}) => {
  return (
    <html>
      <body>
        <header>
          <title>Lumora</title>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout