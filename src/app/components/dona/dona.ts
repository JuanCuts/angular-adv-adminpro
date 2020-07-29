import { MultiDataSet, Label, Colors } from 'ng2-charts';
export interface DonaInterface {
    title:string,
    labels:Label,
    data:MultiDataSet,
    colors:Colors[]
}