import { BasePagedListModel } from "../../Common/Models/BasePagedListModel";
import { BaseSearchModel } from "../../Common/Models/BaseSearchModel";

export class CountrySearchModel extends BaseSearchModel{
    name: string | undefined="";
}

export class CountryModel {
    name: string | undefined;
    id: number | undefined;
 }

 export class CountryListModel extends BasePagedListModel<CountryModel> {

 }