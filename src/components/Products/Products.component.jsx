import React, { useState } from "react";
import css from "./Products.module.css";
import Card from "../UI/Card/Card.component";
const Products = (props) => {
  const data = props.data;
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const itemSearchHandler = (e) => {
    setSearchTerm(e.target.value);
  };
  const itemFilterHandler = (e) => {
    if (e.target.checked) {
      setFilterTerm(e.target.id);
    } else {
      setFilterTerm("");
    }
  };
  return (
    <>
      <div className={css.container}>
        <Card>
          <div className={css.content}>
            <div className={css.filters}>
              <p>Produktart:</p>
              <input
                onChange={itemFilterHandler}
                id="vegetable"
                type="checkbox"
              />
              <label htmlFor="vegetable">Gemüse</label>
              <input onChange={itemFilterHandler} id="fruit" type="checkbox" />
              <label htmlFor="fruit">Obst</label>
              <input onChange={itemFilterHandler} id="bread" type="checkbox" />
              <label htmlFor="bread">Backwaren</label>
              <input onChange={itemFilterHandler} id="meat" type="checkbox" />
              <label htmlFor="meat">Metzgerei</label>
              <input
                onChange={itemFilterHandler}
                id="conventionel"
                type="checkbox"
              />
              <label htmlFor="conventionel">Conventionel</label>
              <input onChange={itemFilterHandler} id="bio" type="checkbox" />
              <label onChange={itemFilterHandler} htmlFor="bio">
                Bio
              </label>
              <input
                className={css.searchInput}
                onChange={itemSearchHandler}
                type="text"
                placeholder="Produkt Suchen"
              />
            </div>
          </div>
        </Card>
        <div className={css.results}>
          <div className={css.itemContainer}>
            {data
              // eslint-disable-next-line
              .filter((item) => {
                if (filterTerm === "") {
                  return item;
                } else if (
                  item.productForm.toLowerCase() === filterTerm.toLowerCase() ||
                  item.type.toLowerCase() === filterTerm.toLowerCase()
                ) {
                  return item;
                }
              })
              // eslint-disable-next-line
              .filter((item) => {
                if (searchTerm === "") {
                  return item;
                } else if (
                  item.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((item) => (
                <Card key={item.id}>
                  <div className={css.itemContentContainer}>
                    <img
                      className={css.itemImage}
                      src={item.img}
                      alt={item.id}
                    />
                    <p>{item.title}</p>
                    <p>{item.ArtikelNr}</p>
                    <p>{item.type}</p>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
