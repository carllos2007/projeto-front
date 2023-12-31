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
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  Pagination,
} from "@nextui-org/react";
import { AiOutlinePlus } from 'react-icons/ai';
import { BsThreeDotsVertical, BsSearch } from 'react-icons/bs';
import { FiChevronDown } from 'react-icons/fi';
import { columns, statusOptions, encomendas } from "./tests/data";
import { capitalize } from "./utils";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";

const statusColorMap = {
  entregue: "success",
  aguardando: "warning",
};


export default function App() {

  const [isOpen, setIsOpen] = useState(false);

  const [filterValue, setFilterValue] = useState("");
  const [selectedKeys, setSelectedKeys] = useState(new Set([]));
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
    remetente: (cellValue) => (
      <div className="flex flex-col">
        <p className="text-bold text-small capitalize">{cellValue}</p>
      </div>
    ),
    status: (cellValue) => (
      <Chip className="capitalize" color={statusColorMap[cellValue]} size="sm" variant="flat">
        {cellValue}
      </Chip>
    ),
    actions: () => (
      <div className="relative flex justify-center items-center gap-2 w-12">
        <Dropdown>
          <DropdownTrigger>
            <Button isIconOnly size="md" color="black" variant="light">
              <BsThreeDotsVertical />
            </Button>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem>Editar</DropdownItem>
            <DropdownItem>Entregar</DropdownItem>
          </DropdownMenu>
        </Dropdown>
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

  const topContent = useMemo(() => {
    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);
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
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<FiChevronDown className="text-small" />} variant="flat">
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>

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
        <span className="w-[30%] text-small text-default-400">
          {selectedKeys === "all"
            ? "Todos os itens selecionados"
            : `${selectedKeys.size} de ${filteredItems.length} selecionado`}
        </span>
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
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  return (
    <Table
      aria-label="Example table with custom cells, pagination and sorting"
      isHeaderSticky
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      classNames={{
        wrapper: "max-h-[382px]",
      }}
      selectedKeys={selectedKeys}
      selectionMode="multiple"
      sortDescriptor={sortDescriptor}
      topContent={topContent}
      topContentPlacement="outside"
      onSelectionChange={setSelectedKeys}
      onSortChange={setSortDescriptor}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
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
  );
}
