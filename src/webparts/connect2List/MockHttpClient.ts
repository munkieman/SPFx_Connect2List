import { ISPList } from './Connect2ListWebPart';

export default class MockHttpClient  {

    private static _items: ISPList[] = [{ Title: 'Mock Coffee', Id: '1', Description: 'Item 1' },
                                        { Title: 'Mock Tea', Id: '2', Description: 'Item 2' },
                                        { Title: 'Mock Milk', Id: '3', Description: 'Item 3' }];

    public static get(): Promise<ISPList[]> {
    return new Promise<ISPList[]>((resolve) => {
            resolve(MockHttpClient._items);
        });
    }
}