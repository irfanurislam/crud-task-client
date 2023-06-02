import { Link, useLoaderData } from 'react-router-dom'

import { useState } from 'react'
import NavBar from './components/NavBar';
import CoffeeCard from './components/CoffeeCard';

const App = () => {

  const loadedCoffees = useLoaderData()
  const [coffees,setCoffees] = useState(loadedCoffees)
  console.log(coffees)


  return (
    <div className='container'>
      <div>
     <NavBar></NavBar>
    </div>

    <div>
    <div className="row">
      {coffees.map((coffee) => (<>
      <div className='col-lg-4 col-md-6 col-sm-12 mb-3'>
        <CoffeeCard
          key={coffee._id}
          coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}
        ></CoffeeCard>
      </div>
        

     </> ))}
    </div>




    </div>
    </div>
  );
};

export default App;