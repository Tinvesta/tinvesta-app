interface IFeature {
  place_name: string;
}

export interface IMapboxPlacesApiResponse {
  features: IFeature[];
}
