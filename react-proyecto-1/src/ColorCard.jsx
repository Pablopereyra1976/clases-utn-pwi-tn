import React from "react";

const Card1 = {
    likes: 3,
    fecha: '1 hour',
    colores: ['#36BA98', '#E9C46A', '#F4A261', '#E76F51'],
  }
  const Card2 = {
    likes: 132,
    fecha: 'Yesterday',
    colores: ['#667BC6', '#FDFFD2', '#FFB4C2', '#DA7297'],
  }
  const Card3 = {
    likes: 184,
    fecha: '2 days',
    colores: ['#F5F7F8', '#F4CE14', '#379777', '#45474B'],
  }
  const Card4 = {
    likes: 416,
    fecha: '3 days',
    colores: ['#071952', '#088395', '#37B7C3', '#EBF4F6'],
  }
  function App() {
    return (
      <div className="cartas">
        <ColorCard Card={Card1} />
        <ColorCard Card={Card2} />
        <ColorCard Card={Card3} />
        <ColorCard Card={Card4} />
      </div>
    )
  }
const ColorCard = ({ Card }) => {
  const { likes, fecha, colores } = Card;

  return (
    <div class="color-card">
        <div class="colores">
            <div className="color" style={{backgroundColor:colores[0]}}></div>
            <div className="color" style={{backgroundColor:colores[1]}}></div>
            <div className="color" style={{backgroundColor:colores[2]}}></div>
            <div className="color" style={{backgroundColor:colores[3]}}></div>
        </div>
        <div className="controles">
            <button className="btn-like"><i class="bi bi-heart"></i> {likes}</button>
            <span className="time">{fecha}</span>
        </div>
    </div>
    )
}

export { ColorCard }
/*
import React from "react";
import './ColorCard.css'

const ColorCard = ({Card}) => {
    const {likes, fecha, colores} = Card;
    return (
    
        <div class="color-card">
        <div class="colores">
            <div className="color" style={{backgroundColor:colores[0]}}></div>
            <div className="color" style={{backgroundColor:colores[1]}}></div>
            <div className="color" style={{backgroundColor:colores[2]}}></div>
            <div className="color" style={{backgroundColor:colores[3]}}></div>
        </div>
        <div className="controles">
            <button className="btn-like"><i class="bi bi-heart"></i> {likes}</button>
            <span className="time">{fecha}</span>
        </div>
    </div>
    )
}

export {ColorCard}*/