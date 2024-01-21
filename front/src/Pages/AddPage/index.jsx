import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { Helmet } from "react-helmet-async";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { SearchContext } from "../../Context/SearchContext";

function AddPage() {
  const [addData, setaddData] = useState([]);
  const { search, handleSearch } = useContext(SearchContext);
  const [sortedProperty, setSortedProperty] = useState(null);

  useEffect(() => {
    getALL();
  }, []);

  function getALL() {
    fetch("http://localhost:3200")
      .then((res) => res.json())
      .then((data) => setaddData(data));
  }

  function handleAdd(value) {
    fetch("http://localhost:3200", {
      method: "POST",
      body: JSON.stringify(value),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    getALL();
  }
  function handleDelete(id) {
    fetch(`http://localhost:3200/${id}`, {
      method: "DELETE",
    });
    // .then((res) => res.json())
    // .then((data) => console.log(data));
    getALL();
  }
  return (
    <div>
      <Helmet>
        <title>Add Page</title>
      </Helmet>

      <div className="formik">
        <Formik
          initialValues={{ image: "", name: "", description: "", price: "" }}
          validationSchema={Yup.object({
            image: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Required"),
            name: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
            description: Yup.string().required("Required"),
            price: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              handleAdd(values);
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <label htmlFor="image">image</label>
            <Field name="image" type="text" />

            <label htmlFor="name"> Name</label>
            <Field name="name" type="text" />

            <label htmlFor="description">description </label>
            <Field name="description" type="text" />

            <label htmlFor="price"> price</label>
            <Field name="price" type="number" />

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
      <div className="search">
        <input
          type="text"
          name=""
          placeholder="search"
          onChange={(x) => handleSearch(x)}
        />
        <button
          onClick={() => setSortedProperty({ property: name, asc: true })}
        >
          A-z
        </button>
        <button
          onClick={() => setSortedProperty({ property: name, asc: false })}
        >
          z-a
        </button>
        <button
          onClick={() => setSortedProperty(null)}
        >
          default
        </button>
      </div>

      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {addData.filter((x)=>x.name.toLowerCase().includes(search.toLowerCase()))
              // .filter((x) =>
              //   x.name.toLowerCase().includes(search.toLowerCase())
              // )
              .sort((a, b) => { 
                if (sortedProperty && sortedProperty.asc) {
                  a[sortedProperty.property] > b[sortedProperty.property]
                    ? 1
                    : b[sortedProperty.property] > a[sortedProperty.property]
                    ? -1
                    : 0
                } else if (sortedProperty && sortedProperty.asc === false) {
                  a[sortedProperty.property] < b[sortedProperty.property]
                    ? 1
                    : b[sortedProperty.property] < a[sortedProperty.property]
                    ? -1
                    : 0
                } else {
                  return 0;
                }
                // (a[sortedProperty.property] > b[sortedProperty.property]) ? 1 : ((b[sortedProperty.property] > a[sortedProperty.property]) ? -1 : 0))
              })
              .map((x) => (
                <tr key={x._id}>
                  <td>{x.image}</td>
                  <td>{x.name}</td>
                  <td>{x.description}</td>
                  <td>{x.price}</td>
                  <td>
                    <i
                      className="fa-solid fa-trash"
                      n
                      onClick={() => {
                        handleDelete(x._id);
                      }}
                    ></i>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AddPage;
