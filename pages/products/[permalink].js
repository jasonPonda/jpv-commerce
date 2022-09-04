import Image from "next/image";
import React from "react";
import commerce from "../../lib/commerce";

export async function getStaticProps({ params }) {
    const { permalink } = params;

    const product = await commerce.products.retrieve(permalink, {
        type: 'permalink',
    });

    return {
        props: {
            product,
        },
    };
}

export async function getStaticPaths() {
    const { data: products } = await commerce.products.list();

    return {
        paths: products.map((product) => ({
            params: {
                permalink: product.permalink,
            },
        })),
        fallback: false,
    };
}

export default function ProductPage({ product }) {
    return (
        <React.Fragment>
            <div key={product.id}>
            <Image src={product.media} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price.formatted_with_symbol}</p>
            </div>
        </React.Fragment>
    )
}