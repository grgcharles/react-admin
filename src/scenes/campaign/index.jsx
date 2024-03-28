
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { GoogleAdsCampaignData } from "../../data/GoogleAdsCampaignData";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";

const Campaigns = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "Year", headerName: "Year" },
    {
      field: "Campaign",
      headerName: "Campaign",
      flex: 1,
      cellClassName: "name-column--cell",
    },

  ];

  return (
    <Box m="20px">
      <Header title="CAMPAIGNS" subtitle="List of Campaigns" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
        }}
      >
        <DataGrid checkboxSelection rows={GoogleAdsCampaignData} columns={columns} />
      </Box>
    </Box>
  );
};

export default Campaigns;
