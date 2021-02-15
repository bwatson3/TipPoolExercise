describe('Helpers test (with setup and tear-down)', function() {
	beforeEach(function() {
		billAmtInput.value = 100;
		tipAmtInput.value = 20;
		submitPaymentInfo();
	});

	it('should successfully add the total tip amount of all payments', function() {
		expect(sumPaymentTotal('tipAmt')).toEqual(20);

		billAmtInput.value = 200;
		tipAmtInput.value = 40;

		submitPaymentInfo();

		expect(sumPaymentTotal('tipAmt')).toEqual(60);
	});

	it('should succesfully add the total bill amount of all payments', function() {
		expect(sumPaymentTotal('billAmt')).toEqual(100);

		billAmtInput.value = 200;
		tipAmtInput.value = 40;

		submitPaymentInfo();

		expect(sumPaymentTotal('billAmt')).toEqual(300);
	});

	it('should successfully add the total tip percent', function() {
		expect(sumPaymentTotal('tipPercent')).toEqual(20);

		billAmtInput.value = 100;
		tipAmtInput.value = 20;

		submitPaymentInfo();

		expect(sumPaymentTotal('tipPercent')).toEqual(40);
	});

	it('should successfully add the tip percent of a single tip', function() {
		expect(calculateTipPercent(100, 23)).toEqual(23);
		expect(calculateTipPercent(111, 11)).toEqual(10);
	});

	it('should create a new td from the value and append to tr', function() {
		let newTr = document.createElement('tr');

		appendTd(newTr, 'test');

		expect(newTr.children.length).toEqual(1);
		expect(newTr.firstChild.innerHTML).toEqual('test');
	});

	it('should create delete td and append to tr on appendDeleteBtn(tr, type)', function() {
		let newTr = document.createElement('tr');

		appendDeleteBtn(newTr);

		expect(newTr.children.length).toEqual(1);
		expect(newTr.firstChild.innerHTML).toEqual('X');
	});

	afterEach(function() {
		billAmtInput.value = '';
		tipAmtInput.value = '';
		paymentTbody.innerHTML = '';
		summaryTds[0].innerHTML = '';
		summaryTds[1].innerHTML = '';
		summaryTds[2].innerHTML = '';
		serverTbody.innerHTML = '';
		allPayments = {};
		paymentId = 0;
	});
});
