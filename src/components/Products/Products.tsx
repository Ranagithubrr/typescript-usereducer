import { useEffect, useReducer } from 'react';
import { INITIAL_STATE, postReducer } from '../../reducers/product_reducer';
import Product from '../Product/Product';
import { ActionType } from '../../types/product_types';

function Products() {

  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

  const fetchData = () => {
    dispatch({ type: ActionType.START });
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ActionType.SUCCESS , payload: data });
      })
      .catch((err) => dispatch({ type: ActionType.FAILED }));
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>      
      {
        state.loading && <div className='w-screen h-screen flex items-center justify-center'>
          <span>Loading . . . .</span>
        </div>
      }
      {state.error ? (
        <div>
          <span className='text-red-500 block text-center my-5'>There is an error fetching data</span>
        </div>
      ) : <div className='grid grid-cols-4 gap-4 p-4'>
       { (
        !state.loading &&
        state.post.map((ele) => {
          return (
        <Product Item={ele}/>
        );
        })
        )}
      </div>}
    </div>
  );
}

export default Products;
