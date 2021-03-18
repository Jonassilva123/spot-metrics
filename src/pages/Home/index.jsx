import React, { useState } from "react";
import Container from "../../components/Container";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../context/productsContext";
import ImagePadrao from "../../assets/img/image-padrao.png";

function Home() {
  const Navigate = useNavigate();
  const [products, setProducts] = useState("");
  const [newList, setNewList] = useState([]);

  const { handleProducts, listProducts } = useProducts();

  function handleSubmit() {
    Navigate("/products", { replace: true });
  }

  function handleChange(event) {
    event.preventDefault();
    setProducts({ ...products, [event.target.name]: event.target.value });
  }

  function addItems() {
    const data = products;
    if (!data.product) {
      return alert("Precisa colocar um ingrediente! Ex: Arroz");
    }
    if (!data.metric) {
      return alert("Precisa colocar uma Métrica! Ex: Kg ou Ml");
    }
    if (!data.amount) {
      return alert("Precisa colocar uma Quantidade! Ex: 1000");
    }
    const list = newList;

    list.push(data);
    setNewList(list);
    localStorage.setItem("products", JSON.stringify(newList));
    setProducts("");

    handleProducts();

    window.document.getElementById("product").value = "";
    window.document.getElementById("metric").value = "";
    window.document.getElementById("amount").value = "";
  }

  return (
    <Container>
      <section className="home">
        <div className="title">
          <img src={ImagePadrao} alt="logo" />
          <div>
            <h1>Adicionar Ingredientes</h1>
            <p>
              Quantidade de Ingredientes: <strong>{listProducts.length}</strong>
            </p>
          </div>
        </div>
        <form>
          <div className="inputArea">
            <div className="inputGroup">
              <input
                onChange={handleChange}
                type="text"
                id="product"
                name="product"
                placeholder="Ingrediente"
              />

              <input
                onChange={handleChange}
                type="Métrica"
                id="metric"
                name="metric"
                placeholder="Metrica"
              />
              <input
                onChange={handleChange}
                type="Métrica"
                id="amount"
                name="amount"
                placeholder="Quantidade"
              />
            </div>

            <div className="buttonArea">
              <button type="button" onClick={addItems}>
                Adicionar
              </button>
              <button onClick={handleSubmit} type="button">
                Lista de Ingredientes
              </button>
            </div>
          </div>
        </form>
      </section>
    </Container>
  );
}

export default Home;
