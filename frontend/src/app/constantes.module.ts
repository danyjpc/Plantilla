
export class ConstantesModule {

}
export interface ConstantesConfig {
  
  BASE_URL:string;

}

export const APPCONFIG:ConstantesConfig = {
  
  BASE_URL: 'http://localhost:5000/api',
  //Porduccion
 //BASE_URL: 'http://40.76.138.58:5000/api'
 
};