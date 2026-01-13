import React from "react";
import { useEffect, useState } from "react";
import { getTrips } from "../services/bookingService";
import { Card, Box, CardContent, Button, Typography } from "@mui/material";
//import a vehicle icon
import {
  BusAlertSharp,
  EventSeat,
  CheckCircle,
  Cancel,
  TaskAlt,
  ErrorOutline,
} from "@mui/icons-material";
import NavBar from "../components/NavBar";

const Trip = () => {
  const [trips, setTrips] = useState([]);

  const statusConfig = {
    SCHEDULED: {
      color: "#2e7d32", // Green
      bgColor: "#e8f5e9",
      icon: <CheckCircle sx={{ fontSize: 14 }} />,
      label: "Scheduled",
    },
    CANCELLED: {
      color: "#d32f2f", // Red
      bgColor: "#ffebee",
      icon: <Cancel sx={{ fontSize: 14 }} />,
      label: "Cancelled",
    },
    COMPLETED: {
      color: "#1976d2", // Blue
      bgColor: "#e3f2fd",
      icon: <TaskAlt sx={{ fontSize: 14 }} />,
      label: "Completed",
    },
    DELAYED: {
      color: "#ed6c02", // Orange
      bgColor: "#fff3e0",
      icon: <ErrorOutline sx={{ fontSize: 14 }} />,
      label: "Delayed",
    },
  };

  useEffect(() => {
    getTrips()
      .then((response) => {
        console.log("RAW RESPONSE:", response);
        console.log("RESPONSE.DATA:", response.data);
        console.log("IS ARRAY:", Array.isArray(response.data));
        setTrips(response.data);
      })
      .catch((error) => {
        console.log("API ERROR:", error);
      });
  }, []);
  const capitalize = (text) => {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
  const formatTime = (time) => {
    if (!time) return "";
    return (
      new Date(time).toLocaleTimeString() +
      " " +
      new Date(time).toLocaleDateString()
    );
  };

  return (
    <div>
      <NavBar />
      <Card sx={{ backgroundColor: "ButtonFace", marginTop: "70px"}}>
        <CardContent>
          <Typography gutterBottom variant="h5" color="black" 
          sx={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            WebkitBackgroundClip: "text",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            fontFamily: "cursive",


          }}>
            Available Trips
          </Typography>
        </CardContent>
      </Card>

      {trips.length === 0 && <p>No trips found</p>}

      {trips.map((trip) => (
        <Card
          key={trip.id}
          sx={{
            mb: 2,
            borderRadius: 2,
            boxShadow: 3,
            p: 2,
            backgroundColor: "#f5f5f1",
            border: "1px solid #ccc",
            
            
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 2,
                fontFamily: "cursive",
              }}
            >
              {/* Left Side Info */}
              <Box sx={{ flex: 1, minWidth: "250px" }}>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1,fontFamily: "cursive", }}>
                  {capitalize(trip.route.fromCity.name)} -{" "}
                  {capitalize(trip.route.toCity.name)}
                  <Typography component="span" sx={{ ml: 1 }}>
                    {trip.route.distance}km
                  </Typography>
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="primary"
                  sx={{ fontWeight: 600 }}
                >
                  {trip.bus.operatorName}
                </Typography>
                <Box>
                  <Typography
                    variant="body2"
                    sx={{ mt: 1 }}
                    color="text.secondary"
                  >
                    <BusAlertSharp />
                    {trip.bus.busNumber}-{trip.bus.busType}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  Departure Time
                </Typography>
                <Typography color="text.secondary">
                  {formatTime(trip.departureTime)}
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  Arrival Time
                </Typography>
                <Typography color="text.secondary">
                  {formatTime(trip.arrivalTime)}
                </Typography>
                <Typography>Duration</Typography>
                <Typography color="text.secondary">
                  {trip.route.duration} hours
                </Typography>
              </Box>

              {/* Right Side - Status & Price */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "flex-start", md: "flex-end" },
                  minWidth: "150px",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: (statusConfig[trip.status] || statusConfig.SCHEDULED)
                      .color,
                    bgcolor: (
                      statusConfig[trip.status] || statusConfig.SCHEDULED
                    ).bgColor,
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    px: 1,
                    py: 0.5,
                    borderRadius: 1,
                  }}
                >
                  {(statusConfig[trip.status] || statusConfig.SCHEDULED).icon}
                  {(statusConfig[trip.status] || statusConfig.SCHEDULED).label}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    mt: 1.5,
                  }}
                >
                  <EventSeat /> {trip.availableSeats}
                </Typography>

                <Box
                  sx={{
                    mt: 2,
                    textAlign: { xs: "left", md: "right" },
                    width: "100%",
                  }}
                >
                  <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
                    ₹{trip.price}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    sx={{ borderRadius: 2 }}
                  >
                    Book Now
                  </Button>
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Trip;
