import { Center, Divider, Text } from "@chakra-ui/react";
function HeadingWithDivider({ title }) {
  return (
    <>
      <Center>
        <Text
          color="#e1292b"
          fontSize="40px"
          style={{ fontVariant: "small-caps" }}
        >
          {title}
        </Text>
      </Center>
      <Center>
        <Divider opacity="1" width="85%" border="1px solid black"></Divider>
      </Center>
    </>
  );
}

export default HeadingWithDivider;
