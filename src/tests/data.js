import React from "react";
const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "APARTAMENTO", uid: "apartamento", sortable: true },
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
  }
];



export { columns, statusOptions, encomendas };
