import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import Loader from "./Loader";
// import Advertisement from "./Advertisement";

function Products(props) {
  const [data, setData] = useState([]);
  const [lendata, setLendata] = useState([]);
  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [input_price,setInput] = useState(1300)
  const [filterName,setFilterName] = useState("")
  const [filterType, setFilterType]= useState("")
  const [inputChange,setinputChange] = useState(false)
  const neededProducts = 6;

  const handlePrev = () => {
    setPage((prevPage) => {
      // console.log(prevPage); // Log the previous state
      return prevPage - 1;
    });
  };

  const handleNext = () => {
    setPage((prevPage) => {
      // console.log(prevPage); // Log the previous state
      return prevPage + 1;
    });
  };
  // console.log("Current Page", page);

  const handleInput = (eve) => {
    const value = parseInt(eve.target.value,10)
    setInput(value)
    setinputChange(true)
    handleFilter(eve)
  }
  const handleFilter = (event)=>{
    // console.log("i am called - filter change")
    const flName = event.target.value;
    const checked = event.target.checked;
    // console.log(inputChange)
    if (checked || inputChange){
      const ctName = event.target.closest(".flex-column").querySelector('h1').textContent
      setFilterName(flName.toString().toLowerCase().replace(/\s/g, ''))
      setFilterType(ctName.toString().toLowerCase().replace(/\s/g, ''))
      // console.log(filterName)
      // console.log(filterType)
    }
   
    else{
      setFilterName("")
      setFilterType("")
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
      
        const response = await fetch(`https://jordfins.onrender.com/api/product?filterType=${filterType}&filterName=${filterName}`);
        // const response = await fetch(`https://jordfins.onrender.com/api/product?${filterType}&${filterName}`);
        // const response = await fetch(`https://jordfins.onrender.com/api/product/${filterType}/${filterName}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        // setData(JSON.stringify(result))
        
        setLendata(result);
        // console.log(lendata)
        // console.log(data);
        setData(result.slice((page - 1) * neededProducts, page * neededProducts));
        // console.log(data);
      } catch (error) {
        console.error("Error : ", error);
      }
    };
    fetchData().then(() => {
      setFetching(false);
    });
    // console.log(filterName);
    // console.log(filterType);
  }, [page,filterName,filterType])
  const totalPages = Math.ceil(lendata.length / neededProducts);

  return (
    <>
      <div className="products-page">
        <h1 className="catchy-heading">
          Discover Innovation: <span>Unveiling Our Latest JordFins!</span>
        </h1>
        <hr className="products-page-hr" />
        <div className="products-main flex">
          <div className="filter ">
            <h1 className="filter-h1">FILTERS</h1>
            <div className="filters">
              <div
                className={`price-filter flex-column ${
                  props.stat[0] === true ? "h14" : "h30"
                } jc-center filter_filter `}
                id="filter_filter"
              >
                <h1>
                  PRICE &nbsp; &nbsp;
                  <i
                    className={`fa-solid dropdown 000205 ${
                      props.stat[0] === false
                        ? "fa-chevron-up"
                        : "fa-chevron-down"
                    }`}
                    onClick={() => {
                      props.toggle(0);
                    }}
                    id="dropdown"
                  />
                </h1>
                <div
                  className={`price-value-content filter_content ${
                    props.stat[0] === true ? "none" : "flex"
                  }`}
                >
                  <div className="price-filter-value center" id="price_value">
                    {input_price}
                  </div>
                  <label>
                    <sub>500</sub>
                    <input
                      type="range"
                      min={500}
                      max={2000}
                      name="single"
                      value={input_price}
                      step={200}
                      id="filterPrice"
                      onChange={handleInput}
                    />
                    <sub>2000</sub>
                  </label>
                </div>
              </div>
              <div
                className={`type-filter flex-column ${
                  props.stat[1] === true ? "h14" : "h30"
                } jc-center filter_filter`}
              >
                <h1>
                  CATEGORY &nbsp; &nbsp;{" "}
                  <i
                    className={`fa-solid dropdown 000205 ${
                      props.stat[1] === false
                        ? "fa-chevron-up"
                        : "fa-chevron-down"
                    }`}
                    onClick={() => props.toggle(1)}
                    id="pt-1"
                  />
                </h1>
                <div
                  className={`type-filter-content filter_content checkbox-filter-content ${
                    props.stat[1] === true ? "none" : "flex"
                  }`}
                >
                  <label className="center" htmlFor="">
                    <input type="radio" name="single"id=""  onChange ={handleFilter} value="individual"/> Individual
                  </label>
                  <label className="center" htmlFor="">
                    <input type="radio" name="single"id=""  onChange ={handleFilter} value="education"/> Education
                  </label>
                  <label className="center" htmlFor="">
                    <input type="radio" name="single"id=""  onChange ={handleFilter} value="industry"/> Industry
                  </label>
                  <label className="center" htmlFor="">
                    <input type="radio" name="single"id=""  onChange ={handleFilter} value="kitchen"/> Kitchen
                  </label>
                </div>
              </div>
              <div
                className={`voltage-filter flex-column ${
                  props.stat[2] === true ? "h14" : "h30"
                } jc-center filter_filter`}
              >
                <h1>
                  VOLTAGE&nbsp; &nbsp;{" "}
                  <i
                    className={`fa-solid dropdown 000205 ${
                      props.stat[2] === false
                        ? "fa-chevron-up"
                        : "fa-chevron-down"
                    }`}
                    onClick={() => {
                      props.toggle(2);
                    }}
                  />
                </h1>
                <div
                  className={`voltage-filter-content filter_content checkbox-filter-content ${
                    props.stat[2] === true ? "none" : "flex"
                  }`}
                >
                  <label className="center" htmlFor="">
                    <input type="radio" name="single"id=""  onChange ={handleFilter} value="12V * 3"/> 12V * 3
                  </label>
                  <label className="center" htmlFor="">
                    <input type="radio" name="single"id=""  onChange ={handleFilter} value="24V *2"/> 24V *2
                  </label>
                  <label className="center" htmlFor="">
                    <input type="radio" name="single"id=""  onChange ={handleFilter} value="36V*1"/> 36V*1
                  </label>
                </div>
              </div>
              <div
                className={`mah-filter flex-column ${
                  props.stat[3] === true ? "h14" : "h30"
                } jc-center filter_filter`}
              >
                <h1>
                  MAH&nbsp; &nbsp;{" "}
                  <i
                    className={`fa-solid dropdown 000205 ${
                      props.stat[3] === false
                        ? "fa-chevron-up"
                        : "fa-chevron-down"
                    }`}
                    onClick={() => {
                      props.toggle(3);
                    }}
                  />
                </h1>
                <div
                  className={`mah-filter-content filter_content checkbox-filter-content ${
                    props.stat[3] === true ? "none" : "flex"
                  }`}
                >
                  <label className="center" htmlFor="">
                    <input type="radio" name="single"id=""  onChange ={handleFilter} value="1200"/> 1200 mah
                  </label>
                  <label className="center" htmlFor="">
                    <input type="radio" name="single"id=""  onChange ={handleFilter} value="2400"/> 2400 mah
                  </label>
                  <label className="center" htmlFor="">
                    <input type="radio" name="single"id=""  onChange ={handleFilter} value="3600"/> 3600 mah
                  </label>
                  <label className="center" htmlFor="">
                    <input type="radio" name="single"id=""  onChange ={handleFilter} value="5000"/> 5000 mah
                  </label>
                  <label className="center" htmlFor="">
                    <input type="radio" name="single"id=""  onChange ={handleFilter} value="8000"/> 8000 mah
                  </label>
                </div>
              </div>
              <div
                className={`design-filter flex-column ${
                  props.stat[4] === true ? "h14" : "h30"
                } jc-center filter_filter`}
              >
                <h1>
                  DESIGN&nbsp; &nbsp;{" "}
                  <i
                    className={`fa-solid dropdown 000205 ${
                      props.stat[4] === false
                        ? "fa-chevron-up"
                        : "fa-chevron-down"
                    }`}
                    onClick={() => {
                      props.toggle(4);
                    }}
                  />
                </h1>
                <div
                  className={`design-filter filter_content checkbox-filter-content ${
                    props.stat[4] === true ? "none" : "flex"
                  }`}
                >
                  <label className="center" htmlFor="">
                    <input type="radio" name="single"id=""  onChange ={handleFilter} value="Customized"/> Customized
                  </label>
                  <label className="center" htmlFor="">
                    <input type="radio" name="single"id=""  onChange ={handleFilter} value="plain"/> Plain
                  </label>
                  <label className="center" htmlFor="">
                    <input type="radio" name="single"id=""  onChange ={handleFilter} value="Printed"/> Printed
                  </label>
                </div>
              </div>
              <div
                className={`compartments-filter flex-column ${
                  props.stat[5] === true ? "h14" : "h30"
                } jc-center filter_filter`}
              >
                <h1>
                  COMPARTMENTS&nbsp; &nbsp;{" "}
                  <i
                    className={`fa-solid dropdown 000205 ${
                      props.stat[5] === false
                        ? "fa-chevron-up"
                        : "fa-chevron-down"
                    }`}
                    onClick={() => {
                      props.toggle(5);
                    }}
                  />
                </h1>

                <div
                  className={`compartments-filter filter_content checkbox-filter-content ${
                    props.stat[5] === true ? "none" : "flex"
                  }`}
                >
                  <label className="center" htmlFor="">
                    <input type="radio" name="single"id=""  onChange ={handleFilter} value="2"/> 2
                  </label>
                  <label className="center" htmlFor="">
                    <input type="radio" name="single"id=""  onChange ={handleFilter} value="3"/> 3
                  </label>
                  <label className="center" htmlFor="">
                    <input type="radio" name="single"id=""  onChange ={handleFilter} value="4"/> 4
                  </label>
                </div>
              </div>
            </div>
            {/* <Advertisement/> */}
          </div>

          { fetching ?( <Loader/> ): (
            <div className="products">
              <h2 className="products-main-h2">PRODUCTS</h2>
              
              <div className="product-row">
                {data &&
                  data.map((product, index) => {
                    return (
                      <ProductCard
                        key={index}
                        name={product.name}
                        price={product.price}
                        color={product.color}
                        category={product.category}
                        voltage={product.voltage}
                        design={product.design}
                        compartments={product.compartments}
                        mah={product.mah}
                        id={product._id}
                        path={product.path}
                      />
                    );
                  })}
              </div>
              <Pagination
                handlePrev={handlePrev}
                handleNext={handleNext}
                page={page}
                totalPage={totalPages}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Products;
