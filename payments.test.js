describe('Payments test (with setup and tear-down)', function() {
	beforeEach(function() {
		billAmtInput.value = 20;
		tipAmtInput.value = 4;
	});

	it('should successfully add a new payment to the allPayments object', function() {
		submitPaymentInfo();

		expect(allPayments['payment1'].billAmt).toEqual('20');
		expect(allPayments['payment1'].tipAmt).toEqual('4');
		expect(allPayments['payment1'].tipPercent).toEqual(20);
	});

	it('should successfully create a new payment', function() {
		let newPayment = {
			billAmt: '20',
			tipAmt: '4',
			tipPercent: 20
		};
		expect(createCurPayment()).toEqual(newPayment);
	});

	afterEach(function() {
		billAmtInput.value = '';
		tipAmtInput.value = '';
		paymentTbody.innerHTML = '';
		summaryTds[0].innerHTML = '';
		summaryTds[1].innerHTML = '';
		summaryTds[2].innerHTML = '';
		serverTbody.innerHTML = '';
		paymentId = 0;
		allPayments = {};
	});
});
