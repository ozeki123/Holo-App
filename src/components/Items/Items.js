import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Item from './Item/Item';
import Page from '../Page/Page';
import './Items.scss';

function Items() {
  const [items, setItems] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const getItems = () => {
    axios.get('/items')
      .then((res)=> {
        const myItems = res.data;
        setItems(myItems);
        // console.log(myItems);
      })
      .catch(err => console.log(`Error: ${err}`));
  }

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    // console.log(searchValue);
    if(searchInput !== ''){
      const filteredData = items.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase());
      })
      setFilteredResults(filteredData);
      console.log(filteredData);
    } else{
      setFilteredResults(items)
    }
    
  }

  useEffect(() => {
    getItems();
  }, [])

    return(
      <div className="items-container">
        <main className="items-content">
          <section className="items-section">
            <h1>12 Courts Near You</h1>
            <div className="items-input">
              <input type="text" placeholder='Enter address here' onChange={(e) => searchItems(e.target.value)}></input>
              <div className="input-left">
                <input type="text" placeholder='YYYY/MM/DD' ></input>
                <input type="text" placeholder='1 Guest' ></input>
              </div>
            </div>
            <ul>
              <button>Popular</button>
              <button>Price</button>
              <button>Rating</button>
              <button>Sport</button>
            </ul>
              <div className="item-results">
                {searchInput.length > 1? (
                  filteredResults.map((item, index) => {
                  // console.log(item);
                  return (
                    <div key={item._id}>
                      <Item id={item._id} title={item.title} price={item.price}/>
                    </div>
                  )
                  })
                ) : (
                  items.map((item) => {
                    return(
                      <div key={item._id}>
                        <Item id={item._id} title={item.title} price={item.price}/>
                      </div>
                    )
                  })
                )}
              </div>
              
          </section>
          <div className="map-image">
            map
          </div>
        </main>
      </div>

      
    )
}

export default Items;