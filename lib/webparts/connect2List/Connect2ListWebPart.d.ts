import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
export interface IConnect2ListWebPartProps {
    description: string;
}
export default class Connect2ListWebPart extends BaseClientSideWebPart<IConnect2ListWebPartProps> {
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=Connect2ListWebPart.d.ts.map