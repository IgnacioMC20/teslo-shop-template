import { padding } from "@mui/system"
import Head from "next/head"
import { Footer } from "../ui/Footer"
// import { Navbar, SideMenu } from "../ui"

export const AuthLayout = ({ children, title}) => {
    return (
        <>
            <Head>
                <title>{`Teslo | ${title}`}</title>

                <meta name='og:title' content={`Teslo | ${title}`} />
            </Head>

            <main style={{
                backgroundImage: "url('/purplewave.svg')",
                backgroundColor: 'white',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                // height: 'calc(100vh - 30px)',
                height: '100vh',
                // border: '1px solid black',

            }}>
                {children}
            </main>

            {/* <footer style={{height: '30px'}}>
                <Footer />
            </footer> */}
        </>
    )
}
