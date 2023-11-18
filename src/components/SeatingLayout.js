import React, { useState, useEffect } from "react";
import "../App.css"; // Import your CSS file
import Service from "../components/Service";
import ShowTime from "./ShowTime";

const SeatingLayout = (props) => {
  const { transferState } = props;
  const [seatingData, setSeatingData] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [dbSeats, setDbSeats] = useState([]);

  useEffect(() => {
    Service.getSeats().then((res) => {
      setDbSeats(res);
    });
  }, []);

  useEffect(() => {
    if (dbSeats.length === 0) {
      return;
    }

    const dataFromDatabase = dbSeats.map((ele) => ({
      row: ele.navyaSeatingRow,
      columns: [
        ele.navyaSeatingCol1,
        ele.navyaSeatingCol2,
        ele.navyaSeatingCol3,
      ],
      seats: ele.seats, // Replace 'seats' with the actual property name from your data.
    }));

    // Generate the seating layout based on the data.
    const layout = dataFromDatabase.map((rowInfo) => {
      if (!rowInfo.columns || rowInfo.columns.every((col) => col === 0)) {
        return null; // No columns or all columns are zero.
      }

      return {
        row: rowInfo.row,
        columns: rowInfo.columns,
      };
    });

    setSeatingData(layout);
  }, [dbSeats]);

  const handleSeatClick = (row, column, seat) => {
    // Handle seat selection here.
    // You can add logic to track and update selected seats.
    setSelectedSeats((prevSelectedSeats) => {
      const seatId = `${row}-${column}-${seat}`;
      return prevSelectedSeats.includes(seatId)
        ? prevSelectedSeats.filter((selectedSeat) => selectedSeat !== seatId)
        : [...prevSelectedSeats, seatId];
    });
  };
  // Function to calculate the total price based on the number of selected seats
  const calculateTotalPrice = () => {
    // Assuming each seat costs a fixed price
    const pricePerSeat = 10; // You can adjust this as needed
    return selectedSeats.length * pricePerSeat;
  };

  const handlePay = () => {
    const totalPrice = calculateTotalPrice();
    // Implement payment logic here using totalPrice
    console.log(`Total Price: $${totalPrice}`);
    // Add your payment handling logic (e.g., redirect to payment gateway, display payment modal, etc.)
  };
  return (
    <div className="tss">
      <div className="movieInfo">
        <div className="fgrid">
          <h1>{transferState.movieName}</h1>
          <h4>{transferState.theatreName}</h4>
        </div>
        <div className="sgrid">
          <ShowTime
            time={transferState.time}
            selectedShowTime={transferState.ShowTime}
          />
        </div>
      </div>
      <div className="theater">
        {seatingData.map((rowInfo) => {
          if (!rowInfo) {
            return null; // Skip rows with no columns or all columns are zero.
          }

          return (
            <div key={rowInfo.row} className="row">
              <span className="row-label">{rowInfo.row}</span>
              {rowInfo.columns.map((col, columnIndex) => (
                <div key={columnIndex} className="column">
                  {col > 0
                    ? Array.from({ length: col }, (_, seatIndex) => {
                        const seatNumber = columnIndex * col + seatIndex + 1;
                        return (
                          <div
                            key={seatIndex}
                            className={`seat ${
                              selectedSeats.includes(
                                `${rowInfo.row}-${columnIndex}-${seatNumber}`
                              )
                                ? "selected"
                                : "available"
                            }`}
                            onClick={() =>
                              handleSeatClick(
                                rowInfo.row,
                                columnIndex,
                                seatNumber
                              )
                            }
                          >
                            {seatNumber}
                          </div>
                        );
                      })
                    : ""}
                </div>
              ))}
            </div>
          );
        })}
      </div>
      <div className="payment-section">
        {selectedSeats.length > 0 && (
          <div className="payment-details">
            <p>Total Price: ₹{calculateTotalPrice()}</p>
            <button onClick={handlePay}>Pay Now</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SeatingLayout;
