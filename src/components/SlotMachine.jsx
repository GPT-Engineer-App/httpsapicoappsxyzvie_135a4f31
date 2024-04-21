import React, { useState } from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
} from '@chakra-ui/react';

const SlotMachine = ({ isSpinning }) => {
  const [slots, setSlots] = useState(['?', '?', '?']);

  const spinSlots = () => {
    if (isSpinning) {
      // Randomize the slot values
      setSlots(slots.map(() => Math.floor(Math.random() * 9) + 1));
    }
  };

  // Trigger spin on isSpinning change
  React.useEffect(() => {
    spinSlots();
  }, [isSpinning]);

  return (
    <Flex justifyContent="center">
      {slots.map((slot, index) => (
        <Box key={index} borderWidth="1px" borderRadius="lg" p={4} m={1} width="50px" height="50px" display="flex" alignItems="center" justifyContent="center" fontSize="2xl">
          {slot}
        </Box>
      ))}
    </Flex>
  );
};

export default SlotMachine;