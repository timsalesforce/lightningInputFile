import { LightningElement } from 'lwc';

export default class LightningInputFile extends LightningElement {
    handleFileSelect(event) {
        console.log(event);
        new FileReader().readAsText(event.target.files[0]);
    }
}