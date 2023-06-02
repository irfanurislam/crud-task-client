import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);
    fetch("https://new-coffe-server.vercel.app/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Add coffee has been saved',
                showConfirmButton: false,
                timer: 1500
              })
        }
      });
  };

  return (
    <div className="bg-light p-4">
      <h2>Add new coffee</h2>

      <form onSubmit={handleAddCoffee}>
        <div className="row mb-4">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Coffee name"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">
                Quantity
              </label>
              <input
                type="text"
                name="quantity"
                placeholder="All quantity"
                className="form-control"
              />
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="supplier" className="form-label">
                Supplier
              </label>
              <input
                type="text"
                name="supplier"
                placeholder="Supplier name"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="taste" className="" />
              <label htmlFor="taste" className="form-label" >
              Taste
            </label>
            <input
              type="text"
              name="taste"
              placeholder="Taste name"
              className="form-control"
            />
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Categories
            </label>
            <input
              type="text"
              name="category"
              placeholder="All categories"
              className="form-control"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="details" className="form-label">
              Details
            </label>
            <input
              type="text"
              name="details"
              placeholder="Description, please"
              className="form-control"
            />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="form-control">
          <label htmlFor="photo" className="form-label">
            Photo URL
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="form-control"
          />
        </div>
      </div>
      <input
        type="submit"
        value="Add Coffee"
        className="btn btn-primary btn-block"
      />
    </form>
  </div>
);
};

export default AddCoffee;
