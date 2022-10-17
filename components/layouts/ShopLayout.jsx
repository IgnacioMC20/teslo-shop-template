import Head from "next/head"
import { Navbar, SideMenu } from "../ui"

export const ShopLayout = ({ children, title, pageDescription, imageFullUrl }) => {
    return (
        <>
            <Head>
                <title>{`Teslo | ${title}`}</title>
                <meta name='description' content={pageDescription} />

                <meta name='og:title' content={`Teslo | ${title}`} />
                <meta name='og:description' content={pageDescription} />
                {
                    imageFullUrl && (
                        <meta name='og:image' content={imageFullUrl} />
                    )
                }
            </Head>

            <nav>
                <Navbar/>
            </nav>

            <SideMenu />

            <main style={{
                margin: '80px 30px',
                // maxWidth: '1440px',
                paddign: '0px 30px',
            }}>
                {children}
            </main>

            <footer>
                {/* todo: custom footer */}
            </footer>
        </>
    )
}
