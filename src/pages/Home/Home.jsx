import React, { useCallback, useMemo, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  Chip,
  Pagination,
} from "@nextui-org/react";
import { BsSearch } from 'react-icons/bs';
import { LuPackageCheck } from "react-icons/lu";
import { columns, statusOptions, encomendas } from "../../tests/data";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";

const statusColorMap = {
  entregue: "success",
  aguardando: "warning",
};


export default function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModalDelivery, setIsOpenModalDelivery] = useState(false);
  const [filterValue, setFilterValue] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortDescriptor, setSortDescriptor] = useState({
    column: "id",
    direction: "ascending",
  });
  const [page, setPage] = useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const filteredItems = useMemo(() => {
    let filteredEncomenda = [...encomendas];

    if (hasSearchFilter) {
      filteredEncomenda = filteredEncomenda.filter((encomenda) =>
        encomenda.apartamento.toLowerCase().includes(filterValue.toLowerCase()),
      );
    }
    if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
      filteredEncomenda = filteredEncomenda.filter((encomenda) =>
        Array.from(statusFilter).includes(encomenda.status),
      );
    }

    return filteredEncomenda;
  }, [encomendas, filterValue, statusFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);


  const columnComponents = {
    apartamento: (cellValue) => (
      <div className="flex flex-col">
        <p className="text-bold text-small capitalize">{cellValue}</p>
      </div>
    ),
    dataRecebimento: (cellValue) => (
      <div className="flex flex-col">
        <p className="text-bold text-small capitalize">{cellValue}</p>
      </div>
    ),
    dataRetirada: (cellValue) => (
      <div className="flex flex-col">
        <p className="text-bold text-small capitalize">{cellValue}</p>
      </div>
    ),
    remetente: (cellValue) => (
      <div className="flex flex-col">
        <p className="text-bold text-small capitalize">{cellValue}</p>
      </div>
    ),
    destinatario: (cellValue) => (
      <div className="flex flex-col">
        <p className="text-bold text-small capitalize">{cellValue}</p>
      </div>
    ),
    recebidoPor: (cellValue) => (
      <div className="flex flex-col">
        <p className="text-bold text-small capitalize">{cellValue}</p>
      </div>
    ),
    entreguePor: (cellValue) => (
      <div className="flex flex-col">
        <p className="text-bold text-small capitalize">{cellValue}</p>
      </div>
    ),
    nomePessoaPegou: (cellValue) => (
      <div className="flex flex-col">
        <p className="text-bold text-small capitalize">{cellValue}</p>
      </div>
    ),
    status: (cellValue) => (
      <Chip className="capitalize" color={statusColorMap[cellValue]} size="sm" variant="flat">
        {cellValue}
      </Chip>
    ),
    entregar: () => (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <div className="flex gap-3">
            <Button onClick={() => setIsOpenModalDelivery(true)} color="warning" variant="light" aria-label="entregar">
              <LuPackageCheck />
            </Button>
            <Modal isOpen={isOpenModalDelivery} onClose={() => setIsOpenModalDelivery(false)} placement="top-center">
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
                  <Button color="danger" variant="flat" onClick={() => setIsOpenModalDelivery(false)}>
                    Cancelar
                  </Button>
                  <Button color="primary" onClick={() => setIsOpenModalDelivery(false)}>
                    Confirmar
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
        </div>
      </div>
    ),
  };

  const renderCell = (encomenda, columnKey) => {
    const cellValue = encomenda[columnKey];
    return columnComponents[columnKey] ? columnComponents[columnKey](cellValue) : cellValue;
  };

  const onNextPage = useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = useCallback(() => {
    setFilterValue("")
    setPage(1)
  }, [])

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const topContent = useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Buscar por apartamento..."
            startContent={<BsSearch />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Button onPress={openModal} color="primary">
              Adicionar novo +
            </Button>
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

          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">Total {encomendas.length} encomendas</span>
          <label className="flex items-center text-default-400 text-small">
            Linhas por página:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    onRowsPerPageChange,
    encomendas.length,
    onSearchChange,
    hasSearchFilter,
    isOpen
  ]);

  const bottomContent = useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onPreviousPage}>
            Anterior
          </Button>
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onNextPage}>
            Próximo
          </Button>
        </div>
      </div>
    );
  }, [items.length, page, pages, hasSearchFilter]);

  return (
    <main className="w-screen h-screen dark text-foreground bg-background p-8 flex items-start justify-center">

      <Table
        aria-label="Listagem de encomendas"
        isHeaderSticky
        bottomContent={bottomContent}
        bottomContentPlacement="outside"
        classNames={{
          wrapper: "max-h-[382px]",
        }}
        sortDescriptor={sortDescriptor}
        topContent={topContent}
        topContentPlacement="outside"
        onSortChange={setSortDescriptor}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "entregar" ? "center" : "start"}
              allowsSorting={column.sortable}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={"Nenhuma encomenda encontrada"} items={sortedItems}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </main>
  );
}
