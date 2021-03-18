import React from "react";
import ImagePadrao from "../../assets/img/image-padrao.png";
import "./styles.css";
import { useProducts } from "../../context/productsContext";
import Container from "../../components/Container";
import { FaTrash } from "react-icons/fa";

function IngredientsPages() {
  const { listProducts, handleProducts } = useProducts();

  function removeItems(currentItem) {
    const newList = listProducts;
    newList.splice(currentItem, 1);
    localStorage.setItem("products", JSON.stringify(newList));
    handleProducts();
  }

  return (
    <Container>
      <section className="products">
        <div className="title">
          <img src={ImagePadrao} alt="logo" />

          <h1> Lista de Compras</h1>
        </div>
        {listProducts.length > 0 ? (
          <>
            <table>
              <thead>
                <tr>
                  <th>Produtos</th>
                  <th>Métrica</th>
                  <th>Quantidade</th>
                  <th>Remover</th>
                </tr>
              </thead>
              {listProducts &&
                listProducts.map((item, index) => (
                  <>
                    <tbody>
                      <tr key={index}>
                        <td>{item.product}</td>
                        <td>{item.metric}</td>
                        <td>{item.amount}</td>
                        <td>
                          <button onClick={() => removeItems(index)}>
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </>
                ))}
            </table>
            <div className="buttonArea">
              <button
                className="buttonPrint"
                type="button"
                onClick={() => window.print()}
              >
                Imprimir
              </button>
            </div>
          </>
        ) : (
          <div>
            {" "}
            <a href="/app">Você Precisa adicionar items </a>
          </div>
        )}
      </section>
    </Container>
  );
}

export default IngredientsPages;
