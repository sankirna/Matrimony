export class BasePagedListModel<T> {
      Data: T[]| undefined;
      draw: string| undefined="";
      recordsFiltered: number| undefined;
      recordsTotal: number| undefined;
    }
    