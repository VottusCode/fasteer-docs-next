import React from "react"
import tw from "twin.macro"
/** @jsx jsx */
import { css, Global, jsx } from "@emotion/react"

const BodyStyles = () => (
  <Global
    styles={css`
      body {
        font-family: "IBM Plex Sans", sans-serif;
        ${tw`m-0 min-w-full min-h-full w-screen h-screen bg-gray-800`}
      }
      #root {
        ${tw`w-full h-full`}
      }
    `}
  />
)

const PageWrapper = tw.div`flex w-full h-full justify-center items-center`

const Title = tw.h1`text-purple-400 font-medium text-5xl m-0`

const Subtitle = tw.h2`text-gray-200 font-thin text-xl`

const Paragraph = tw.p`m-0 mx-2 text-gray-300 text-center`

const Link = tw.a`text-purple-400 no-underline hover:text-purple-300 transition duration-100 ease-in-out`

const Footer = tw.footer`mt-24 text-center text-gray-400 font-normal`

const App = () => {
  return (
    <React.Fragment>
      <BodyStyles />

      <PageWrapper>
        <div>
          <div tw="text-center">
            <Title>Fasteer.js</Title>
            <Subtitle>
              Small Fastify framework to easily bootstrap your Node.js project!
            </Subtitle>
          </div>

          <div tw="mt-8">
            <Paragraph>
              At the moment, the website and documentation are not available. In
              the meantime, you can read the{" "}
              <Link href="https://github.com/fasteerjs/fasteer#readme">
                README
              </Link>
              .
            </Paragraph>
          </div>

          <Footer>
            2021 &copy; Froneb s.r.o &ndash; All Rights Reserved
            <div tw="mt-1">
              All projects under the{" "}
              <Link href="https://github.com/fasteerjs">@fasteerjs</Link> GitHub
              organization are licensed under MIT.
            </div>
          </Footer>
        </div>
      </PageWrapper>
    </React.Fragment>
  )
}

export default App
