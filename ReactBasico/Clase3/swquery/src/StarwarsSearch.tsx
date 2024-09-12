import { SyntheticEvent, useRef } from 'react'
import PeopleService from '../services/PeopleService';
import ICharacter from '../model/ICharacter';
type StarwarsSearchProps = { onResults?: (r: Array<ICharacter>) => void };

function StarwarsSearch({onResults}: StarwarsSearchProps) {

    const iFilter = useRef<HTMLInputElement>(null);
    const search = async (event: SyntheticEvent) => {
        event.preventDefault();
        const filter = iFilter.current?.value ?? "";
        if (filter) {
          console.log(`Searching REST service for ${filter} ...`);
          const ps = new PeopleService();
          try {
            const filtered = await ps.search(filter);
            console.log('filtered');
            console.log(filtered);

            onResults?.(filtered);
          } catch (error) {
            console.error(error)
          }
        }
      };
      
  return (
    <div className="mb-3">
      <h6>Character Search</h6>
      <form className="row g-3" onSubmit={(event) => search(event)}>
        <input
          type="search"
          className="form-control"
          placeholder="Search here ..."
          ref={iFilter}
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  )
}

export default StarwarsSearch