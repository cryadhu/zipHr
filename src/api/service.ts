import { ApiResponse, ApisauceInstance } from "apisauce";
import ServiceError from "./serviceError";
import { SectionList, ErrorResponse } from "./types";

const apiKey = "dmC8nVHdVjB59nwPuCLTtLuumWaED5EF";
export default class Service {
  api: ApisauceInstance;
  constructor(api: ApisauceInstance) {
    this.api = api;
  }

  handleResponse = (data: SectionList) => {
    return data.results;
  };

  handleParseError = async (error: Error) => {
    throw new ServiceError(error);
  };

  async fetchSectionList(section: String) {
    try {
      const data = await this.api.get<SectionList>(
        `${section}.json?api-key=${apiKey}`
      );
      return this.handleResponse(data?.data!);
    } catch (error) {
      return this.handleParseError(error);
    }
  }
}
