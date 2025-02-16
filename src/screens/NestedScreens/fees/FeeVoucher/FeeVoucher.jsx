import React from "react";
import {
  Container,
  Paper,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const FeeVoucher = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state || {};

  const months = ["January", "February", "March", "April", "May", "June"];

  // Ensure fee is properly handled to avoid undefined errors
  const totalFee = formData.fee ? parseInt(formData.fee.replace(/,/g, ""), 10) : 0;
  const monthlyFee = totalFee / 6;

  const handlePayment = (month) => {
    navigate("/fee-submission", { state: { month, formData } });
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={6} sx={{ padding: 4, marginTop: 4, borderRadius: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Fee Voucher
        </Typography>
        <Typography variant="h6">Student Information</Typography>
        <Typography>Enrollment No: {formData.enrollmentNo || "N/A"}</Typography>
        <Typography>Name: {formData.studentName || "N/A"}</Typography>
        <Typography>Phone: {formData.phone || "N/A"}</Typography>
        <Typography>Email: {formData.email || "N/A"}</Typography>
        <Typography>Course: {formData.course || "N/A"}</Typography>
        <Typography>Total Course Fee: Rs. {totalFee.toLocaleString()}</Typography>

        <Typography variant="h6" sx={{ marginTop: 3 }}>
          Monthly Fee Breakdown
        </Typography>

        {months.map((month, index) => (
          <Card key={index} sx={{ marginTop: 2 }}>
            <CardContent>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="body1">{month}</Typography>
                <Typography variant="body1">Classes: 4</Typography>
                <Typography variant="body1">Fee: Rs. {monthlyFee.toFixed(2)}</Typography>
                <Chip
                  label={index < 3 ? "Submitted ✅" : "Overdue ❌"}
                  color={index < 3 ? "success" : "error"}
                />
                {index >= 3 && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handlePayment(month)}
                  >
                    Submit Payment
                  </Button>
                )}
              </Grid>
            </CardContent>
          </Card>
        ))}
      </Paper>
    </Container>
  );
};

export default FeeVoucher;
