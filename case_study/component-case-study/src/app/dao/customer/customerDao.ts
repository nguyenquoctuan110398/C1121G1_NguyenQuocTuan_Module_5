import {Customer} from "../../model/customer/customer";

export class CustomerDao {
  public static customers: Customer [] = [
    {
      customerId: 1,
      customerCode: "KH-1111",
      customerName: "Nguyễn Thị Hào",
      customerBirthday: "1970-11-07",
      customerGender: 0,
      customerIdCard: "111111111",
      customerPhone: "0914545999",
      customerEmail: "thihao07@gmail.com",
      customerAddress: "23 Nguyễn Hoàng, Đà Nẵng",
      deleteFlag: true,
      customerTypeName: "Member"
    },

    {
      customerId: 2,
      customerCode: "KH-1112",
      customerName: "Phạm Xuân Diệu",
      customerBirthday: "1992-08-08",
      customerGender: 1,
      customerIdCard: "865342123",
      customerPhone: "0914678909",
      customerEmail: "xuandieu92@gmail.com",
      customerAddress: "K77/22 Thái Phiên, Quảng Trị",
      deleteFlag: true,
      customerTypeName: "Member"
    },

    {
      customerId: 3,
      customerCode: "KH-1113",
      customerName: "Trương Đình Nghệ",
      customerBirthday: "1990-02-27",
      customerGender: 1,
      customerIdCard: "488645199",
      customerPhone: "0901234561",
      customerEmail: "nghenhan2702@gmail.com",
      customerAddress: "K323/12 Ông Ích Khiêm, Vinh",
      deleteFlag: true,
      customerTypeName: "Diamond"
    }

  ]
}
