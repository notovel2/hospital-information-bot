import { isNullOrUndefined } from "util";

export const getMessage = (params) => {
  console.log('params', params);
  let room = params.Room
  if (isNullOrUndefined(room)) {
    return `กรุณาระบุสถานที่ค่ะ`
  }
  return `${room} ไปทาง...ค่ะ`
}