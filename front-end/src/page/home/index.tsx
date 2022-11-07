import { Box } from "@mui/material";
import FooterHome from "./components/FooterHome";
import ListWrapper from "./components/ListWrapper";
import TitleHome from "./components/TitleHome";

function HomePage() {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        minHeight={"100%"}
      >
        <Box 
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        minHeight={"55vh"}
        >
        <TitleHome />
        <ListWrapper />
        </Box>
        <FooterHome />
      </Box>
    </>
  );
}

export default HomePage;
