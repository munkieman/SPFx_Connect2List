var MockHttpClient = /** @class */ (function () {
    function MockHttpClient() {
    }
    MockHttpClient.get = function () {
        return new Promise(function (resolve) {
            resolve(MockHttpClient._items);
        });
    };
    MockHttpClient._items = [{ Title: 'Mock Coffee', Id: '1', Description: 'Item 1' },
        { Title: 'Mock Tea', Id: '2', Description: 'Item 2' },
        { Title: 'Mock Milk', Id: '3', Description: 'Item 3' }];
    return MockHttpClient;
}());
export default MockHttpClient;
//# sourceMappingURL=MockHttpClient.js.map