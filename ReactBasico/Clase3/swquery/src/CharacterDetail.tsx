import ICharacter from "../model/ICharacter";

function CharacterDetail({p}: { p: ICharacter | null}) {
  if (p) {
    return (
      <div>
        <h6>Character Detail</h6>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <dl>
              <dt>Name</dt>
              <dd>{p.name}</dd>
              <dt>Height</dt>
              <dd>{p.height}</dd>
              <dt>Mass</dt>
              <dd>{p.mass}</dd>
              <dt>Hair color</dt>
              <dd>{p.hair_color}</dd>
              <dt>Skin color</dt>
              <dd>{p.skin_color}</dd>
              <dt>Eye color</dt>
              <dd>{p.eye_color}</dd>
              <dt>Birth year</dt>
              <dd>{p.birth_year}</dd>
              <dt>Gender</dt>
              <dd>{p.gender}</dd>
            </dl>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>No product data</p>;
  }
}

export default CharacterDetail;
