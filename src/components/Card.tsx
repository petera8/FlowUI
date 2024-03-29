import * as React from 'react';
import {
  Box,
  useColorModeValue,
  useColorMode,
  VStack,
  Text,
  HStack,
  Tag,
  Icon,
  Flex,
  Tooltip,
} from '@chakra-ui/react';
import { LuPlay } from 'react-icons/lu';
import { TbSettingsShare } from 'react-icons/tb';

interface CardProps {
  title: string;
  description: string;
  url: string;
  tag: string;
}
const Card = (props: CardProps) => {
  const { title, description, tag, url } = props;
  const bg = useColorModeValue('white', 'gray.700');
  const clr = useColorModeValue('gray.600', 'gray.400');

  const handleLinkClick = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
    link: string
  ) => {
    window.open(link);
    e.stopPropagation();
  };

  const renderCard = React.useCallback(() => {
    return (
      <Box
        py={2}
        px={[2, 4]}
        sx={{
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        backgroundColor={bg}
        rounded="sm"
        borderWidth="1px"
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        _hover={{
          shadow: 'md',
          textDecoration: 'none',
        }}
        h="fit-content"
        w="100%"
      >
        <VStack overflow="hidden" align="start" spacing={1}>
          <VStack spacing={1} align="start" w="100%">
            <Flex
              justifyContent="space-between"
              width="100%"
              onClick={(e) => handleLinkClick(e, url)}
              color={clr}
            >
              <Tooltip hasArrow label="Github link" placement="top">
                <HStack cursor="pointer">
                  {/* <Icon as={FaRegClone} color="teal" boxSize="1em" mt="1px" /> */}
                  <Text fontSize="sm" noOfLines={1} fontWeight="600" align="left">
                    {title}
                  </Text>
                </HStack>
              </Tooltip>
              <HStack cursor="pointer" onClick={(e) => handleLinkClick(e, url)}>
                <Tooltip hasArrow label="Run Workflow" placement="top">
                  <Flex alignItems="center" _hover={{ color: 'blue.500' }}>
                    <Icon
                      as={LuPlay}
                      color={useColorModeValue('gray', 'rgba(255,255,255,0.5)')}
                      fontWeight="900"
                      boxSize="1.2em"
                      mt="1px"
                    />
                  </Flex>
                </Tooltip>
                <Tooltip hasArrow label="Edit Workflow" placement="top">
                  <Flex alignItems="center" _hover={{ color: 'blue.500' }}>
                    <Icon
                      color={useColorModeValue('gray', 'rgba(255,255,255,0.5)')}
                      as={TbSettingsShare}
                      boxSize="1.2em"
                      mt="1px"
                    />
                  </Flex>
                </Tooltip>
              </HStack>
            </Flex>
          </VStack>
          <Box>
            <Text color="gray.500" fontSize="sm" noOfLines={2} textAlign="left">
              {description}
            </Text>
          </Box>
  
          {tag && (
            <Flex justifyContent="space-between" width="100%">
              <Box>
                <HStack spacing="1">
                  <Tag size="sm" colorScheme="purple">
                    <Text fontSize="xs">{tag}</Text>
                  </Tag>
                </HStack>
              </Box>
            </Flex>
          )}
        </VStack>
      </Box>
    );
  },[props]);

  return renderCard();
};

export default Card;
