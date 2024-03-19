import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import ProductJSON from "../ProductList.json"
import { ProductCard } from "./ProductCard";

function ProductList() {

    const [productsList, setProductsList] = useState(ProductJSON);


    return(
        <Container className="mt-5">
            <Row>
            {productsList?.map(product => {
            return(
            <Col key={product.id} className='mb-4'>
                <ProductCard product={product} />
            </Col>
            )
        })}
            </Row>
        </Container>
    )
}

export {ProductList};