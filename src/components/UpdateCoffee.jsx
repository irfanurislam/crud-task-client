import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const navigate = useNavigate();
  console.log(coffee);
  const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffee = { name, quantity, supplier, taste, category, details, photo };

    console.log(updatedCoffee);
    fetch(`https://new-coffe-server.vercel.app/coffee/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Update Coffee saved',
            showConfirmButton: false,
            timer: 1500
          })
        navigate('/');
      });
  };

  return (
    <div className="container py-5">
      <h2 className="text-3xl font-extrabold">Update Coffee: {name}</h2>
      <form onSubmit={handleUpdateCoffee}>
        <div className="row">
          <div className="col-md-6 mb-4">
            <label htmlFor="name" className="form-label">
              Coffee Name
            </label>
            <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="form-control" />
          </div>
          <div className="col-md-6 mb-4">
            <label htmlFor="quantity" className="form-label">
              Available Quantity
            </label>
            <input type="text" name="quantity" defaultValue={quantity} placeholder="Available Quantity" className="form-control" />
          </div>
          <div className="col-md-6 mb-4">
            <label htmlFor="supplier" className="form-label">
              Supplier Name
            </label>
            <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier Name" className="form-control" />
          </div>
          <div className="col-md-6 mb-4">
            <label htmlFor="taste" className="form-label">
              Taste
            </label>
            <input type="text" name="taste" defaultValue={taste} placeholder="Taste" className="form-control" />
          </div>
          <div className="col-md-6 mb-4">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <input type="text" name="category" defaultValue={category} placeholder="Category" className="form-control" />
          </div>
          <div className="col-md-6 mb-4">
            <label htmlFor="details" className="form-label">
              Details
            </label>
            <input type="text" name="details" defaultValue={details} placeholder="Details" className="form-control" />
          </div>
          <div className="col-md-12 mb-4">
            <label htmlFor="photo" className="form-label">
              Photo URL
            </label>
            <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="form-control" />
          </div>
          <div className="col-md-12">
            <button type="submit" className="btn btn-primary">
              Update Coffee
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
