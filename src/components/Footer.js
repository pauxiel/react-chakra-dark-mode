import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { chakra, Flex, SimpleGrid, HStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={{ base: "0px", md: "5px", lg: "300px" }}
      _after={{
        bg: "brand.500",
        opacity: 0.25,
        pos: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: -1,
        content: '" "',
      }}
    >
      <Flex
        direction="column"
        alignItems={{ base: "center", md: "start" }}
        justifyContent="center"
        px={{ base: 4, lg: 20 }}
        pt={{ base: 20, md: 24 }}
        pb={{ base: 4, md: 5 }}
      >
        {" "}
        <chakra.p>Copyright all right reserves</chakra.p>
      </Flex>

      <HStack
        spacing={4}
        justifyContent={{ base: "flex-start", md: "flex-end" }}
        alignItems={{ base: "center", md: "end" }}
        px={{ base: 4, lg: 20 }}
        pt={{ base: 5, md: 24 }}
        pb={{ base: 4, md: 5, lg: 10 }}
        mx={{ base: "auto", md: "0.5" }}
      >
        <chakra.p>Stay Informed</chakra.p>
        <FaGithub size="20px" />
        <FaLinkedin size="20px" />
        <FaTwitter size="20px" />
      </HStack>
    </SimpleGrid>
  );
};

export default Footer;

// <Flex direction={{ base: column, md: row }}>
//   <Box>
//     <chakra.p>Copyright all right reserves</chakra.p>
//   </Box>

//   <Box>
//     <HStack>
//       <FaGithub />
//       <FaLinkedin />
//       <FaTwitter />
//     </HStack>
//   </Box>
// </Flex>

{
  /* <Box px={20} pt={10}>
<chakra.p>Copyright all right reserves</chakra.p>
</Box> */
}

{
  /* <Box
px={{ base: 4, lg: 20 }}
pt={{ base: 20, md: 24 }}
pb={{ base: 20, md: 24 }}
>
<HStack>
  <FaGithub />
  <FaLinkedin />
  <FaTwitter />
</HStack>
</Box> */
}

{
  /* <HStack
pt={{ base: 20, md: 24 }}
justifyContent="end"
mr={{ lg: 300 }}
justifyContent="space-between"
>
<FaGithub />

<FaLinkedin />
<FaTwitter />
</HStack> */
}
