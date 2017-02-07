'use strict';

describe('Service: OurService', function () {

  // load the service's module
  beforeEach(module('testApp'));

  // instantiate service
  var OurService;
  beforeEach(inject(function (_OurService_) {
    OurService = _OurService_;
  }));

  it('should do something', function () {
    expect(!!OurService).toBe(true);
  });

});
