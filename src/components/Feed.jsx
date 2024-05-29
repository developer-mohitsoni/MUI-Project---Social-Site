import { Box } from "@mui/material";
import Posts from "./Posts";

import { imgURL } from "../utils/imgURL";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      {imgURL.map((img, index) => (
        <Posts key={index} src={img} />
      ))}
    </Box>
  );
};

export default Feed;
