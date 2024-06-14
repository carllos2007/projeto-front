import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input } from "@nextui-org/react";


const ModalAddNew = ({ isOpen, closeModal }) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal} placement="top-center">
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">Cadastro de Encomendas</ModalHeader>
        <ModalBody>
          <Input
            name="apartamento"
            autoFocus
            label="Apartamento"
            variant="bordered"
          />
          <Input
            name="nome"
            autoFocus
            label="Nome"
            variant="bordered"
          />
          <Input
            name="remetente"
            autoFocus
            label="Remetente"
            variant="bordered"
          />
          <Input
            name="data"
            label="Data do Recebimento"
            placeholder="."
            type="date"
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

export default ModalAddNew