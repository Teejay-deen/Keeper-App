
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Note from './Components/Note';
import notes from './Components/Notes';

function NotesCreated(notes){
  return (
    <Note key={notes.id} title={notes.title} content={notes.content} />
  )
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(NotesCreated)}
      <Footer />
    </div>
  );
}

export default App;
