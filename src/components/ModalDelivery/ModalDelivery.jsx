import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input } from "@nextui-org/react";

const ModalDelivery = ({ isOpen, closeModal }) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal} placement="top-center">
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">Entrega de Encomendas</ModalHeader>
        <ModalBody>
          <Input
            name="nome"
            autoFocus
            label="Nome"
            variant="bordered"
          />
          <Input
            name="cpf"
            autoFocus
            label="CPF"
            variant="bordered"
          />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="flat" onPress={closeModal}>
            Cancelar
          </Button>
          <Button color="primary" onPress={closeModal}>
            Confirmar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>

  )
}

export default ModalDelivery