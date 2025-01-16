import React from "react";
import { TextField, Box } from "@mui/material";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "20px",
        width: "100%",
      }}
    >
      <TextField
        label="Search"
        variant="outlined"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        sx={{
          width: { xs: "250px", sm: "300px", md: "400px" },
        }}
      />
    </Box>
  );
};

export default SearchBar;
