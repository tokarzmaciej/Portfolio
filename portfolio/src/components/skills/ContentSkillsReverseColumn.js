import { List, ListItem, Flex, GridItem, Grid } from "@chakra-ui/react";
function ContentSkillsReverseColumn({ data }) {
  return (
    <Grid templateColumns="repeat(2, 1fr)" ml="36px">
      <GridItem>
        <List fontSize="23px" m="0">
          <Flex direction="column" align="flex-end">
            {data.map((array, idx) => (
              <ListItem key={idx}>
                <span style={{ color: "#D69E2E" }}>{"★".repeat(array[1])}</span>
                <span style={{ color: "#4A5568" }}>{"★".repeat(array[2])}</span>
              </ListItem>
            ))}
          </Flex>
        </List>
      </GridItem>
      <GridItem>
        <List fontSize="23px" m="0">
          <Flex direction="column" align="flex-start" textAlign="left">
            {data.map((array, idx) => (
              <ListItem key={idx} width="100%">
                {array[0]}
              </ListItem>
            ))}
          </Flex>
        </List>
      </GridItem>
    </Grid>
  );
}

export default ContentSkillsReverseColumn;
