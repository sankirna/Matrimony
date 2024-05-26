import { BasePagedListModel } from "../../Common/Models/BasePagedListModel";
import { BaseSearchModel } from "../../Common/Models/BaseSearchModel";

export class ProfileSearchModel extends BaseSearchModel {
    name: string | undefined = "";
}

export class ProfileModel {
    id: number | undefined = 0;
    firstName: string | undefined = "";
    middleName: string | undefined = "";
    lastName: string | undefined = "";
    sex: number | undefined = 0;
    sexValue: string | undefined = "";
    email: string | undefined = "";
    alternateEmail: string | undefined = "";
    phoneNo: string | undefined = "";
    alternatePhoneNo: string | undefined = "";
    langauge: string | undefined = "";
    otherInformation: string | undefined = "";

}
