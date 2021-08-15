export interface LaunchesData {
  data: LaunchesPast;
}
export interface LaunchesPast {
  launchesPast?: Launch[] | null;
}
export interface Launch {
  mission_name: string;
  launch_date_local: string;
  launch_site: LaunchSite;
  links: Links;
  rocket: Rocket;
  ships?: ShipsEntity[] | null;
  id: string;
}
export interface LaunchSite {
  site_name_long: string;
}
export interface Links {
  wikipedia: string;
}
export interface Rocket {
  rocket_name: string;
  first_stage: FirstStage;
  second_stage: SecondStage;
}
export interface FirstStage {
  cores?: CoresEntity[] | null;
}
export interface CoresEntity {
  flight: number;
  core: Core;
}
export interface Core {
  reuse_count: number;
  status: string;
}
export interface SecondStage {
  payloads?: Payloads[] | null;
}
export interface Payloads {
  payload_type: string;
  payload_mass_kg: number;
}
export interface ShipsEntity {
  name: string;
  home_port: string;
  image: string;
}
