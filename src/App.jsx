import MyGallery from "./MyGallery";
import MySearchForm from "./MySearchForm";
import ToggleMyTheme from "./ToggleMyTheme";

const App = () => {
  return (
    <main>
      <ToggleMyTheme />
      <MySearchForm />
      <section className="image-container">
        <MyGallery />
      </section>
    </main>
  );
};

export default App;
