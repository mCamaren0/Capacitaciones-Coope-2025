import { SyntheticEvent, useRef, useState } from "react";
import IProduct from "../model/IProduct";
import ProductService from "../services/ProductService";

function ProductCreate({onCreate}: {onCreate: () => void}) {
    const [product, setProduct] = useState<IProduct>({} as IProduct);
    const [isValid, setIsValid] = useState<boolean>(false);
    const form = useRef<HTMLFormElement>(null);

    const handleSummit = async (event: SyntheticEvent) => {
        event.preventDefault();
        console.log('Saving product ...');

        const ps = new ProductService();
        await ps.save(product);

        console.log('Product saved');
        onCreate?.();
    }

    function checkValidation(event: SyntheticEvent) {
        console.log('checkValidation');

        const target = event.target as HTMLInputElement;
        
        if(target){
            setIsValid(form.current?.checkValidity() ?? false);

            if(target.validity.valid){
                target.classList.add('is-valid');

                const property = target.name;
                const value = target.value;

                setProduct({ ... product, ... {[property] : value}});
            } else {
                target.classList.add('is-invalid'); 
            }         
    }
}


  return (
    <>
        <h1>Product Create</h1>
        <h3>Create</h3>
        <hr />
        {JSON.stringify(product)}

        <form onSubmit={handleSummit} ref={form}> 
            <br />
            <label htmlFor="">Name</label>
            <input  type="text" 
                    placeholder="Type product name..." 
                    name="productName" 
                    onChange={checkValidation} 
                    required
                    minLength={2}
                    maxLength={32}
                    className="form-control"
            />

            <br />
            <label htmlFor="">Price</label>
            <input  type="number" 
                    placeholder="Type product price..." 
                    name="unitPrice" 
                    onChange={event => checkValidation(event)} 
                    required
                    min={1}
                    className="form-control"
            />

            <button type="submit" disabled={!isValid} className="btn btn-light">Save</button>
        </form>
    </>
  )
}

export default ProductCreate