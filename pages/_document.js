import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.2/dist/flowbite.min.css" />
        <link rel="shortcut icon" href="/images/designo-faviconn.png" />
        <meta name="description" content="Designo is a design and development studio based in London, UK. We specialise in creating websites and mobile apps." />
        <title>Designo</title>
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="https://unpkg.com/flowbite@1.4.2/dist/flowbite.js"></script>
      </body>
    </Html>
  )
}