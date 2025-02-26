import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import '../Css/menu.css';
import { Modal, Button } from 'react-bootstrap';
import { FaCheck, FaTimes } from 'react-icons/fa';

function Menu() {
    const products = useSelector((state) => state.products.products);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedType, setSelectedType] = useState("");
    const [selectedIngredients, setSelectedIngredients] = useState([]);

    const openModal = (product) => {
        setSelectedProduct(product);
        setSelectedType("");
        setSelectedIngredients([]);
    };

    const selectType = (type) => {
        setSelectedType(type);
        setSelectedIngredients(selectedProduct.options[type] || []);
    };

    const toggleIngredient = (ingredient) => {
        if (selectedIngredients.includes(ingredient)) {
            setSelectedIngredients(selectedIngredients.filter(i => i !== ingredient));
        } else {
            setSelectedIngredients([...selectedIngredients, ingredient]);
        }
    };

    return (
        <div className="menu-container">
            <h2>Menú</h2>
            <div className="row">
                {products.map((product) => (
                    <div key={product.id} className="col-md-4 mb-3">
                        <div className="card" onClick={() => openModal(product)}>
                            <div className="card-body">
                                <h3 className="product-icon">{product.icon}</h3>
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">Precio: ${product.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* MODAL */}
            {selectedProduct && (
                <Modal show={!!selectedProduct} onHide={() => setSelectedProduct(null)}>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedProduct.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h5>Selecciona el tipo:</h5>
                        <div className="type-buttons">
                            <Button variant="warning" onClick={() => selectType("comun")}>Común</Button>
                            <Button variant="info" onClick={() => selectType("especial")}>Especial</Button>
                            <Button variant="success" onClick={() => selectType("de_la_casa")}>De la Casa</Button>
                        </div>

                        {selectedType && (
                            <>
                                <h5>Ingredientes:</h5>
                                <div className="ingredients-list">
                                    {selectedProduct.options[selectedType].map((ingredient, index) => (
                                        <Button 
                                            key={index} 
                                            className={`ingredient-btn ${selectedIngredients.includes(ingredient) ? 'selected' : ''}`}
                                            onClick={() => toggleIngredient(ingredient)}
                                        >
                                            {selectedIngredients.includes(ingredient) ? <FaTimes className="text-danger" /> : <FaCheck className="text-success" />} 
                                            {ingredient}
                                        </Button>
                                    ))}
                                </div>
                            </>
                        )}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="dark" onClick={() => {
                            toast.success(`${selectedProduct.name} (${selectedType}) agregado con éxito`);
                            setSelectedProduct(null);
                        }}>
                            Confirmar
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    );
}

export default Menu;
