import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
const Layout = ({ children, title, description, keywords, author }) => {
    return (
        <div>
            <Toaster />
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>
            <Header />
            <main style={{ minHeight: "70vh" }}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

Layout.defaultProps = {
    title: "PEAPOP-A2Z - shop now",
    description: "Marketplace for Everything",
    keywords: "smartphone,laptop,smartwatch,men's wear",
    author: "vinod kewat",
};

export default Layout;