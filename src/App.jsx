
import {Card,Row,Col, Container} from 'react-bootstrap'
import './App.css'

function App() {
const pokemones=[
  {
    nombre:'Incineroar',
    url:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/727.png'
  },
  {
    nombre:'Chikorita',
    url:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png'
  },
  {
    nombre:'Togepi',
    url:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/175.png'
  },
  {
    nombre:'Machop',
    url:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png'
  },
  {
    nombre:'Piplup',
    url:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png'
  },
  {
    nombre:'Blastoise',
    url:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'
  },
]
  return (
    <>
  <Container>
 <Row>{
    pokemones.map((pokemon,index)=>(
    <Col sm={4} key={index}>
          <Card style={{ width:'14rem',marginTop:'20px',marginLeft:'50px'}}>
              <Card.Body>
              <Card.Img variant="top" src={pokemon.url} />
                <Card.Title>{pokemon.nombre}</Card.Title>
              </Card.Body>
          </Card>
    </Col>
    ))
  }
 </Row>
</Container>
    </>
  )
}

export default App
