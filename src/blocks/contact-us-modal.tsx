import React, { createContext, memo, useContext } from "react";

import {
  motion,
  MotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import styled from "styled-components";

import {
  ThemingProps,
  ChakraProps,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  ModalCloseButton,
  ModalBody,
  BoxProps,
  Box,
} from "@chakra-ui/react";

import { __DEV__ } from "@definitions/utils";

import Letter from "@assets/images/letter.svg";

import ContactSimplePage from "../pages/home/components/ContactForm";

export const MotionBox = motion<BoxProps>(Box);

interface IContactUsModalContext {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
}

const ContactUsModalContext = createContext({} as IContactUsModalContext);

export const ContactUsModalProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ContactUsModalContext.Provider value={{ isOpen, onOpen, onClose }}>
      {children}
    </ContactUsModalContext.Provider>
  );
};

export const useContactUsModal = () => useContext(ContactUsModalContext);

const StyledContactButton = styled.button`
  --size: 80px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: var(--size);
  height: var(--size);
  min-width: var(--size);
  min-height: var(--size);
  background: #1250e2;
  border: 1px solid #bebebe;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 777rem;
  z-index: 1100;
  transition: transform 240ms ease;

  img {
    width: 56px;
    max-width: 90%;
  }

  &:hover {
    transform: rotate(16deg);
  }

  @media (max-width: 768px) {
    --size: 48px;
    bottom: 1rem;
    right: 1rem;
  }
`;

interface ITagListBlock extends ChakraProps, ThemingProps {}

const ContactUsModal: React.FC<ITagListBlock> = () => {
  const { isOpen, onOpen, onClose } = useContactUsModal();
  const { scrollYProgress } = useViewportScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]) as number &
    MotionValue<number>;

  const pointerEvents = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["none", "all"],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ) as any;

  return (
    <>
      <MotionBox
        style={{
          opacity: opacity,
          pointerEvents,
        }}
      >
        <StyledContactButton
          onClick={() => {
            onOpen();
          }}
        >
          <img src={Letter.src} alt="" />
        </StyledContactButton>
      </MotionBox>
      <Modal
        isCentered
        // scrollBehavior="inside"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />

        <ModalContent>
          <ModalBody py="6" px="2">
            <ModalCloseButton />

            <ContactSimplePage formProps={{ vertical: true }} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

if (__DEV__) {
  ContactUsModal.displayName = "ContactUsModal";
}

export default memo(ContactUsModal);
