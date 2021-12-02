import Head from "next/head";

const Layout = ({ children, title, classes }) => {
    return (
        <>
            <Head>
                <title>Space Tourism | {title}</title>
                {/* Primary Meta Tags */}
                <meta charSet="UTF-8" />
                <meta name="theme-color" content="#0B0D17" />
                <meta name="title" content={`Space Tourism | ${title}`} />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="" />
                <meta property="og:title" content={`Space Tourism | ${title}`} />
                <meta property="og:description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                <meta property="og:image" content={``} />
                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="" />
                <meta property="twitter:title" content={`Space Tourism | ${title}`} />
                <meta property="twitter:description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                <meta property="twitter:image" content={``} />
            </Head>
            <main className={classes}>
                {children}
            </main>
        </>
    );
};

export default Layout;