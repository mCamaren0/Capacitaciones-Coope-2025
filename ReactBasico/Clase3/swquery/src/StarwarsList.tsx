import ICharacter from "../model/ICharacter";

type starwarsListProps = {
  products: Array<ICharacter>;
  onSelect?: (p: ICharacter) => void;
};

function StarwarsList({ products, onSelect }: starwarsListProps) {
  if (products && products.length > 0) {
    return (
      <>
        <h6>Character List</h6>
        <ul className="list-group">
          {products.map((p: ICharacter) => (
            <li
              key={p.name || p.index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <h6 className="mb-1">{p.name}</h6>
                <small className="text-muted">Height: {p.height}</small>
                <br />
                <small className="text-muted">Birth year: {p.birth_year}</small>
              </div>
              <i
                className="bi bi-check2-circle"
                style={{ color: "green", cursor: "pointer" }}
                onClick={() => onSelect?.(p)}
              ></i>
            </li>
          ))}
        </ul>
      </>
    );
  } else {
    return <p className="alert alert-info">No data to show!</p>;
  }
}

export default StarwarsList;
