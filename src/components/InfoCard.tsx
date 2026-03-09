import { Typography } from "@mui/material";

const InfoCard = () => {
  return (
    <Typography
      style={{
        textAlign: "center",
        padding: "20px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
        borderRadius: "8px",
        backgroundColor: "#fff",
        margin: "10px auto",
        maxWidth: "400px",
      }}
    >
      <b>EVERY DOLLAR HAS JOB</b> <br />
      <Typography sx={{ fontStyle: "oblique" }}>
        Give each one a purpose, and your money works for you.
      </Typography>
    </Typography>
  );
};

export default InfoCard;
