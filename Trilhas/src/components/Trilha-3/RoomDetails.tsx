import { useNavigate, useParams } from "react-router-dom";

function RoomDetails() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const rooms = [
    { id: 1, name: "Quarto simples sem ar condicionado" },
    { id: 2, name: "Quarto executivo com ar condicionado" },
    { id: 3, name: "Quarto vip com ar condicionado e banheira" },
  ];

  const room = rooms.find((room) => room.id === Number(id));
  if (!room) {
    return <div>Quarto não encontrado</div>;
  }

  const goToSuceess = () =>
    navigate("/booking-success", {
      state: { roomName: room.name },
    });

  return (
    <div>
      <h1>Room Details</h1>
      <p>{room.name}</p>

      <ul>
        <li>
          ID DO QUARTO {id} <button onClick={goToSuceess}>Reservar</button>
        </li>
      </ul>
    </div>
  );
}

export default RoomDetails;

//
