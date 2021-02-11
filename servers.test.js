describe('Servers test (with setup and tear-down)', function() {
	beforeEach(function() {
		// initialization logic
		serverNameInput.value = 'Alice';
	});

	it('should add a new server to allServers on submitServerInfo()', function() {
		submitServerInfo();

		expect(Object.keys(allServers).length).toEqual(1);
		expect(allServers['server' + serverId].serverName).toEqual('Alice');
	});

	it('should successfully update the server table', function() {
		submitServerInfo();
		updateServerTable();

		let tdList = document.querySelectorAll('#serverTable tbody tr td');

		expect(tdList[0].innerText).toEqual('Alice');
		expect(tdList[1].innerText).toEqual('$0.00');
	});

	afterEach(function() {
		serverId = 0;
		allServers = {};
		serverTbody.innerHTML = '';
	});
});
