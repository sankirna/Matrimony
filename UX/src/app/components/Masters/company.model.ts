import { BasePagedListModel } from "../../Common/Models/BasePagedListModel";
import { BaseSearchModel } from "../../Common/Models/BaseSearchModel";

export class CountrySearchModel extends BaseSearchModel{
    Name: string | undefined="";
}

export class CountryModel {
    Name: string | undefined;
    Id: number | undefined;
 }

 export class CountryListModel extends BasePagedListModel<CountryModel> {

 }