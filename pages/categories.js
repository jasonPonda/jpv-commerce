import commerce from "../lib/commerce";
import CategoryList from "../components/CategoryList";
import React from "react";

export async function getStaticProps() {
    const { data: categories } = await commerce.categories.list();

    return {
        props: {
            categories,
        },
    }
}

export default function CategoriesPages({ categories }) {
    return (
        <React.Fragment>
            <h1>Categories</h1>

            <CategoryList categories={categories} />
        </React.Fragment>
    )
}