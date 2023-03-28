import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomButton = styled(Button)(({ theme }) => ({
  marginRight: "10px",
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.info.main,
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },
}));
