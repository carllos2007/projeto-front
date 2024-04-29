const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "APARTAMENTO", uid: "apartamento", sortable: true },
  { name: "REMETENTE", uid: "remetente", sortable: true },
  { name: "DATA DE RECEBIMENTO", uid: "dataRecebimento", sortable: true },
  { name: "STATUS", uid: "status", sortable: true },
  { name: "ACTIONS", uid: "actions" },
];

const statusOptions = [
  { name: "Entregue", uid: "entregue" },
  { name: "Aguardando", uid: "aguardando" },
];

const encomendas = [
  {
    id: 1,
    apartamento: '165 A',
    dataRecebimento: '14/09/23',
    status: 'entregue',
    recebidoPor: 'Porteiro josé',
    entreguePor: 'Porteiro moises',
    remetente: 'Mercado Livre'
  },
  {
    id: 2,
    apartamento: '45 A',
    dataRecebimento: '14/09/23',
    status: 'entregue',
    recebidoPor: 'Porteiro josé',
    entreguePor: 'Porteiro moises',
    remetente: 'Mercado Livre'
  },
  {
    id: 3,
    apartamento: '65 B',
    dataRecebimento: '14/09/23',
    status: 'aguardando',
    recebidoPor: 'Porteiro josé',
    entreguePor: 'Porteiro moises',
    remetente: 'Mercado Livre'
  },
  {
    id: 4,
    apartamento: '17 A',
    dataRecebimento: '14/09/23',
    status: 'entregue',
    recebidoPor: 'Porteiro josé',
    entreguePor: 'Porteiro moises',
    remetente: 'Mercado Livre'
  },
  {
    id: 5,
    apartamento: '14 A',
    dataRecebimento: '14/09/23',
    status: 'aguardando',
    recebidoPor: 'Porteiro josé',
    entreguePor: 'Porteiro moises',
    remetente: 'Mercado Livre'
  },
  {
    id: 6,
    apartamento: '16 B',
    dataRecebimento: '14/09/23',
    status: 'entregue',
    recebidoPor: 'Porteiro josé',
    entreguePor: 'Porteiro moises',
    remetente: 'Mercado Livre'
  },
  {
    id: 7,
    apartamento: '12 A',
    dataRecebimento: '14/09/23',
    status: 'aguardando',
    recebidoPor: 'Porteiro josé',
    entreguePor: 'Porteiro moises',
    remetente: 'Mercado Livre'
  },
  {
    id: 8,
    apartamento: '34 A',
    dataRecebimento: '14/09/23',
    status: 'entregue',
    recebidoPor: 'Porteiro josé',
    entreguePor: 'Porteiro moises',
    remetente: 'Mercado Livre'
  },
];



export { columns, statusOptions, encomendas };
