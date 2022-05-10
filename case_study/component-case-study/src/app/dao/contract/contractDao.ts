import {Contract} from "../../model/contract/contract";

export class ContractDao {
  public static contracts: Contract [] = [

    {
      contractId: 1,
      contractStartDate: "2020-12-08",
      contractEndDate: "2021-12-08",
      contractDeposit: 0,
      employeeName: "Hồ Thị Yến",
      customerName: "Nguyễn Thị Hào",
      servicesName: "Room Twin 01"
    },

    {
      contractId: 2,
      contractStartDate: "2020-07-14",
      contractEndDate: "2020-07-21",
      contractDeposit: 200000,
      employeeName: "Nguyễn Hữu Hà",
      customerName: "Trương Đình Nghệ",
      servicesName: "Villa Beach Front"
    },

    {
      contractId: 3,
      contractStartDate: "2021-03-15",
      contractEndDate: "2021-03-17",
      contractDeposit: 50000,
      employeeName: "Hồ Thị Yến",
      customerName: "Dương Văn Quang",
      servicesName: "House Princess 01"
    }
  ]
}
