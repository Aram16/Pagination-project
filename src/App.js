import './App.css';
import LessText from './LessText';

function App() {
  return (
    <div className="App">
        <LessText 
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique totam quos aspernatur incidunt illo eaque a unde blanditiis, at modi facere explicabo esse corrupti sequi earum assumenda animi eos debitis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique totam quos aspernatur incidunt illo eaque a unde blanditiis, at modi facere explicabo esse corrupti sequi earum assumenda animi eos debitis."
          max={40}
        />
    </div>
  );
}

export default App;
