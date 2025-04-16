import { useMyGlobalContext } from "./myContext";

function MySearchForm() {
  const { setSearchTerm } = useMyGlobalContext();

  const handleMySubmit = (e) => {
    e.preventDefault();
    const formInput = e.target.elements.search;
    const inputVal = formInput.value;
    if (inputVal) {
      // console.log(inputVal);
      setSearchTerm(formInput.value);
      formInput.value = "";
    } else {
      console.log("Need a Value!!!");
    }
  };

  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form onSubmit={handleMySubmit} className="search-form">
        <input
          type="text"
          name="search"
          className="form-input search-input"
          placeholder="type the cat..."
        />
        <button type="submit" className="btn">
          Search!
        </button>
      </form>
    </section>
  );
}

export default MySearchForm;
