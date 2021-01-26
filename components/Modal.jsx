import {
  ChakraProvider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

export default function CustomModal({ isOpen, onOpen, onClose, children }) {
  return (
    <>
      <Modal closeOnOverlayClick isOpen={isOpen} onClose={onClose} isCentered size="md">
        <ModalOverlay />
        <ModalContent top>
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
