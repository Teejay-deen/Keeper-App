import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Note from "./Components/Note";
import notes from "./Components/Notes";


function App() {
  return (
    <div>
      <Header />
      {notes.map((notes) => 
   <Note key={notes.id} title={notes.title} content={notes.content} />

)}
      <Footer />
    </div>
  );
}

export default App;
