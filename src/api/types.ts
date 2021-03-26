export interface SectionMappedItem {
  [key: string]: [SectionItem];
}
export interface SectionItem {
  abstract: string;
  byline: string;
  created_date: string;
  title: string;
  url: string;
  multimedia: [
    {
      url: string;
    }
  ];
}
export interface SectionList {
  results: [SectionItem];
}

export interface ErrorResponse {
  fault: {
    faultString: string;
    detail: {
      errorcode: string;
    };
  };
}
