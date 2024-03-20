import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";


function ProductCard({product}) {

    function truncate(str, n){
        return (str.length > n) ? str.slice(0, n-1) + "..." : str;
      };

    return(
        <Card key={product.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={"src/assets/"+product.src} className="img-fluid"/>
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <Card.Title as={Link} to={product.id} className="text-center product-name fs-5">{product.name}</Card.Title>
                <div className="d-flex flex-row justify-content-center align-items-center w-100 gap-1">
                    <Button as={Link} to={product.id} variant="primary product-button" className="w-50 flex-shrink-1" >Detailed view</Button>
                    <Button variant="primary product-button" className="w-50 flex-shrink-1" ><i class="bi bi-cart"></i></Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export {ProductCard};