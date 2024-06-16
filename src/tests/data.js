const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "APARTAMENTO", uid: "apartamento", sortable: true },
  { name: "REMETENTE", uid: "remetente", sortable: true },
  { name: "DESTINATARIO", uid: "destinatario", sortable: true },
  { name: "DATA DE RECEBIMENTO", uid: "dataRecebimento", sortable: true },
  { name: "DATA DE RETIRADA", uid: "dataRetirada", sortable: true },
  { name: "RECEBIDO POR", uid: "recebidoPor", sortable: true },
  { name: "ENTREGUE POR", uid: "entreguePor", sortable: true },
  { name: "ENTREGUE AO MORADOR", uid: "nomePessoaPegou", sortable: true },
  { name: "STATUS", uid: "status", sortable: true },
  { name: "ENTREGAR", uid: "entregar" },
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
    dataRetirada: "16/09/2023",
    status: 'entregue',
    recebidoPor: 'Porteiro josé',
    entreguePor: 'Porteiro moises',
    remetente: 'Mercado Livre',
    destinatario: "Mariazinha",
    nomePessoaPegou: "Joaozinho",
    cpfPessoaPegou: "12345678900"
  },

  {
    "id": 2,
    "apartamento": "205 B",
    "dataRecebimento": "15/09/23",
    "dataRetirada": null,
    "status": "aguardando",
    "recebidoPor": "Porteiro Lucas",
    "entreguePor": null,
    "remetente": "Amazon",
    "destinatario": "José",
    "nomePessoaPegou": null,
    "cpfPessoaPegou": null
  },
  {
    "id": 3,
    "apartamento": "301 C",
    "dataRecebimento": "16/09/23",
    "dataRetirada": null,
    "status": "aguardando",
    "recebidoPor": "Porteiro Pedro",
    "entreguePor": null,
    "remetente": "Americanas",
    "destinatario": "João",
    "nomePessoaPegou": null,
    "cpfPessoaPegou": null
  }

];



export { columns, statusOptions, encomendas };
