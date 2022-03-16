import logo from './logo.svg';
import './App.css';

const number = 5555;
const singer = { name: 'Dr.Mahfuz', job: 'singer' };
const singer2 = { name: 'Eva Rahman', job: 'singer2' };

const singers = [
  { name: 'Dr. Mahfuz', job: 'singer' },
  { name: 'Eva Rahman', job: 'singer' },
  { name: 'Agun', job: 'singer' },
  { name: 'pani', job: 'singer' },
]

const singerStyle = {
  color: 'purple',
  backgroundColor: 'white'
};

function App() {
  const nayoks = ['Rubel', 'BappaDa', 'kuber', 'jashim', 'sallu', 'srk', 'raju'];
  return (
    <div className="App">
      {/* <div className="music">
          <p style={singerStyle}>Name: {2222 + number}</p>
          <p>Name: {singer.name} {singer.job}</p>
          <p style={{ color: 'blue', backgroundColor: 'yellow' }}>Name: {singer2.name} {singer2.job}</p>
           </div> */}
      {
        nayoks.map(nayok => <li>Name: {nayok}</li>)
      }

      {/* {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      } */}

      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }

      {/* <Person name={nayoks[0]} nayika="mosha"></Person>
      <Person name={nayoks[1]} nayika="cheka"></Person>
      <Person name={nayoks[2]} nayika="kopa"></Person> */}
      <h5>New component.Yah!</h5>
      <p id="totoCompany">rock mama!React mama.</p>
      <Friend name="Ajay Devgun" phone="01777" movie="shingam"></Friend>
      <Friend name="Sallu Mia" phone="0199" movie="shingara"></Friend>
    </div>
  );
}

function Person(props) {
  console.log(props);
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>{props.nayika}</p>
    </div>
  )
}

function Friend(props) {
  console.log(props);
  return (
    <div className="container">
      <h3>Name: {props.name}</h3>
      <p>phone: {props.phone}</p>
      <p>movie: {props.movie}</p>
    </div>
  )
}

export default App;
