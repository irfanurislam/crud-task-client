import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleDelete = () => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <div
        className="card card-side bg-light shadow-sm p-4"
        style={{ height: "38rem" }}
      >
        <img src={photo} className="card-img-top" alt="Coffee" />
        <div className="card-body d-flex justify-content-between mt-4">
          <div>
            <h2 className="card-title">Name: {name}</h2>
            <p>{quantity}</p>
            <p>{supplier}</p>
            <p>{taste}</p>
          </div>
          <div className="d-flex align-items-center">
            <div className="btn-group btn-group-vertical">
            <Link to={`/viewcoffee/${_id}`}>
            <button className="btn btn-primary mb-3">View</button>
            </Link>
              <Link to={`updateCoffee/${_id}`}>
                <button className="btn btn-primary">Edit</button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-danger mt-3"
              >
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
