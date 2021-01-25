import {
  ChakraProvider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import SignIn from './Signin';

export default function CustomModal(props) {
  const { isOpen, onOpen, onClose } = props;
  return (
    <>
      <ChakraProvider>
        <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose} isCentered size="md">
          <ModalOverlay />
          <ModalContent top>
            <ModalBody>{props.children}</ModalBody>
          </ModalContent>
        </Modal>
      </ChakraProvider>
    </>
  );
}
