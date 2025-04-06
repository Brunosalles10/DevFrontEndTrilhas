import { useLocation } from "react-router-dom";

function BookingSuccess() {
  const roomName = useLocation().state.roomName;
  if (!roomName) {
    return <div>Reserva não encontrada</div>;
  }
  return (
    <div>
      <h1>Reserva realizada com sucesso!</h1>
      <p>Quarto: {roomName}</p>
    </div>
  );
}

export default BookingSuccess;
