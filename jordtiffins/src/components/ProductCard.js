import React ,{useEffect}from 'react'

function ProductCard(props) {
  function convertCapital(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  function setColor() {
   
    var dynamicColor = props.color; 

    var colorCircle = document.getElementById(`color-circle-${props.id}`);

    if (dynamicColor && colorCircle) {
      colorCircle.style.backgroundColor = dynamicColor;
    }
  }
  useEffect(() => {
    
    setColor()
  }, []); 
    
  

  return (
    <>
    
    <div className="product-card">
                {
                props.name &&(<div className="product-name">{props.name}</div>)
                }
                <img
                  src={props.path}
                />
                <div className="product-details details-top center">
                  <div className="product-innerdetails">
                    <h4 className="text-muted">Category</h4>
                    <p>{convertCapital(props.category)}</p>
                  </div>
                  <div className="product-innerdetails">
                    <h4 className="text-muted">Color</h4>
                    <p><div class= "color-circle"id={`color-circle-${props.id}`}></div></p>
                  </div>
                  <div className="product-innerdetails">
                    <h4 className="text-muted">Design</h4>
                    <p>{props.design}</p>
                  </div>
                </div>
                <hr
                  className="mt-2 mx-3 F5F1EE"
                  
                />
                <div className="product-details flex">
                  <span className="price-muted"> Price : &nbsp;</span>{" "}
                  <b>{props.price} rs</b>
                </div>
                <hr
                  className="mt-2 mx-3 F5F1EE"
                  
                />
                <div className="product-details center details-bottom">
                  <div className="product-innerdetails">
                    <h4 className="text-muted">Voltage</h4>
                    <p>{props.voltage}</p>
                  </div>
                  <div className="product-innerdetails">
                    <h4 className="text-muted">MAH</h4>
                    <p>{props.mah}</p>
                  </div>
                  <div className="product-innerdetails">
                    <h4 className="text-muted">Compart...</h4>
                    <p>{props.compartments}</p>
                  </div>
                </div>
                <div className="product-details">
                  <button>
                    <a href="/">
                      <b>View More</b>
                    </a>
                  </button>
                </div>
              </div>

    </>
  )
}

export default ProductCard