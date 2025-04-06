import { Link } from "react-router-dom";

function Rooms() {
  const rooms = [
    { id: 1, name: "Quarto simples" },
    { id: 2, name: "Quarto executivo" },
    { id: 3, name: "Quarto vip" },
  ];

  return (
    <div>
      <h1>Quartos disponiveis</h1>
      <p>Quartos disponiveis para reserva</p>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            <Link to={`/roomdetails/${room.id}`}>{room.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Rooms;
